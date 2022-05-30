const { createClient } = require('redis')

const initClient = (createClient) => {
    try{
        const redisClient = createClient();

        redisClient.on('error', (err) => console.log('Redis Client Error: ', err));
    
        redisClient.connect().then( _ => console.log("connected to redis!") );
    
        return redisClient
    } catch(error) {
        console.log(error)
    }
}

const client = initClient(createClient)

module.exports = { client }