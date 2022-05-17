require('dotenv').config();
const express=require('express');
const cors=require('cors');
const app=express();

const path=require('path');

const PORT=process.env.PORT || 3000;

const connectDB=require('./config/db');
connectDB();

// Cors

const corsOptions={
    origin:'*'
}

// static middleware to server html/css files static files
app.use(express.static('public'));

app.use(cors(corsOptions));
app.use(express.json());


// Template Engine
app.set('views',path.join(__dirname,'/views'));
app.set('view engine','ejs');



app.use('/api/files',require('./routes/files'));
app.use('/files',require('./routes/show'));
app.use('/files/download',require('./routes/download'))


app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`);
})