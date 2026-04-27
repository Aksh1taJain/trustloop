import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export async function getMissions() {
  try {
    const querySnapshot = await getDocs(collection(db, "missions"));

    const missions = [];

    querySnapshot.forEach((doc) => {
      missions.push({
        id: doc.id,
        ...doc.data()
      });
    });

    return missions;
  } catch (error) {
    console.error("Error fetching missions:", error);
    return [];
  }
}