const { client } = require('../config/connectRedis')

module.exports = {
    getHome: (req, res, next) => {
        return res.status(200).json({
            message: "Redis Home"
        })
    },

    postSetName: async (req, res, next) => {
        try{
            const { name } = req.body

            await client.set('name', name, { EX: 30 });
    
            return res.status(200).json({
                message: "name set for 30 seconds"
            })
        } catch(error) {
            console.log(error)
        }
    },

    getGetName: async (req, res, next) => {
        try{
            const name = await client.get('name');
    
            return res.status(200).json({
                message: "success",
                name: name
            })
        } catch(error) {
            console.log(error)
        }
    },

    postAddToList: async (req, res, next) => {
        try{
            const { field } = req.body

            await client.lPush('list', field, { EX: 3 });
    
            return res.status(200).json({
                message: "list set for 1hr"
            })
        } catch(error) {
            console.log(error)
        }
    },

    getGetList: async (req, res, next) => {
        try{
            const list = await client.lRange('list', 0, -1);
    
            return res.status(200).json({
                message: "success",
                list: list
            })
        } catch(error) {
            console.log(error)
        }
    },

    getPopItemList: async (req, res, next) => {
        try{
            await client.lPop('list');
            const list = await client.lRange('list', 0, -1);
    
            return res.status(200).json({
                message: "success",
                list: list
            })
        } catch(error) {
            console.log(error)
        }
    },

    getDeleteList: async (req, res, next) => {
        try{
            await client.del('list');
    
            return res.status(200).json({
                message: "list deleted",
            })
        } catch(error) {
            console.log(error)
        }
    },

}