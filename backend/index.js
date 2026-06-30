// const express = require("express");
// const cors=require("cors");
// const app = express();
// const PORT = 3000;

// app.use(express.json());
// app.use(cors());
// // app.get("/", (req, res) => {
// //   res.send("Hello World");
// // });
// // app.get("/users", (req, res) => {
// //   res.json({message: "List of users"});
// // });
// // app.post("/users", (req, res) => {
// //   console.log(req.body);
// //   res.json({
// //     success: true,
// //     message: "User created successfully",
// //     user: req.body,
// //   });
// // });
// app.post("/add", (req, res) => {
//     const {a,b}=req.body;
//     const sum=a+b;
//     res.json({
//         message:"success",
//         data:sum,
//     })
// });
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });
const express=require("express");
const cors=require("cors");
const app=express();
const PORT=3000;

app.use(express.json());
app.use(cors());
app.post("/add", (req, res) => {
    const {a,b}=req.body;
    const sum=a+b;
    res.json({
        message:"success",
        sum:sum,
    })
});
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
