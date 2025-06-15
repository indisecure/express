const express = require('express');
const app = express();
// Set view engine to Pug
app.set('view engine', 'pug');

// Middleware setup
// app.use((req,res,next)=>{ // user created middle ware
//    console.log(req.originalUrl);
//    next()   
// })
app.use(express.json()); // Handles JSON requests from API testing tools like POSTMAN
app.use(express.urlencoded({ extended: true })); // Handles URL-encoded requests from user FORM 
app.use(express.static('public'));//Static file serving (if needed) 
const router = require('./routes/route'); 
app.use('/api', router);

// default Home route
app.get('/', (req, res) => {
   res.render('index', { message: 'Hello World' });
});
//should be used after default route only
app.get('/', (req, res) => {
   res.sendFile('home.html')
});
let port=2500
app.listen(port, () => {
   console.log(`Server running on port  ${port}`);
});

