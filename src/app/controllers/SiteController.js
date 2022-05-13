class SiteController{
    // GET /news
    index(req,res){
        res.render("home");
    }
    // GET /news/:slug => :slug là biến động
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();