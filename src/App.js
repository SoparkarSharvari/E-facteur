import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/loginSignupPage';
import Home from './components/Home';
import './App.css'
import Review from './components/Review';
import Header from './components/Header';
import data from './components/data'

const App = () => {

    const data1=data.map((item)=>(
        <Review head={item.head} details={item.details} stars={item.stars} name={item.name} des={item.des}/>
      ) )
    return (
        <div>
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/" element={<Navigate to="/login"/>} />
            </Routes>
        </Router>
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
};

export default App;

