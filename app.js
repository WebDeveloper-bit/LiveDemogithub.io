var express = require('express'),
	app		= express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
	res.render("home");
});

app.get("/about", function(req, res){
	res.render("about");
});

app.listen(process.env.PORT || 3000, process.env.IP, function(){
	console.log("server Started at port 3000....");
});