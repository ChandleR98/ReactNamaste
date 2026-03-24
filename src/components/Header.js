import { useState } from "react";
import { LOGO } from "../utils/MockData";
import { Link } from "react-router";
const Header=()=>{
  const logo = new URL("../assets/logoFood.png", import.meta.url).href;
    const [btn,setBtn]=useState("Log in")
return(<div className="header">
<img className="logo" alt='logo' src={logo}/>
{console.log("logo path:", logo)}
<ul className="navBar">
  <li><Link to='/'>Home</Link></li>
  <li>
    <Link  to='/contact'> Contact Us</Link>
   </li>
  <li><Link to='/about'>About Us</Link></li>
  <li>Cart</li>

</ul>
<button style={{padding:'10px',margin:'10px',cursor:'pointer'}} onClick={()=>{
    (btn=='Log in' ? setBtn('Log Out') : setBtn('Log in'))
}}>{btn}</button>
</div>)
  } 
  export default Header;