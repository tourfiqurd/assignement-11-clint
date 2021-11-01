import { initializeApp } from 'firebase/app';
import firebaseConfig from './Firebage.config';

const initialigeAuthentiaction = () => {

    initializeApp(firebaseConfig);
}
export default initialigeAuthentiaction;