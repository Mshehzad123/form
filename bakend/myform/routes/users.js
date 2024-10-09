var Stds = require('../routes/components/student');
var bcryptjs = require('bcryptjs');
/* GET users listing. */
 const signup =  async (req,res)=>{
  try {
   const {name,email,password} = req.body;
   const user = await Stds.findOne({email});
   if(user) return res.status(400).send('User already exists');
   const hashPassword = await bcryptjs.hash(password,10);
   const createUser = new Stds({
     name,
     email,
     password:hashPassword
   });
   await createUser.save();
   res.status(200).json({
    message: 'User created successfully',
    _id:createUser._id,
    name: createUser.name,
    email: createUser.email,
   });
  } catch (error) {
    console.log(error);  
    res.status(500).send(error.message);
  }
}
module.exports = signup;


