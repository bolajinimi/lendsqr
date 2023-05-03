import { faBriefcase, faChevronDown, faGlobeAmericas, faHome, faUserAlt, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Sidebar(){
    return(
        <aside>
            <li style={{marginBottom:"20px",marginTop:"20px"}}>
            <FontAwesomeIcon icon={faBriefcase} className="icon_shift"   />
            <span>Switch Organization</span>
            <FontAwesomeIcon icon={faChevronDown} className="icon_shift2"    />
            </li>
            <li style={{marginBottom:"20px"}}>
            <FontAwesomeIcon icon={faHome} className="icon_shift"   />
            <span>Dashboard</span>
            
            </li>
            <p >CUSTOMERS</p>

            <li >
            <FontAwesomeIcon icon={faUserAlt} className="icon_shift"   />
            <span>Users</span>
          
            </li>
            <li >
            <FontAwesomeIcon icon={faUsers} className="icon_shift"   />
            <span>Guarantors</span>
            </li>
            <li >
            <FontAwesomeIcon icon={faGlobeAmericas} className="icon_shift"   />
            <span>Loans</span>
         
            </li>
            <li >
            <FontAwesomeIcon icon={faGlobeAmericas} className="icon_shift"   />
            <span>Loans</span>
         
            </li>
            <li >
            <FontAwesomeIcon icon={faGlobeAmericas} className="icon_shift"   />
            <span>Loans</span>
         
            </li>
            <li >
            <FontAwesomeIcon icon={faGlobeAmericas} className="icon_shift"   />
            <span>Loans</span>
         
            </li>
            <li >
            <FontAwesomeIcon icon={faGlobeAmericas} className="icon_shift"   />
            <span>Loans</span>
         
            </li>
            <li >
            <FontAwesomeIcon icon={faGlobeAmericas} className="icon_shift"   />
            <span>Loans</span>
         
            </li>
            <p >BUSSINESS</p>

            <li >
            <FontAwesomeIcon icon={faUserAlt} className="icon_shift"   />
            <span>Users</span>
          
            </li>
            <li >
            <FontAwesomeIcon icon={faUsers} className="icon_shift"   />
            <span>Guarantors</span>
            </li>
           

        </aside>
    )

}export default Sidebar;