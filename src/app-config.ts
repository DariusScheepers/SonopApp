import { environment } from '../functions/src/constants/environment.constant';
import { firebaseServe, firebaseSite } from '../functions/src/constants/destinations.constant';

export let CONFIG = {
    url: environment.development ? firebaseServe : firebaseSite
}

//http://localhost:5000
//https://sonopapptest1.firebaseapp.com
// 10.0.10.225:3000
// 10.0.5.103:3000