const express = require('express');
const path = require('path'); 

const swaggerUi = require('swagger-ui-express'); 
const swaggerDocument = require('./swagger.json');

//const helmet = require('helmet');
//const rateLimit = require("express-rate-limit");
//const cors = require('cors');

const passport = require('passport');
const logger = require('morgan');

const { logHandler } = require('./middleware/logHandler');
const { errorHandler } = require('./middleware/errorHandler');

const config = require('./config/index');
const connectDB = require('./config/db')

const authRoute = require('./routes/authRoute');
const postRoute = require('./routes/postRoute');

const app = express();
const router = express.Router() ; 

//console.log(process.env);
if (process.env.NODE_ENV === 'development') {
    app.use(logger('dev'))
}

app.use(logger('dev'))
app.use(logHandler);

connectDB(); 
 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//'./public'
app.use(express.static(path.join(__dirname, 'public')));

//init passport
app.use(passport.initialize());


app.use('/api/auth', authRoute); 
// app.use('/api/user', userRoute);
// app.use('/api/post', postRoute);

app.use(errorHandler);


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// app.use('/api/v1', router);

app.listen(config.PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${config.PORT}`));

 