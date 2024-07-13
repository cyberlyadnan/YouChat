import { createSlice } from "@reduxjs/toolkit"
import { database } from "../firebase";
import { doc, getDoc } from "firebase/firestore";




const userSlice = createSlice( {
    name:"user",
    initialState:null,
    reducers:{
        addUser:async (state,payload)=>{
            const docSnap = await getDoc(doc(database, "users", uid));
        }
    }
  
})
export default userSlice
