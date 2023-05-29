// const {getComments, saveComment} = require('../db')
const {getRecords, getExactRecord} = require('../db')
// const generateCommentView = require('../Views/commentsView')
const generateRecordsView = require('../Views/ServiceRecords')

class IndexController{
    static index(req, res){
        res.send('hello from IndexController')
    }

    // static about(req, res){
    //     res.send('from about of IndexController')
    // }
    //
    // static async getAllComments(req, res){
    //     try {
    //         const comments = await getComments();
    //         // console.log('in index controller', comments)
    //         res.send(comments);
    //     } catch (error) {
    //         res.status(500).json({ error: 'An error occurred while fetching users' });
    //     }
    // }
    //
    // static async createCommentForm(req, res) {
    //     try{
    //         const comments = await getComments();
    //         const commentsView = generateCommentView(comments)
    //         res.send(commentsView)
    //     } catch(error){
    //         res.status(500).json({ error: 'An error occurred while fetching comments' });
    //     }
    //
    //     // getComments()
    //     //     .then((comments) => {
    //     //         // console.log('fjdklsaf', comments)
    //     //         const commentsView = generateCommentView(comments);
    //     //         res.send(commentsView);
    //     //     })
    //     //     .catch((error) => {
    //     //         res.status(500).json({ error: 'An error occurred while fetching comments' });
    //     //     });
    // }
    //
    // static async createComment(req, res) {
    //     const { content } = req.body;
    //
    //     try {
    //         await saveComment(content);
    //         res.redirect('/comments');
    //     } catch (error) {
    //         res.status(500).json({ error: 'An error occurred while saving the comment' });
    //     }
    // }

    // static async createRecordForm(req, res){
    //     try{
    //         const comments = await getExactRecord();
    //         const commentsView = generateCommentView(comments)
    //         res.send(commentsView)
    //     } catch(error){
    //         res.status(500).json({ error: 'An error occurred while fetching comments' });
    //     }
    // }

    static async getRecord(req, res) {
        try{
            const records = await getRecords();
            // console.log(records)
            // res.send(records)

            const recordsView = generateRecordsView(records)
            res.send(recordsView)

        } catch(error){
            // console.log('fjdslakfj')
            res.status(500).json({ error: 'An error occurred while fetching records' });
        }

        // const content = req.query.content;
        //
        // getExactRecord(content)
        //     .then(foundRecord => {
        //         res.json(foundRecord);
        //     })
        //     .catch(error => {
        //         res.status(500).json({ error: 'An error occurred' });
        //     });
    }

    static async getAllRecords(req, res) {
        try {
            const records = await getRecords();
            // console.log('in index controller', comments)
            res.send(records);
        } catch (error) {
            res.status(500).json({ error: 'An error occurred while fetching users' });
        }
    }

    static async getExactRecord(req, res){
        const { content } = req.body;
        // console.log(content)

        // try {
        //     await getExactRecord(content);
        //     res.redirect('/getRecord');
        // } catch (error) {
        //     res.status(500).json({ error: 'An error occurred while saving the comment' });
        // }

        getExactRecord(content)
            .then(foundRecord => {
                // Handle the found record, e.g., send it as a response
                res.json(foundRecord);
            })
            .catch(error => {
                // Handle the error, e.g., send an error response
                res.status(500).json({ error: 'An error occurred' });
            });
    }

}

module.exports = IndexController