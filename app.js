const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')

dotenv.config({ path: './src/config/config.env'})

const PORT = process.env.PORT || 5001
const restfulRedis = require('./src/routes/restfulRedis')

const app = express()

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.get('/', (req, res, next) => res.status(200).json({ message: "Server running"} ))

app.use('/redis', restfulRedis)

app.listen(PORT, () =>
    console.log(`Server ready at http://localhost:${PORT}`)
)