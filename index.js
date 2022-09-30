// Import packages
const express = require("express");
const home = require("./routes/home");
const fs = require("fs");

// Middlewares
const app = express();
app.use(express.json());

// Routes
app.use("/home", home);


const levels = JSON.parse(fs.readFileSync("data.json", "utf8"));

// const newLevelPush = (newLevel) => {
//     let updateLevels = JSON.parse(fs.readFileSync("data.json", "utf8"));
//     updateLevels.push({
//         levelId: updateLevels.length + 1,
//         levelInfo: newLevel,
//     });
//     fs.writeFileSync("data.json", JSON.stringify(updateLevels), "utf-8");
// };

levels.forEach((item, index) => {
    app.get(`/levels/${index + 1}`, (req, res) => {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.send(levels[index]);
    });
});

// connection
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));
