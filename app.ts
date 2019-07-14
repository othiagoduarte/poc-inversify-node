import * as express from 'express';

const app = express();

app.get('/', (req, res) =>{
    res.send('Ola mundo');
})
app.listen(3000, () =>{
    console.log('Express funcionando com node');
});