import axios from "axios"

export const registerNewUser = async (userData) =>{
   const response = await axios.post("/api/users/" , userData)

   if(response.data){
    localStorage.setItem("user", JSON.stringify(response.data))
   }

   return response.data
}