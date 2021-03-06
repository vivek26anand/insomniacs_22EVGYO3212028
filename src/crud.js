import { doc, setDoc, addDoc, updateDoc, getDoc, getDocs, collection, deleteDoc  } from "firebase/firestore"; 
import {db} from './firebase';

const crud = class {
    constructor(userId){
        this.userId = userId
    }
    async getPlaces(){
        const docs = []
        const querySnapshot = await getDocs(collection(db, `users/${this.userId}/places`));
        await querySnapshot.forEach((doc) => {
            docs.push({
                id: doc.id,
                data: doc.data()
            })
          });
        return docs
    }
    async getPlace(placeId){
        const placeRef = await getDoc(doc(db, `users/${this.userId}/places`, placeId));
        if (placeRef.exists()) {
            return placeRef.data()
          } else {
            return false
          }
    }
    async addPlace(place){
        const placeRef = await addDoc(collection(db, `users/${this.userId}/places`), place);
        return placeRef.id;
    }
    async updatePlace(placeId, place){
        await updateDoc(doc(db, `users/${this.userId}/places`, placeId), place);
    }
    async deletePlace(placeId){
        await deleteDoc(doc(db, `users/${this.userId}/places`, placeId));
    }
    async addStudent(student){
        const placeRef = await addDoc(collection(db, `users/${this.userId}/students`), student);
        return placeRef.id;
    }
    async getStudents(){
        const docs = []
        const querySnapshot = await getDocs(collection(db, `users/${this.userId}/students`));
        await querySnapshot.forEach((doc) => {
            docs.push({
                id: doc.id,
                data: doc.data()
            })
          });
        return docs
    }
}

export default crud;
