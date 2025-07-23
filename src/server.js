import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Api is working");
});

app.post("/test",(req,res) => {
    res.send("Post req work complete")
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

