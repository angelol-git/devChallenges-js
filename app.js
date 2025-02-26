import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import quotesRouter from './routes/quotes.js';
import dotenv from 'dotenv';
dotenv.config();
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__filename);
app.use(express.static(path.join(__dirname, 'public')));

app.use('/quotes', quotesRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
