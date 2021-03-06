const path = require("path")
const express = require('express')
const morgan = require('morgan')
const { engine } = require('express-handlebars');
const liveReload = require("livereload")
const connectLivereload = require("connect-livereload")
const route = require("./routes")

const publicDirection = path.join(__dirname, 'public');
const port = process.env.PORT || 3000;

// Live reload page when change code
liveReloadServer = liveReload.createServer()
liveReloadServer.watch(publicDirection)
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});

const app = express()
app.use(express.static(publicDirection))
app.use(connectLivereload());

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json())

// Http logger
app.use(morgan("combined"))


//Template engine
app.engine('hbs', engine({
  extname: ".hbs"
}));
app.set('view engine', 'hbs');
// app.set('views', './views');
app.set('views', path.join(__dirname, 'resources\\views'));


route(app)




app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})
