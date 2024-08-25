export const checkValidData=(Email,Password,userName)=>{
   const  isEmailValid=/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(Email)
    const isPasswordValid =/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(Password)
    const isUserName = /([a-zA-Z0-9_\s]+)/.test(userName)

    if(!isEmailValid)return"Email is not valid";
    if(!isPasswordValid) return "Password is not valid";
    if(!isUserName) return "Enter your name";

    return null;


}