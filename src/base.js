import Rebase from 're-base'
import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyBUtK7ooPLqvcg_wv5_ND_aWf_kd9zyeq8',
  authDomain: 'bora-ajudar-gabrielrufino.firebaseapp.com',
  databaseURL: 'https://bora-ajudar-gabrielrufino.firebaseio.com',
  projectId: 'bora-ajudar-gabrielrufino',
  storageBucket: 'bora-ajudar-gabrielrufino.appspot.com',
  messagingSenderId: '878905404197'
}

const app = firebase.initializeApp(config)
const base = Rebase.createClass(app.database())

export const auth = firebase.auth()
export default base
