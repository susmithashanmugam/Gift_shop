import '../Asserts/Cssfiles/Header.css'
import { Heart } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom'
import Login from './Login';
function Header() {
    
    return (
        <>
            <div class = "header12">
                <p> TRI ELEGANCE FOR EVERY OCCASSIONS</p>
            </div>
            
            <div className='header-top'>

                <p class ="love">
                    Lovingly made in hands
                </p>
                    
                <div class="imgg">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStUeeb00790vXDJwFCQe0H_5vFkPVaL3VPEaU5G8i4&s" style={{ width:"10vw" ,height:'10vh'}} />
                </div>
                    <div class ="siin">
                <Link to ="login">
                <p style={{ color: "black"}}>Signin</p>
                </Link>
                </div>
                <div class ="icon">
                <ShoppingCart/>
                </div>
            </div>
            <hr/>
        </>
    )
}
export default Header