document.getElementById("scrapeForm").addEventListener("submit", async (event) => {
    event.preventDefault();

    const url = document.getElementById("url").value;
    const resultsDiv = document.getElementById("results");
    const loadingDiv = document.getElementById("loading");

    resultsDiv.innerHTML = "";
    loadingDiv.classList.remove("hidden");

    try {
        const response = await fetch("/scrape", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ url })
        });

        const data = await response.json();
        loadingDiv.classList.add("hidden");

        if (!data.paragraphs || data.paragraphs.length === 0) {
            resultsDiv.innerHTML = "<p>No content found on this page.</p>";
        } else {
            resultsDiv.innerHTML = "<h2>Scraped Content:</h2>" + 
                data.paragraphs.map(p => `<p>✅ ${p}</p>`).join("");
        }
    } catch (error) {
        loadingDiv.classList.add("hidden");
        resultsDiv.innerHTML = `<p style="color:red;">❌ Error: ${error.message}</p>`;
    }
});

// Dark Mode Toggle
const darkModeToggle = document.getElementById("darkModeToggle");
darkModeToggle.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode");
});
