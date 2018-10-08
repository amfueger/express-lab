const express = require('express');
const app = express();


app.get('/', (res,req) => {
	res.send('This server is responding')
});
app.listen(3000, () => {
	console.log('express lab is listening on port 3000'); 
	});