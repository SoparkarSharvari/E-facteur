import { addDoc, collection } from "@firebase/firestore"
import { firestore } from "../firebase_setup/firebase"
 
const handleSubmit = async (testdata) => {
    const ref = collection(firestore, "test_data");

    let data = {
        testData: testdata
    };
    
    try {
        await addDoc(ref, data); // Wait for the document to be added
        console.log("Document added successfully!");
    } catch(err) {
        console.error("Error adding document: ", err);
    }
};

export default handleSubmit;