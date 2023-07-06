import { auth } from '../firebase'
import { signInWithPopup, signOut, GoogleAuthProvider } from 'firebase/auth'
import { ref } from 'vue'

export const user = ref(null)

export const login = () => signInWithPopup(auth, new GoogleAuthProvider())
export const logout = () => signOut(auth)
