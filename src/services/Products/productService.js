import { appFirebase } from "../../helpers/credentials";
import { collection, getFirestore, getDocs} from 'firebase/firestore';

const dbFire = getFirestore(appFirebase);

const productsCollection = collection(dbFire, "products");
export const getProductsCollection = getDocs(productsCollection)