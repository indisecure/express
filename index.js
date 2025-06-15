const express = require('express');
const app = express();
const path=require('path')
app.set('view engine', 'pug');
// Middleware setup
// app.use((req,res,next)=>{ // user created middle ware
//    console.log(req.originalUrl);
//    next()   
// })
app.use(express.json()); // Handles JSON requests from API testing tools like POSTMAN
app.use(express.urlencoded({ extended: true })); // Handles URL-encoded requests from user FORM 
app.use(express.static(path.join(__dirname,'public')));//Static file serving 
const router = require('./routes/route'); 
app.use('/api', router);
// default Home route for pug template
// app.get('/', (req, res) => {
//    res.render('index', { message: 'Hello World' });
// });
// static file route should be used after default route only
app.get('/', (req, res) => {
   res.sendFile(path.join(__dirname,'public/home.html'))
});
const port=2500
app.listen(port, () => {
   console.log(`Server running on port  ${port}`);
});

