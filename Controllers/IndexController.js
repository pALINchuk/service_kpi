class IndexController{
    static index(req, res){
        res.send('hello from IndexController')
    }

    static about(req, res){
        res.send('from about of IndexController')
    }

}

module.exports = IndexController