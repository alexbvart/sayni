import { db } from "../../helpers/credentials";
import { collection, getDocs, query, where} from 'firebase/firestore';
import { products } from "../../helpers/collection.firebase";

const productsCollection = collection(db, products);

export const getProductsCollection = getDocs(productsCollection)

export const getProductsById = (id) => { 
    // const refDoc = doc(productsCollection,id)
    // return getDoc(refDoc)

    const q = query(productsCollection, where("id", "==", Number(id)));
    return getDocs(q)
} 