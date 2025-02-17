import express from "express";
import axios from "axios";
import * as cheerio from "cheerio";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(express.static("public"));

const scrapeWebsite = async (url) => {
    try {
        const { data } = await axios.get(url, {
            headers: { 
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36" 
            },
            timeout: 20000 // 20 seconds timeout
        });
        const $ = cheerio.load(data);

        let paragraphs = [];

        $(".mw-parser-output > p, article p").each((i, el) => {
            const text = $(el).text().trim();
            if (text && !text.includes("Privacy Policy") && !text.includes("Creative Commons")) {
                paragraphs.push(text);
            }
        });

        return paragraphs.length > 0 ? paragraphs : ["No relevant content found."];
    } catch (error) {
        return ["Error: " + error.message];
    }
};

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/scrape", async (req, res) => {
    const { url } = req.body;

    if (!url.startsWith("http")) {
        return res.json({ paragraphs: ["Error: Invalid URL. Use full URL including https://"] });
    }

    const paragraphs = await scrapeWebsite(url);
    res.json({ paragraphs });
});

app.listen(port, () => {
    console.log(`✅ Server running at http://localhost:${port}`);
});