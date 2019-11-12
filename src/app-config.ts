import { environment } from '../functions/src/constants/environment.constant';

export let CONFIG = {
    url: environment.development ? "http://localhost:5000" : "https://sonopapptest1.firebaseapp.com"
}

//http://localhost:5000
//https://sonopapptest1.firebaseapp.com
// 10.0.10.225:3000
// 10.0.5.103:3000