import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faUsers} from '@fortawesome/free-solid-svg-icons';
import Header from './Header';
import { Link } from 'react-router-dom';

import { useState } from 'react';
import axios from 'axios';
import Api from './Api';
import ii from '../assets/image/ii.png';
import Sidebar from './Sidebar';


const Dashboard =   ():any => {
  
  const [data, setData] = useState([]);

  const url:string ="https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users";
axios.get(url)
  .then(res => {

    setData(res.data);    
 
  });
  let x=0;
  const showClick = () => {
    const element = document.getElementById("hidec");
    x++;
    console.log(x);
    
    if(x===1 && element){
      element.style.display="flex"
    }if(x===2 && element){
      element.style.display="none"
      x=0;
    }
    // set showDiv to true when showClick is called
  };


  return (
 
      <div className='main'>
     <Header />
        <div className='main_display'>
          <Sidebar />
          <main>
            <h2>Users</h2>
            <div className='rows'>
            <div className='boxed'>
               <div className='users-icon'>
            
              <FontAwesomeIcon icon={faUsers} className='alt' />
               </div>
                <h5 className='h'>USERS</h5>
                <h2 className='h'>2,454</h2>

              </div>
              <div className='boxed'>
               <div className='users-icon'>
              <FontAwesomeIcon icon={faUsers} className='alt' />
               </div>
                <h5 className='h'>ACTIVE USERS</h5>
                <h2 className='h'>2,454</h2>

              </div>
              <div className='boxed'>
               <div className='users-icon'>
              <FontAwesomeIcon icon={faUsers} className='alt' />
               </div>
                <h5 className='h'>USERS WITH LOANS</h5>
                <h2 className='h'>2,454</h2>

              </div>
              <div className='boxed'>
               <div className='users-icon'>
              <FontAwesomeIcon icon={faUsers} className='alt' />
               </div>
                <h5 className='h'>USERS WITH SAVINGS</h5>
                <h2 className='h'>2,454</h2>

              </div>

            </div>
            
            <div className='row2' style={{backgroundColor:"white"}}>
              <div className='over'>
              <div className='form_div' id="hidec">
                <label>Organization</label>
                  <input type="text" name="organization" placeholder="Select" />
                  <label>Username</label>
                  <input type="text" name="Username" placeholder="Username" />
                  <label>Email</label>
                  <input type="email" name="Email" placeholder="Email" />
                  <label>Date</label>
                  <input type="date" name="date" placeholder="Date" />
                  <label>Phone Number</label>
                  <input type="number" name="number" placeholder="Number" />
                  <label>Status</label>
                  <input type="text" name="Status" placeholder="Status" />
                  <div className='row_slide'>
                  <button>Reset</button>
                  <button className='butt2'>Filter</button>
                  </div>

                 
                  

                </div>
              <table>
              <thead >
                <tr>
                <th onClick={showClick} >ORGANIZATION <img src={ii} alt={ii} /></th>
                <th>USERNAME <img src={ii} alt={ii}/></th>
                <th>EMAIL <img src={ii} alt={ii} /></th>
                <th>PHONE NUMBER <img src={ii} alt={ii} /></th>
                <th>DATE JOINED <img src={ii} alt={ii}  /></th>
            
                <Link to="/UserPage">
                 <th>STATUS <img src={ii} alt={ii}  /></th>
               </Link>
               
                </tr>
                </thead>    
                        
                <Api  data = {data} />
              </table>
            
              </div>
              <div>
                <p>Showing</p>
              </div>
              </div>
          </main>

        </div>
      </div>
      

  )
}

export default Dashboard
