import express, {Express}  from "express";

const PORT: number = parseInt(process.env.PORT || "8080");
const app: Express = express();

function getRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min);
}

app.get("/rolldice", (req, res) => {
    res.send(getRandomNumber(1, 6).toString());
})

app.listen(PORT, () => {
    console.log(`Started server on http://localhost:${PORT}`)
})
