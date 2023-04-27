class Auth{
    static validate(req, res, next){
        // middleware logic will be here

        console.log('from auth middleware')
        next()
    }
}

module.exports = Auth