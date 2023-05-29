const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080

const about_route = require('./Routes/about')
const user_route = require('./Routes/user')
const index_route = require('./Routes')

// app.get('/', (req, res) => {
//     res.send('hello from express')
// })

app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

//middleware or to set router
app.use('/', index_route)
// app.use('/api/about', about_route)
// app.use('/user', user_route)


const start = async () => {
    try{
        app.listen(PORT, () => {
            console.log(`server running on port ${PORT}`)
        })
    } catch (error){
        console.log(error)
    }
}

start()