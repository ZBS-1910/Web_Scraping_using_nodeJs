# Interactive Web Scraper

## 📌 Project Overview
This project is a **web scraper** built using **Node.js**, **Express.js**, **Axios**, and **Cheerio**. It fetches text data (paragraphs) from a given website and presents it in a user-friendly way. The application includes a simple front-end and API for scraping content dynamically.

## 🚀 Features
- Fetches content (paragraphs) from any publicly accessible website.
- Uses **Cheerio** to parse HTML and extract data.
- Filters out irrelevant content (e.g., disclaimers, privacy policies).
- Includes error handling for invalid URLs, timeouts, and blocked requests.
- Frontend with a user-friendly **HTML page** for interaction.
- Supports **CORS** for flexibility in API usage.

## 🛠️ Tech Stack
- **Node.js** (Backend)
- **Express.js** (Web framework)
- **Axios** (For HTTP requests)
- **Cheerio** (For web scraping)
- **HTML, CSS, JavaScript** (Frontend)

## 📂 Project Structure
```/web-scraper
│── public/
│   ├── styles.css     # CSS file for styling
│   ├── script.js      # JavaScript for handling scraping requests
│── index.html         # Frontend HTML file
│── server.js         # Express server
│── package.json      # Node.js dependencies
│── package-lock.json # Auto-generated dependency lock file
│── node_modules/     # Installed dependencies (auto-generated)


## 🔧 Installation & Setup
1. **Clone the Repository**
   ```sh
   git clone https://github.com/your-repo/web-scraper.git
   cd web-scraper
   ```

2. **Install Dependencies**
   ```sh
   npm install
   ```

3. **Run the Server**
   ```sh
   node server.js
   ```

4. **Open in Browser**
   Navigate to:  
   **http://localhost:3000**

## 📌 How It Works
1. Enter a **valid URL** in the input field.
2. Click the **Scrape** button.
3. The server fetches **text data** from the given website.
4. Extracted content appears on the page.

## ⚠️ Notes & Limitations
- Some websites **block scrapers** (use a different user-agent or proxy).
- The scraper **cannot access login-protected pages**.
- Long response times might be due to website restrictions.

## 📝 License
This project is licensed under the **MIT License**.

## 👨‍💻 Author
- **Zameer Basha**  

🚀 Happy Scraping! 🎯

