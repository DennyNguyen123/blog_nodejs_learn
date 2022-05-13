const siteRoute = require("./site")
const newsRoute = require("./news")
function route(app){

    app.use("/news",newsRoute)
    app.use("/",siteRoute)    
}

module.exports = route;