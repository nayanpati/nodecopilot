const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 4000;

app.use(cors());
app.get("/", (req, res) => res.json("Hello From AWS Copilot"));

app.get("/service", (req, res, next) => {
    res.json(["EKS","ECS","ECR","VPC","EC2"]);
   });

app.listen( PORT, () => console.log("Server is listening to port " + PORT ));
