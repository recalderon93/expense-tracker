const express = require('express');
/** App initialization */
const app = express();
/** Middlewares */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
/** Routes */
app.use(require('./routes'))
/** Server initialization */
app.listen(3000, () => {
  console.log('server is listening at port 3000');
})
