import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Api is working");
});

app.post("/test",(req,res) => {
    res.send("Post req work complete")
})

app.listen(8000, () => {
  console.log("🚀 Reverse proxy listening on http://localhost:8000");
});
