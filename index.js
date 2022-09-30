// Import packages
const express = require("express");
const home = require("./routes/home");

// Middlewares
const app = express();
app.use(express.json());

// Routes
app.use("/home", home);


const levels = [{"levelId":1,"levelInfo":[["none","none","none","none"],["none","active","full","none"],["none","full","full","none"],["none","none","none","none"]]},{"levelId":2,"levelInfo":[["none","none","none","none"],["none","active","full","none"],["none","water","full","none"],["none","full","full","none"],["none","full","full","none"],["none","none","none","none"]]},{"levelId":3,"levelInfo":[["none","none","none","none","none","none"],["none","active","full","full","full","none"],["none","water","full","full","full","none"],["none","full","full","full","full","none"],["none","full","full","water","full","none"],["none","full","full","full","full","none"],["none","full","full","full","full","none"],["none","water","full","full","full","none"],["none","none","none","none","none","none"]]},{"levelId":4,"levelInfo":[["none","none","none","none","none","none","none","none","none","none"],["none","active","full","full","full","full","full","full","full","none"],["none","water","water","water","full","full","water","full","full","none"],["none","full","full","water","full","full","water","full","full","none"],["none","full","full","water","full","full","full","full","full","none"],["none","full","full","full","full","full","full","water","water","none"],["none","full","full","full","full","full","water","full","full","none"],["none","water","full","full","water","full","full","full","full","none"],["none","none","none","none","none","none","none","none","none","none"]]},{"levelId":5,"levelInfo":[["none","none","none","none","none","none","none","none","none","none"],["none","full","full","full","full","full","full","full","full","none"],["none","full","water","full","full","full","full","water","full","none"],["none","full","full","full","full","full","full","full","full","none"],["none","full","full","full","full","active","full","full","full","none"],["none","full","full","full","full","full","full","full","full","none"],["none","full","water","full","full","full","full","water","full","none"],["none","full","full","full","full","full","full","full","full","none"],["none","none","none","none","none","none","none","none","none","none"]]},{"levelId":6,"levelInfo":[["none","none","none","none","none","none","none","none","none","none"],["none","full","full","full","full","full","full","full","full","none"],["none","full","water","full","full","full","full","water","full","none"],["none","full","full","full","full","full","full","full","full","none"],["none","full","full","full","full","active","full","full","full","none"],["none","full","full","full","full","full","full","water","full","none"],["none","full","water","full","full","full","full","water","full","none"],["none","full","full","full","water","water","water","water","full","none"],["none","none","none","none","none","none","none","none","none","none"]]}]

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
