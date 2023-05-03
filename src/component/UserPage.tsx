import React, { useState,useEffect } from 'react'
import Header from './Header'
import logo from '../logo.svg'
import Sidebar from './Sidebar'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'


interface User {
  email: string;
  userName: string;
  accountBalance: string;
  orgName: string;
  accountNumber: string;
  education:Education;
  socials:Socials
  profile: Profile;
  guarantor: Guarantor
}

interface Education {
  duration:string;
  employmentStatus:string;
  level:string;
  loanRepayment:string;
  officeEmail:string;
  monthlyIncome: [string,string]
  sector: string;



}
interface Profile {
  bvn: string;
  avatar: string;
  currency: string;
  firstName: string;
  gender: string;
  lastName:string;
  phoneNumber:string;
  address:string
}
interface Socials {
  facebook: string;
  instagram: string;
  twitter: string;
}
interface Guarantor {
  firstName: string;
  phoneNumber:string;
  lastName:string;
}
const UserPage = () => {
  const { userId } = useParams<{ userId: string }>();
  const [userData, setUserData] = useState<User>();
  const [error, setError] = useState<string>('');

  useEffect(() => {
    axios
      .get<User>(`https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${userId}`)
      .then((response) =>{

       setUserData(response.data)
       console.log(response.data)
      })
      .catch(error => setError('Error fetching user data'));
  }, [userId]);


  if (error) {
    return <div>{error}</div>;
  }

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div className='main'>
    <Header />
       <div className='main_display'>
         <Sidebar />
         <main>
         <h4><FontAwesomeIcon icon={faArrowLeft} /> &nbsp; &nbsp;Back to users</h4>
         
            <div className='rowHead'>
            <h2>User Details</h2>

            <div className='black-activate'>
            <button className='black'>BLACKLIST USER</button>
            <button className='activate'>ACTIVATE USER</button>
            </div>

            </div>
            <div className='row2'>
            <div className='nameDetails'>
            <div  className='profile-row-one'>
              <div className='profileImage'>
                <img src={userData.profile.avatar} alt={userData.profile.avatar} style={{width:"100%",height:"100%"}} />
               
              </div>
              <div className='profImage'>
              <div className='boxInsideProf'>
                <h3 style={{marginBottom:"0px"}}>{userData.profile.firstName} {userData.profile.lastName}</h3>
                <p>{userData.accountNumber}</p>
                  

                  </div>
                  <div className='boxInsideProf'>
                  

                  </div>
                  <div className='boxInsideProf'>
                  <h2><span className='strike'>N</span>{userData.accountBalance}</h2>
                <h5>{userData.orgName}</h5>
                  

                  </div>

              </div>
                
                </div>
                <div className='profile-row-two'>
                <span>General Details</span>
                <span>Documents</span>
                <span>Bank Details</span>
                <span>Loans</span>
                <span>Savings</span>
                <span>App and System</span>
                
                </div>

          </div>
          <div className='whitie'>
          <div className='profile'>
          <h4 style={{paddingTop:"20px",paddingLeft:"10px"}}>Personal Information</h4>
            <div className='section1'>
            
             <div className='boxIndex'>
             
             <p>FULL NAME</p>
             <h5>{userData.profile.firstName} {userData.profile.lastName}</h5>
             <p>MARITAL STATUS</p>
             <h5>Single </h5>

             </div>

             <div className='boxIndex'>
             <p>PHONE NUMBER</p>
             <h5>{userData.profile.phoneNumber} </h5>
             <p>CHILDREN</p>
             <h5>None </h5>

            </div>
            <div className='boxIndex'>
             <p>EMAIL ADDRESS</p>
             <h5>{userData.education.officeEmail}</h5>
             <p>TYPE OF RESIDENCE</p>
             <h5>Parent's Apartment </h5>

            </div>
            <div className='boxIndex'>
             <p>BVN</p>
             <h5>{userData.profile.bvn} </h5>

            </div>
            <div className='boxIndex'>
          
             <p>Gender</p>
             <h5>{userData.profile.gender} </h5>
           

            </div>

            </div>

          </div>
          <div className='profile'>
          <h4 style={{paddingLeft:"10px"}}>Education and Employment</h4>
            <div className='section1'>
            
             <div className='boxIndex'>
             
             <p>LEVEL OF EDUCATION</p>
             <h4>{userData.education.level}</h4>
             <p>OFFICE EMAIL</p>
             <h5> {userData.education.officeEmail} </h5>

             </div>

             <div className='boxIndex'>
             <p>EMPLOYMENT STATUS</p>
             <h5>{userData.education.employmentStatus}</h5>
             <p>MONTHLY INCOME</p>
             <h5><span className='strike'>N</span>{userData.education.monthlyIncome[0]} - <span className='strike'>N</span>{userData.education.monthlyIncome[1]}</h5>
             

            </div>
            <div className='boxIndex'>
            <p>SECTOR OF EMPLOYMENT</p>
             <h5>{userData.education.sector}</h5>
             <p>LOAN REPAYMENT</p>
             <h5>{userData.education.loanRepayment}</h5>
            </div>
            <div className='boxIndex'>
             <p>DURATION OF EMPLOYMENT</p>
             <h5>{userData.education.duration} </h5>

            </div>

            </div>

          </div>
          <div className='profile'>
          <h4 style={{paddingLeft:"10px"}}>Socials</h4>
            <div className='section1'>
            
             <div className='boxIndex'>
             
             <p>Twitter</p>
             <h5>{userData.socials.twitter} </h5>

             </div>

             <div className='boxIndex'>
             <p>Facebook</p>
             <h5>{userData.socials.facebook}</h5>

            </div>
            <div className='boxIndex'>
             <p>Instagram</p>
             <h5>{userData.socials.instagram}</h5>
            </div>

            </div>

          </div>
          <div className='profile'>
          <h4 style={{paddingLeft:"10px"}}>Guarantor</h4>
            <div className='section1'>
            
             <div className='boxIndex'>
             
             <p>FULL NAME</p>
             <h5>{userData.guarantor.firstName} {userData.guarantor.lastName}</h5>
             </div>

             <div className='boxIndex'>
             <p>PHONE NUMBER</p>
             <h5>{userData.guarantor.phoneNumber} </h5>
            </div>
            <div className='boxIndex'>
             <p>EMAIL ADDRESS</p>
             <h5>{userData.email} </h5>
            </div>

            </div>

          </div>
          </div>

              </div>
            </main>
         </div>
         </div>
  )
}

export default UserPage
