const http = require("http");
const app = require("./app")
const server = http.createServer(app);
const {DB_URI} = require("./config/dotEnv")
const mongoose = require("mongoose");
const {PORT} = require("./config/dotEnv")



mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});

const startServer = async()=>{
    server.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

startServer();