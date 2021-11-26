var db = require('../database');
function add_Post(req, res) {
    
    const data = { UserId: `${req.user.Id}`, Caption: req.body.Caption, Image: req.body.Image, Created_At: req.body.Created_At };
    //console.log(req.body);
    db.query('INSERT INTO blogs.posts SET ?', data, (err, result) => {
        if (!err) {
            res.send('New post is successfully uploaded...');
        }
        else res.send(err);
    });
};

module.exports = add_Post;