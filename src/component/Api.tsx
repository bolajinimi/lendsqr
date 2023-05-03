
import i from '../assets/image/i.png';
interface Data {
    email: string,
    phoneNumber:number,
    orgName:string,
    userName:string,
    createdAt:string,
    id:string,

   
  }
  interface Ho{
    data:Data[]
  }

  
  const Api = (props:Ho) =>{
 
    function handleClick(e:any){
        e.preventDefault();
       
        window.location.href="/user-page/"+e.target.value
       

    }
    return(
     
        <tbody>
            
            {props.data.map((val)=>{
                return(
                    <tr key={val.id}>
                    <td>Lendsqr</td> 
                    <td>{val.userName}</td> 
                    <td>{val.email}</td> 
                    <td>{val.phoneNumber}</td> 
                    <td>{val.createdAt}</td> 
                  
                    <td><button onClick={handleClick} value={val.id}>Inactive</button> 
                    &nbsp;
                    &nbsp;<img src={i}  alt={i}/></td> 
                  
                    </tr> 
                )
            })}
      
   

               
             </tbody>
            )
    
  }
  export default Api;