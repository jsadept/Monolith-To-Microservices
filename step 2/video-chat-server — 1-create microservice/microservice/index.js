const express = require('express');
const expressApp = require('./app');

const StartServer = async() => {

    const app = express();

    const PORT = process.env.PORT || 8082;

    await expressApp(app);


    app.listen(PORT, () => console.log('Server has been started on localhost:' + PORT))
        .on('error', (err) => {
            console.log(err);
            process.exit();
        })
}

StartServer();
