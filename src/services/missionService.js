import { collection, addDoc } from 'firebase/firestore'
import { db } from '../firebase'

export async function saveMission(missionText) {
  try {
    const docRef = await addDoc(collection(db, 'missions'), {
      content: missionText,
      createdAt: new Date()
    })

    console.log('Mission saved:', docRef.id)
    alert('Mission saved to Firebase 🚀')
  } catch (error) {
    console.error('Error saving mission:', error)
    alert('Error saving mission')
  }
}