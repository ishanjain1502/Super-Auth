const express = require('express');
const app = express();
const cors = require('cors');
const env = require('dotenv');
const mongoose  = require('mongoose');
const User = require('./models/user.model');

let port = 1337;
app.use(cors())
app.use(express.json())

const uri="mongodb+srv://ishanTest:ishn@cluster0.cenhd.mongodb.net/myFirstDb?retryWrites=true&w=majority";

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() =>{
    console.log("connected bruh......");
}).catch(err => console.log(err))


app.post('/api/register', async(req,res)=>{
    try {
		const newPin = await(req.body.pin)
		await User.create({
			name: req.body.name,
			email: req.body.email,
			pin: newPin,
		})
		res.json({ status: 'ok' })
	} catch (err) {
		res.json({ status: 'error', error: 'Duplicate email' })
	}
})

app.post('/api/login', async(req,res)=> {
    const user = await User.findOne({
		email: req.body.email,
	})

	if (!user) {
		return { status: 'error', error: 'Invalid login' }
	}

    let pin = req.body.pin;
    if(pin === user.pin){
        return res.json({ status: 'ok', user: verified });
    }else{
        return res.json({ status: 'error', user: false })
    }

})







app.listen(port, ()=>{
  console.log(`Server Connected to port ${port}`);  
})