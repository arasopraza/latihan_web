const Post = require("../models/post");

module.exports = {
    index: async (req, res) => {
        const posts = await Post.findAll();
        return res.render('post/index',{ 
            posts 
        });
    },

    create: async (req, res) => {
        return res.render('post/create');
    },

    store: async (req, res) => {
        await Post.create(req.body);

        return res.redirect('/posts');
    },
};