
const app = require('./app');


const PORT = process.env.PORT || 8085;


app.listen(PORT, () => console.log('Server has been started on localhost:' + PORT))
