import express from "express";

const app = express();

app.get("/", (req, res) => {
	return res.send("gabriel-dp");
});

const port = 5000;
app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
