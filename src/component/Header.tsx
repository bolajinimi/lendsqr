import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown ,faSearch, } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import profile from '../assets/image/profile.png';
import lendsqr from '../assets/image/lendsqr.png';
import bell from '../assets/image/Vector.svg';
function Header(){
    return (
        <header>
        <div className='row_docs'>
          <img src={lendsqr} alt='logo' width="120"/>
          <label>
            <input type='text' placeholder="Search for anything" />
            <button><FontAwesomeIcon icon={faSearch} /></button>
          </label>
          </div>
          <div className='row_docs2'>
          <div className='docs'>
            <Link to="/">Docs</Link>
          <img src={bell} alt="bell" className='bell' />
          
            <div className='round'>
              <img src={profile} alt={profile} />

              </div>
              <Link to='/' className='adede'>Adedeji <FontAwesomeIcon icon={faChevronDown} /></Link>

              </div>

          </div>


        </header>
    )
}
export default Header;