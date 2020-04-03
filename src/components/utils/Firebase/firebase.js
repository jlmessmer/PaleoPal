import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig)
    app.auth().signInAnonymously()
    app.firestore().enablePersistence()
  }

  getAbbreviationsStartingWith(input, startingPoint) {
    let db = app.firestore()
    let abbreviationsRef = db.collection("abbreviations")
    let upperLimit = `${input.substring(0, input.length - 1)}${String.fromCharCode(input.charCodeAt(input.length - 1) + 1)}`
    let query = abbreviationsRef
      .where("text", ">=", input)
      .where("text", "<", upperLimit)
      .orderBy("text")
      .startAt(startingPoint)
      .limit(26)
    return query
  }

  getImageUrl(img_id) {
    let storage = app.storage()
    let gsReference = storage.refFromURL(`gs://paleopal-1bb47.appspot.com/abbreviations/${img_id}.jpg`)
    return gsReference
  }
}

export default Firebase