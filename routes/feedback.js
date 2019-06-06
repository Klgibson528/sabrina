let express = require('express')
let router = express.Router()


router.get('/feedback', (req, res) => {
  //you want to load the comments on render as well
  res.render('feedback')
})






module.exports = router
