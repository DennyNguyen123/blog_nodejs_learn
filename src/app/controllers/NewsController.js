class NewsController{
    // GET /news
    index(req,res){
        res.render("news");
    }
    // GET /news/:slug => :slug là biến động
    show(req, res) {
        res.send('NEWS DETAIL!!!');
    }
}

module.exports = new NewsController();