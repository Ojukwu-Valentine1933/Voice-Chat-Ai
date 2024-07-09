const dotenv = require("dotenv")
dotenv.config()


module.exports = {
    PORT: process.env.PORT,
    DB_URI: process.env.DB_URI,
    CLIENT_ID: process.env.CLIENT_ID,
    CLIENT_SECRET: process.env.CLIENT_SECRET
}
