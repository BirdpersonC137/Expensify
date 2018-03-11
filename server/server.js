const path = require('path');
const Express = require('express');
const app = Express();
const publicPath = path.join(__dirname, '..', 'public');

app.use(Express.static(publicPath));

app.get('*', (req, res)=>{
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(3000, ()=>{
    console.log('Server is up');
});