//import { useDispatch } from "react-redux"; //modify values of state
import {useSelector} from "react-redux"
import { loginData } from "../features/login";
import { useState } from "react";

const Login = () => {
  //const dispatch = useDispatch();
  const [formData, setFormData] = useState(
    { name: "",
      age: "",
      email: ""
  });
  const handleChange = (event) =>{
      const {name, value} = event.target;
      setFormData((prev)=>{
        return{
          ...prev,
          [name]: value
        }
      })
  };
  const loginProfile= useSelector((state) => state.login.value)
  const submit =()=>{
    //dispatch(loginData({name: formData.name, age: formData.age, email: formData.email}));
    console.log(loginProfile);
  }
  
  return (
    <div className="login">
      <input type="text" name="name" placeholder="Name" value={formData.name}  onChange={handleChange} />
      <input type="text" name="age" placeholder="Age"  value={formData.age}  onChange={handleChange} />
      <input type="email" name="email" placeholder="Email"  value={formData.email}  onChange={handleChange} />
      <button
        onClick={submit}
      >
        Login
      </button>

      {/* <button onClick={()=>{
            dispatch(login({name: "gjhj", age: 70, email: "jhjh"}))
        }}>Login</button> */}
    </div>
  );
};

export default Login;

