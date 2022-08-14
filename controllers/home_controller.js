module.exports.home = function(req,res){
    // res.end('<h1>Hello</h1>');
    res.render('home',{
        title: "Home"
    })
}