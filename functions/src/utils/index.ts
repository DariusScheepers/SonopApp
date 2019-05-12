/**
 * Sonop Helper Functions
 */

import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

export class HTTPObject {
    name?: String;

    constructor(name: String) {
      this.name = name;
    }
}

interface AnyHTTPUtils {
  get<T extends HTTPObject>(obj: T): functions.HttpsFunction;
  // post<T extends HTTPObject>(obj: T): Promise<any>;
}

export class HTTPUtils implements AnyHTTPUtils {
  get<T extends HTTPObject>(obj: T): functions.HttpsFunction {

    return functions.https.onRequest((_, response) => {

      const promise = admin.firestore()
        .doc(`${obj.name}`)
        .get()
        promise.then(snapshot => {
          const data = snapshot.data();
          return response.send(data);
        }).catch(error => {
          return response.status(500).send("Dit lyk asof daar iets vout is op ons kant. Wees rustig.");
        })
      })
  }
}

