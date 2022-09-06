import {useSelector} from "react-redux"  //to get value of state
import { useDispatch } from "react-redux"  //modify values of state
import loginData from "../features/login"
import { logout} from '../features/user'
const Profile = () => {
    const loginProfile= useSelector((state) => state.login.value)
    console.log(loginProfile);
    














    const dispatch = useDispatch();
    const themeColor = useSelector((state) => state.theme.value)
  
  return (
    <div style={{color: themeColor}}>
        <h1>Profile page</h1>
        <p>Name: {loginData.name}</p>
        <p>Age: {loginData.age}</p>
        <p>Email: {loginData.email}</p>

        <button onClick={()=>{
          dispatch(logout());
          console.log(loginProfile);
    
          
          }}>
            Logout
        </button>
    </div>
  )
}

export default Profile