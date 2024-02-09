import Recat from 'react'
import './Reviwe.css'
import five from './five.png'
import four from './four.png'
import three from './three.png'
import two from './two.png'
import one from './one.png'
export default function Review(props){
    var stars
    if(props.stars==="5"){
        stars=five
    }
    else if(props.stars==="4"){
        stars=four
    }
    else if(props.stars==="3"){
        stars=three
    }
    else if(props.stars==="2"){
        stars=two
    }
    else{
        stars=one
    }
    return(
        <div className="reviewcard">
            <h1 className='review--head'>{props.head}</h1>
            <h3 className='review--details'>{props.details}</h3>
            <img src={stars} alt="" className='review--image' />
            <div className='signature'>
            <h2 className='review--name'>{props.name}</h2>
            <h2 className='review--des'>{props.des}</h2>
            </div>
        </div>
    
    );

        
}