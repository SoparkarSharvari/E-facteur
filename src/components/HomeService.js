import React from "react";
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from "firebase/auth";
import HeaderK from './Header';
import data from './data';
import Review from './Review';
import Navbar from './Navbar';
import Header from './Header.jsx';
import CourrierTable from './Courrier_data';
import Design from './Design';

function HomeService() {
    const navigate = useNavigate();
    const auth = getAuth();
    const data1 = data.map((item, index) => (
        <Review key={index} head={item.head} details={item.details} stars={item.stars} name={item.name} des={item.des} />
      ));
    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                // Sign-out successful.
                console.log('User signed out');
                navigate('/login'); // Redirect to login page after successful logout
            })
            .catch((error) => {
                // An error happened.
                console.error('Error signing out:', error);
            });
    };
    return (
        <>
            <div className="App">  
            <Navbar />
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  {/* <iframe title="Dashboard e-facteur" width="1240" height="741.25" src="https://app.powerbi.com/reportEmbed?reportId=ac21d564-28b4-4d9d-b253-3d9efd95ccbd&autoAuth=true&ctid=0ed51ad7-52cc-4234-b54a-76b82d40b5c3" frameborder="0" allowFullScreen="true"></iframe> */}
  {/* <iframe title="Dashboard e-facteur" width="1240" height="741.25" src="https://app.powerbi.com/reportEmbed?reportId=ac21d564-28b4-4d9d-b253-3d9efd95ccbd&autoAuth=true&ctid=0ed51ad7-52cc-4234-b54a-76b82d40b5c3" frameborder="0" allowFullScreen="true"></iframe> */}
  <iframe title="Dashboard e-facteur" width="1240" height="741.25" src="https://app.powerbi.com/reportEmbed?reportId=ac21d564-28b4-4d9d-b253-3d9efd95ccbd&autoAuth=true&ctid=0ed51ad7-52cc-4234-b54a-76b82d40b5c3" frameborder="0" allowFullScreen="true"></iframe>
</div>

            {/* <button onClick={handleLogout}>Logout</button> */}
            {/* <Header /> */}
            {/* <CourrierTable/> */}
            {/* <Design/> */}
            {/* <div className='Header'> 
            <HeaderK />
            </div>
                <div className='List'>
                    {data1}
    </div> */}
            </div>  
        </>
    );
}

export default HomeService;