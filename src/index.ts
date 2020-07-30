import * as express from 'express';
import api from './api';

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use('/api/v1',api);

const {
    PORT = 3001
} = process.env;



if(require.main === module){
    app.listen(PORT,()=> {
        console.log('server started at http://localhost:'+PORT)
    })
}


export default app;
