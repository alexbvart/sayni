import { db } from "../../helpers/credentials";
import { collection, getDocs} from 'firebase/firestore';
import { products } from "../../helpers/collection.firebase";

const productsCollection = collection(db, products);

export const getProductsCollection = getDocs(productsCollection)