const express = require('express');
const bodyparser = require('body-parser');
const videosObj = require('./data');
const port = process.env.PORT || 8080;
const { MongoClient, ServerApiVersion } = require('mongodb');
const router = express.Router();
const app = express();
const uri = require('./secret.js');
const cors = require("cors");
app.use(bodyparser.json());
app.use(cors());

const client = new MongoClient(uri, {
	serverApi: {
	  version: ServerApiVersion.v1,
	  strict: true,
	  deprecationErrors: true,
	}
});

async function run() {
	try {
	  client.connect();
	  const myDB = client.db('Vis-XVU-DB').collection('videos');
	  console.log("You successfully connected to MongoDB!");
	  app.route('/dbvideos')
		.get((req, res) => {
			myDB.find().toArray().then(results => {
				res.json(results);
			})
		})
		.post((req, res)=>{
			console.log(req.body);
			myDB.insertOne(req.body).then(results=>{
				console.log(req.body);
				res.contentType('application/json');
				res.send(JSON.stringify(req.body));
			})
		});
	   app.route('/dbvideos/:id') 
		  .get((req, res) =>{
			console.log(req.params);
			/*let videosJson = [];
			if(videosObj.videos.some((ele)=>ele.id === req.params.id)){
				videosJson = videosObj.videos.filter((ele) => ele.id === req.params.id);
			}
			res.json(videosJson);*/
			myDB.findOne({ uid: req.params.id }).then(results=>{
				console.log(req.params.id);
				res.contentType('application/json');
				res.send(JSON.stringify(results));
			})
	  	});
	} finally {
	  await client.close();
	}
  }
  run().catch(console.dir);

/*app.use(bodyparser.urlencoded({
	extended: true 
}));*/

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/public/index.html');
});

app.route('/adminPanel')
	.post((req, res)=>{
		console.log(req.body.usernameParam, req.body.passwordParam);
		if(req.body.usernameParam === "admin" && req.body.passwordParam === "AKIATEEVKTGZENI3H4UO"){
			console.log("success");
			//res.sendFile(__dirname + '/public/admin.html');
			res.send({message: "Successfully logged in!"});
		}
	})
	.get((req, res)=>{
		res.sendFile(__dirname + '/public/admin.html');
	})

/*app.post('/videos', (req, res) => {
	//console.log(req.body);
	res.send(`DONE: ${req.body.token}`);
	res.json(videosObj);
})*/

app.listen(port, ()=>{
	console.log(`Ready Listening on ${port}`);
});
