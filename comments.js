// Create web server
// http://localhost:3000/comments
router.get('/', (req, res) => {
    // res.send('Hello world');
    res.json(comments);
});