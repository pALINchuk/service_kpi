const {getComments, saveComment} = require('../db')
const generateCommentView = require('../Views/commentsView')

class IndexController{
    static index(req, res){
        res.send('hello from IndexController')
    }

    static about(req, res){
        res.send('from about of IndexController')
    }

    static async getAllComments(req, res){
        try {
            const comments = await getComments();
            // console.log('in index controller', comments)
            res.send(comments);
        } catch (error) {
            res.status(500).json({ error: 'An error occurred while fetching users' });
        }
    }

    static async createCommentForm(req, res) {
        try{
            const comments = await getComments();
            const commentsView = generateCommentView(comments)
            res.send(commentsView)
        } catch(error){
            res.status(500).json({ error: 'An error occurred while fetching comments' });
        }

        // getComments()
        //     .then((comments) => {
        //         // console.log('fjdklsaf', comments)
        //         const commentsView = generateCommentView(comments);
        //         res.send(commentsView);
        //     })
        //     .catch((error) => {
        //         res.status(500).json({ error: 'An error occurred while fetching comments' });
        //     });
    }

    static async createComment(req, res) {
        const { content } = req.body;

        try {
            await saveComment(content);
            res.redirect('/comments');
        } catch (error) {
            res.status(500).json({ error: 'An error occurred while saving the comment' });
        }
    }

}

module.exports = IndexController