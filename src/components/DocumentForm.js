import React, { useState, useEffect ,useContext} from 'react';
import axios from 'axios';
import inm from '../ServicesPage.svg';
import '../style/DocumentForm.css';
import Navbar from './Navbar';
import { DataContext } from '../context/DataProvider';
const DocumentForm = (props) => {
  console.log(props.distance);
  const [userData, setUserData] = useState({});
  const { account } = useContext(DataContext);

  const [loginFormData, setLoginFormData] = useState({
    loginEmail: '',
    loginPassword: ''
  });
  const [signupFormData, setSignupFormData] = useState({
    signupName: '',
    signupOrigin: '',
    signupDestination: '',
    signupDestination1: '',
    signupDestination2: '',
    signupDestination3: ''
  });
//   useEffect(() => {
//    handleGetData()
//   },[])
//   const handleGetData = async (e) => {
//     debugger
//     try {
//         const response = await axios.get('https://newef-2bcd7-default-rtdb.firebaseio.com/UserData.json');
//         console.log(response.data)
//         const userData = response.data;
//         for (const userId in userData) {
//             const user = userData[userId];
//             if (user.Fullname === account.Fullname) {
//                 console.log(userId); // Logging userId
//                 console.log(user.Gender); // Accessing Gender from user object
//                 console.log(user.residence); // Accessing residence from user object
//                 console.log(user.DateOfBirth); // Accessing DateOfBirth from user object
                
//                 // Calculate age
//                 const dob = new Date(user.DateOfBirth);
//                 const ageDiffMs = Date.now() - dob.getTime();
//                 const ageDate = new Date(ageDiffMs); // miliseconds from epoch
//                 const age = Math.abs(ageDate.getUTCFullYear() - 1970);

//                 console.log(age); // Logging age
//             }
//         }
//     } catch (error) {
//         console.error('Error handling service click:', error);
//     }
// }

const handleGetDataAndServiceClick = async (e) => {
    debugger;
    try {
        const response = await axios.get('https://newef-2bcd7-default-rtdb.firebaseio.com/UserData.json');
        console.log(response.data);
        const userData = response.data;
        for (const userId in userData) {
            const user = userData[userId];
            if (user.Fullname === account.Fullname) {
                console.log(userId); // Logging userId
                console.log(user.Gender); // Accessing Gender from user object
                console.log(user.residence); // Accessing residence from user object
                console.log(user.DateOfBirth); // Accessing DateOfBirth from user object
                
                // Calculate age
                const dob = new Date(user.DateOfBirth);
                const ageDiffMs = Date.now() - dob.getTime();
                const ageDate = new Date(ageDiffMs); // miliseconds from epoch
                const age = Math.abs(ageDate.getUTCFullYear() - 1970);

                console.log(age); // Logging age
                const gender=user.Gender
                const residence =user.residence
                // Handle service click
                try {
                    const newEntry = {
                        userId,
                        residence,
                        gender,
                        age,
                        courierServiceName: user.ServiceProvidername, // Access the ServiceProvidername property from user object
                        createdAt: new Date().toISOString(),
                    };
                    
                    await axios.post('https://newef-2bcd7-default-rtdb.firebaseio.com/Newdata.json', newEntry);
                } catch (error) {
                    console.error('Error handling service click:', error);
                }
            }
        }
    } catch (error) {
        console.error('Error handling service click:', error);
    }
};

    const handleSignupClick = () => {
        const slider = document.querySelector(".slider");
        const formSection = document.querySelector(".form-section");
        slider.classList.add("moveslider");
        formSection.classList.add("form-section-move");
    };

    const handleLoginClick = () => {
        const slider = document.querySelector(".slider");
        const formSection = document.querySelector(".form-section");
        slider.classList.remove("moveslider");
        formSection.classList.remove("form-section-move");
    };

    // const handleServiceClick = async (userId, userData) => {
    //     try {
    //     //   const { distance, dateOfBirth, gender } = userData;
    //       const newEntry = {
    //         // distance,
    //         // dateOfBirth,
    //         // gender,
    //         courierServiceName: userData.ServiceProvidername, // Access the ServiceProvidername property
    //         createdAt: new Date().toISOString(),
    //       };
      
    //       await axios.post('https://newef-2bcd7-default-rtdb.firebaseio.com/Newdata.json', newEntry); // Make sure to include '.json' in the URL
    //     } catch (error) {
    //       console.error('Error handling service click:', error);
    //     }
    //   };
  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginFormData({ ...loginFormData, [name]: value });
  };

  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    setSignupFormData({ ...signupFormData, [name]: value });
  };

  const handleDocument = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('https://newef-2bcd7-default-rtdb.firebaseio.com/serviceprovider.json');
      setUserData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

    const handleNonDocument = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.get('https://newef-2bcd7-default-rtdb.firebaseio.com/serviceprovider.json');
          setUserData(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      const renderTable = () => {
        const rows = [];
      
        for (const userId in userData) {
          const user = userData[userId];
          const loginPassword = parseInt(loginFormData.loginPassword) || 0 || parseInt(signupFormData.signupName);
          const distance = parseInt(props.distance)||1 ;
          const Chargeperkm = parseInt(user.Chargeperkm) || 0;
          const price = loginPassword/1000 * Chargeperkm + distance * Chargeperkm;
      
          rows.push(
            <tr key={userId}>
              <td>{userId}</td>
              <td>{user.ServiceProvidername}</td>
              <td>{price}</td>
              <td><button id={userId} onClick={() => handleGetDataAndServiceClick()}>Place Order</button></td>
            </tr>
          );
        }

    return (
      <table style={{width:'700px'}}>
        <thead>
          <tr>
            <th>USER ID</th>
            <th>SERVICE NAME</th>
            <th>PRICE</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  };
  return (
    <>
    <Navbar/>
    <div className='body2' style={{ padding: '40px', height:'auto' ,display:'flex',flexDirection:'row'}}>
      <br></br>
      <div className="containerdf" style={{width: '500px',display:'flex',flexDirection:'row'}}>
        <div className="slider"></div>
        <div className="btn" >
          <button className="login" onClick={handleLoginClick}>Document</button>
          <button className="signup" onClick={handleSignupClick}>Non-Document</button>
        </div>

        <div className="form-section">
          <div className="login-box" >
            <form name="login" onSubmit={handleDocument}>
              <input type="text" className="password ele" name="loginPassword" placeholder="weight (grams)" value={loginFormData.loginPassword} onChange={handleLoginChange} required />
              <br />
              <br />
              <center><input type="submit" className="clkbtn" name="Register" value="Submit" /></center>
            </form>
          </div>
        
        <div className="signup-box" >
            <form name="register" onSubmit={handleNonDocument}>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                    <input type="text" id="1" className="name ele" name="signupName" placeholder="weight (grams)" value={signupFormData.signupName} onChange={handleSignupChange} required />
                    <br />
                    <br />
                    <input type="text"  id="2" className="name ele" name="signupOrigin" placeholder="length" value={signupFormData.signupOrigin} onChange={handleSignupChange} required />
                <br />
                <br />
                    <input type="text"  id="3" className="password ele" name="signupDestination" placeholder="width" value={signupFormData.signupDestination} onChange={handleSignupChange} required />
                    <br />
                    <br />
                    <input type="text"  id="4" className="password ele" name="signupDestination1" placeholder="height" value={signupFormData.signupDestination1} onChange={handleSignupChange} required />
                <br />
                    <br />
                <input type="text"   id="5" className="password ele" name="signupDestination2" placeholder="Shipment Value (INR)" value={signupFormData.signupDestination2} onChange={handleSignupChange} required />
                    <br />
                    <br /><input type="text"  id="6" className="password ele" name="signupDestination3" placeholder="select content" value={signupFormData.signupDestination3} onChange={handleSignupChange} required />
                    <br />
                <br />
                    <center><input type="submit"  id="7" className="clkbtn" name="Register" value="Submit" /></center>
            </form>
                     </div>
                     </div>
                   
      </div>  <div >{renderTable()}</div>
    </div>
    </>
  );
};

export default DocumentForm;

