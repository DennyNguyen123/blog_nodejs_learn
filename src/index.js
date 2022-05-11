const path = require("path")
const express = require('express')
const morgan = require('morgan')
const { engine } = require ('express-handlebars');
const liveReload = require("livereload")
const connectLivereload = require("connect-livereload")

const publicDirection = path.join(__dirname,'public');
liveReloadServer = liveReload.createServer()
liveReloadServer.watch(publicDirection)
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});
const app = express()
app.use(connectLivereload());
const port = 3000

app.use(express.static(publicDirection))

//Http logger
app.use(morgan("combined"))

//Template engine
app.engine('hbs', engine({
  extname:".hbs"
}));

app.set('view engine', 'hbs');
// app.set('views', './views');
app.set('views', path.join(__dirname,'resources\\views'));

app.get('/', (req, res) => {
  res.render('home')
})

app.get('/news', (req, res) => {
  res.render('news')
})


app.listen(port, () => {
  console.log(`Port http://localhost:${port}`)
})
