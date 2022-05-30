const express = require('express')
const router = express.Router()
const { 
    getHome,
    postSetName,
    getGetName,
    postAddToList,
    getGetList,
    getPopItemList,
    getDeleteList
} = require('../controllers/restfulRedis')

router.get('/', getHome)

router.post('/setname', postSetName)

router.get('/getname', getGetName)

router.post('/addtolist', postAddToList)

router.get('/getlist', getGetList)

router.get('/poplist', getPopItemList)

router.get('/deletelist', getDeleteList)

module.exports = router