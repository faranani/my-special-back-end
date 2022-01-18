const router = require('express').Router()
const User = require('../models/User')

router.get('/', (req, res) => {
    res.send("This is home page")
})

router.post('/', (req, res) => {
    
    User.create(req.body)
    .then( user => {
        res.status(200).json(user)
    })
    .catch(error => {
        console.log(error)

        res.status(400).json({errMsg: error.message})
    })

})

router.post('/', (req,res)=>{ 
  User.getAll(reg,body).
   then(user =>{
       res.status(200).json(user)
   })
   . catch (error =>{
       console.log(error)

       res.status(400).json({errMsg: error.message})
   })

})

router.delete('/id', (reg,res)=>{
    User.deleteAdd(reg,body).
    then(user =>{
        res.status(200).json(user)
    }).catch(
        error =>{
            console.log(error)
            res.status(200).json({errMsg: error.message})
        }

    )

    

})

module.exports = router;