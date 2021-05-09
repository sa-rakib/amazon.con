import './login.css'
import { useContext, useState } from "react";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router";
import { firebaseConfigFramework, handleGoogleSignIn, handleSignOut, handleFacebookSignIn, createUserWithEmailAndPassword, signInWithEmailAndPassword } from './LoginManager';



const Login = () => {
  const [newUser, setNewUser] = useState(false)
  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    photo: '',
    password: '',
    error: '',
    success: false
  })
    
    firebaseConfigFramework()
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    
    const googleSignIn = () => {
        handleGoogleSignIn()
            .then(res => {
                handleResponse(res, true)
        })
    }

    const signOut = () => {
        handleSignOut()
            .then(res => {
                handleResponse(res, false)
        })
    }
  
    const fbSignIn = () => {
        handleFacebookSignIn()
            .then(res => {
               handleResponse(res, true)
        })
    }


  const handleBlur = (e) => {
    let isFromValid = true;
    if (e.target.name === 'email') {
      isFromValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    
    if (e.target.name === 'password') {
      const isNumberValid = e.target.value.length > 6;
      const isPasswordValid = /\d{1}/.test(e.target.value);
      isFromValid = isNumberValid && isPasswordValid;
    }
    if (isFromValid) {
      const NewUserInfo = { ...user };
      NewUserInfo[e.target.name] = e.target.value;
      setUser(NewUserInfo)
    }
  }

    
    const handleSubmit = (e) => {
      
    if (newUser && user.email && user.password) {
        createUserWithEmailAndPassword(user.name, user.email, user.password)
        .then(res => {
                handleResponse(res, true)
        })
    }
    if (!newUser && user.email && user.password) {
        signInWithEmailAndPassword(user.email, user.password)
        .then(res => {
            handleResponse(res, true)
        })
    }
    e.preventDefault()
  }


    const handleResponse = (res, redirect) => {
        setUser(res)
        setLoggedInUser(res)
        if (redirect) {
            history.replace(from)
        }
}
  
  return (
      <div className="container">
        <div className="flex">
      <button onClick={fbSignIn} className="btns"> Sign in with Facebook</button>
      {
        user.isSignedIn?  <button onClick={signOut} className="">Sign Out</button> :  <button onClick={googleSignIn} className="">Sign In</button>
              }
        </div>
      {
        user.isSignedIn && <p>Welcome {user.name}</p>
          }
        
      <input type="checkbox" name="newUser" onChange={() => setNewUser(!newUser)} />
          <label htmlFor="newUser">Sign Up </label>
          
      <form onSubmit={handleSubmit} className="form">
        {newUser && <input type="text" name="text" onBlur={handleBlur} id="" placeholder="Name" required className="form-control"/>}
        <input type="email" onBlur={handleBlur} name="email" id="" placeholder="Email" required className="form-control"/>
        <input type="password" onBlur={handleBlur} name="password" id="" placeholder="Password" required className="form-control"/>
        {
          newUser ? <input type="Submit" value="Sign up" className="btn"/> : <input type="submit" value="Sign In" className="btn"/>
        }
      </form>
      <p style={{ color: 'red' }}>{user.error}</p>
      {
        user.success && <p style={{ color: 'green' }}>User {newUser? 'Created': 'logged in'} successfully</p>
      }

    </div>
  );
};

export default Login;