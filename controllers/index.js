//let names=[];
const Goal = require("../models/Goal.js")

exports.showIndex = async(req,res)=>{
	const goals = await Goal.find({});
	console.log(goals)
	res.render("index.ejs",{name:'sajan',goals:goals});
}


exports.dataShow = (req,res)=>{
	res.render("index.ejs",{name:'Sajan'});
}

exports.formShow = (req,res)=>{
	res.render("form.ejs");
}

exports.formSubmit = (req,res)=>{
	// names.push(req.body.title)
	//console.log(req);
	//res.send("submitted")
	//res.render("formSubmit.ejs")
	//res.send("Name:"+names);

	let title = req.body.title;
	if(title===undefined||title === ""){
		res.send("you entered nothing !!!")

	}
	//res.send(req.body.title)

	const goal = new Goal({
		//title: title 
		//or
		title
	});

	goal.save();

	//res.send("Saved ...")
	res.redirect('/');
}

exports.deleteGoal =async (req,res)=>{
	await Goal.remove({_id: req.params.id});
	res.redirect("/");
}