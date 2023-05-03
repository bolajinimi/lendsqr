import Animate from '../assets/image/pablo-sign-in 1.png';
import lendsqr from '../assets/image/lendsqr.png';
import { Link } from 'react-router-dom';




function Login() {
  return (
    <div>
      <div className='row'>
    
        <div className='img-row'>
        <img src={lendsqr} alt={lendsqr} />
      
          <img src={Animate} alt={Animate} />
        </div>
        <div className='form-row'>
          <div className='forms'>
          <h1>Welcome!</h1>
          <p>Enter details to login</p>
          <form action='/dashboard'> 
          <input type="text" className="form-control" placeholder="Email" />
          <input type="password" className="form-control" placeholder="Password" />
          <p>Forget Password ?</p>
          <Link to="/dashboard">
          <button className='butt2'>Log In</button>
          </Link>

          </form>
          </div>
         

        </div>

      </div>

      
    </div>
  )
}

export default Login
