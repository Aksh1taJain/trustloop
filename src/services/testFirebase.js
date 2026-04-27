import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

export async function testFirebaseWrite() {
  try {
    const docRef = await addDoc(collection(db, "test"), {
      message: "Firebase is working 🚀",
      createdAt: new Date()
    });

    console.log("Document written with ID:", docRef.id);
    alert("Firebase write successful!");
  } catch (e) {
    console.error("Error adding document:", e);
    alert("Firebase error – check console");
  }
}