
import { getAuth, createUserWithEmailAndPassword, updateProfile, onAuthStateChanged, signOut, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import  initializeAuthentication from '../Firebase/Firebase.init'

initializeAuthentication()


const useFirebase = () => {
    const [user,setUser] = useState({})
    const [loading,setLoading] = useState(true)
  const [authError,setAuthError] = useState('')
  const [admin,setAdmin] = useState(false)
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();




    const registerUser = (email,password,name,history) => {
        setLoading(true)
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    setAuthError('')
    const newUser = {email,displayName: name}
    setUser(newUser)

    saveUser(email,name,'POST')

   

    updateProfile(auth.currentUser, {
      displayName: name
    }).then(() => {
      // Profile updated!
      // ...
    }).catch((error) => {
      // An error occurred
      // ...
    });


    history.replace('/home')
    
    // ...
  })

  .catch((error) => {
    
    setAuthError(error.message)
    // ..
  })
  .finally(()=>setLoading(false));
    }





    const loginUser = (email,password,location,history) =>{
        setLoading(true)
    
        signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
        
        setAuthError('')
        const destination = location.state?.from || '/home';
        history.replace(destination)
        
        // ...
      })
      .catch((error) => {
        
        setAuthError(error.message)
        
      })
      .finally(()=>setLoading(false));
    
      }
    



    const signinWithGoogle = (location,history) => {
        setLoading(true)
        signInWithPopup(auth, googleProvider)
      .then((result) => {
       
        const user = result.user;
        
        setAuthError('')
        saveUser(user.email,user.displayName,'PUT')
        const destination = location.state?.from || '/home';
        history.replace(destination)
        
      }).catch((error) => {
        setAuthError(error.message)
       
        
      })
      .finally(()=> setLoading(false));
      }
    








    useEffect(()=>{
        const unsubscribe =   onAuthStateChanged(auth, (user) => {
            if (user) {
            
             
              setUser(user)
              
             
            } else {
              setUser({})
             
            }
            setLoading(false)
          });
          return () => unsubscribe
        },[auth])




useEffect(()=>{
  fetch(`https://pacific-waters-83697.herokuapp.com/users/${user.email}`)
  .then(res=>res.json())
  .then(data => setAdmin(data.admin))
},[user.email])



        const logOut = () => {
            setLoading(true)
            signOut(auth)
            .then(() => {
              // Sign-out successful.
            }).catch((error) => {
              // setAuthError(error.message)
              
            })
            .finally(()=> setLoading(false));
            
          }


const saveUser = (email,displayName,method) => {
  const user = {email,displayName};
  fetch(`https://pacific-waters-83697.herokuapp.com/users`,{
    method: method,
    headers: {
      'content-type':'application/json'
    },
    body: JSON.stringify(user)
  })
  .then()

}





    return {
        user,
        admin,
        loading,
        logOut,
        signinWithGoogle,
        registerUser,
        loginUser
        
    }

}




export default useFirebase