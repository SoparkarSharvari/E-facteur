import React from "react";
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from "firebase/auth";
import Header from './Header';
import data from './data';
import Review from './Review';

function Home() {
    const navigate = useNavigate();
    const auth = getAuth();

    const data1=data.map((item)=>(
        <Review head={item.head} details={item.details} stars={item.stars} name={item.name} des={item.des}/>
      ) )

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
        <div>
            <h1>Home Page</h1>
            <button onClick={handleLogout}>Logout</button>
            <div className="App">
            <div className='Header'>
            <Header />
            </div>
            <div className='List'>
            {data1}
        </div>
        </div>
      </div>
    );
}

export default Home;