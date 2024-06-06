<<<<<<<<<<<<<<  ✨ Codeium Command ⭐ >>>>>>>>>>>>>>>>
const express = require('express');

const app = express();

const port = 3000;

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});




<<<<<<<  484d38c1-b654-4f40-b22a-820c66223178  >>>>>>>