import { LOGO } from "../utils/MockData";

const Header=()=>{
return(<div className="header">
<img className="logo" alt='logo' src={LOGO}/>
<ul className="navBar">
  <li>Home</li>
  <li>Contact Us</li>
  <li>Help</li>
  <li>Cart</li>

</ul>
</div>)
  } 
  export default Header;