const mongoose = require('mongoose');
const BASE_DB=process.env.DB_URI
mongoose.connect(BASE_DB)
.then(response => {
    console.log("DATABASE connection successfully");
})
.catch(err => {
    console.log("DATABASE connection failed");
})
