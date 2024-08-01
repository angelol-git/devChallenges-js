import { Router } from 'express';
import dotenv from 'dotenv';
dotenv.config();
const router = Router();
const apiKey = process.env.API_KEY;
const url = "https://api.api-ninjas.com/v1/quotes";

router.get('/random', async (req, res) => {
    try {
        const response = await fetch(url, {
            method: "GET",
            headers: { 'X-Api-Key': apiKey }
        });
        if (!response.ok) {
            throw new Error("Failed to fetch quote");
        }
        const data = await response.json();
        res.send(data);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Failed to fetch quote" });
    }
})

export default router;