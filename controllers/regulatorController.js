const  RegulatorModal = require("../model/regulatorModel")


const regulatorLogin = async (req, res) => {
  const { email, password } = req.body;

//   console.log(email, password)

  try {
    const oldUser = await RegulatorModal.findOne({ email });
    console.log(oldUser)

    if (!oldUser) {
      return res.status(404).json({ message: "User doesn't exist" });
    }

    const isPasswordCorrect = password === oldUser.password;

    if (!isPasswordCorrect){
      return res.status(400).json({ message: "Invalid Password" });
    }

    // const token = jwt.sign(
    //   {
    //     email: oldUser.email,
    //     id: oldUser._id,
    //     role: oldUser.role,
    //     avatar: oldUser.avatar.url,
    //   },
    //   process.env.JWT_SECRET,
    //   {
    //     expiresIn: process.env.JWT_EXPIRESIN,
    //   }
    // );

    res.status(200).json({ result: oldUser });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};


// Get All Product (Admin)
 const getUser = async(req, res) => {
    const users = await RegulatorModal.find()

    res.status(200).json({
        success: true,
        users,
    })
}


module.exports={
    regulatorLogin,
    getUser
}