import { environment } from '../functions/src/constants/environment.constant';
import { firebaseServe, firebaseSite } from '../functions/src/constants/destinations.constant';

export let CONFIG = {
    url: environment.development ? firebaseServe : firebaseSite
}
