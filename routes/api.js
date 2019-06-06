let express = require('express')
let router = express.Router()
let myData = require('../data/feedback.json')
let bodyParser = require('body-parser');
let fs = require('fs')

router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())
// router.get('/api', (req, res) => {
//   res.send('we are totally going to make an API!!!!!')
// })

router.get('/api', (req, res) => {
  res.json(myData)

})

router.post('/api', (req, res) => {
  myData.unshift(req.body)
  fs.writeFile('data/feedback.json', JSON.stringify(myData), function (err) {
    if (err) {
      console.log(err)
    }

  })
  res.json(myData)
  // res.send('you made a post request you badass!')
})



module.exports = router
