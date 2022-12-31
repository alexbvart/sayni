import { db } from "../../helpers/credentials";
import { collection, getDocs, addDoc, doc, serverTimestamp, getDoc } from 'firebase/firestore';
import { orders } from "../../helpers/collection.firebase";

const orderCollection = collection(db, orders);

export const getOrderCollection = getDocs(orderCollection)

export const createOrder = (newOrder) => { 
    const order = {...newOrder, date: serverTimestamp()}
    return addDoc(orderCollection,order)
} 

export const getOrderById = (id) => { 
    const refDoc = doc(orderCollection,id)
    return getDoc(refDoc)
} 