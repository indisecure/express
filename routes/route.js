const express = require('express');
const router = express.Router();
// Routes for user-related views 
router.get('/form', (req, res) => {
   res.render('form', { message: 'Indi Secure' });
});
router.get('/contact', (req, res) => { 
   res.render('contact');
});
// CRUD operations for /api end point
router.get('/', (req, res) => {
   res.send('User details received');
});
router.post('/', (req, res) => {
   const { name, city } = req.body;  
res.send(`User created with name ${name || 'Unknown'} city ${city || Unknown}`);
});
router.get('/:id', (req, res) => {
   res.send(`User details with ID: ${req.params.id}`);
});
router.put('/:id', (req, res) => {
   const { name } = req.body;
   res.send(`User details updated. new Name: ${name || 'Unknown'}`);
});
router.delete('/:id', (req, res) => {
   res.send(`User with ID ${req.params.id} has been deleted`);
});
module.exports = router;
