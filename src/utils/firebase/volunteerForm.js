import { getFirestore, collection, addDoc, doc, setDoc } from "firebase/firestore";
import { auth } from "./auth";

export const saveVolunteerForm = async (data) =>{
    const db = getFirestore();
    try {
        const {uid, email} = auth.currentUser
        console.log(uid, data.name)
        const docRef = await setDoc(doc(db, "volunteers", uid), {
            uid,
            data,
            email: email
        });
        // console.log("Document written with ID: ", docRef);
        return true

        // const docRef = await addDoc(collection(db, "volunteers"), {
        //     uid,
        //     data
        // });
        // console.log("Document written with ID: ", docRef.id);
        // return docRef.id
    } catch (e) {
        // console.error("Error adding document: ", e);
        return false
    }

}
  