require('dotenv').config();
const mongoose= require('mongoose');
const {urlDB}= process.env

mongoose.connect(urlDB, {useNewUrlParser: true})
.then(database => {
    console.log('database is connected c:')
})
.catch(err => {
    console.log(err);
})