import React from 'react'
import start from '/Users/sharvarisoparkar/Desktop/E-facteur/e-facteur_website/src/start.png'
import end from '/Users/sharvarisoparkar/Desktop/E-facteur/e-facteur_website/src/end.png'
import '/Users/sharvarisoparkar/Desktop/E-facteur/e-facteur_website/src/header.css'

export default function Header(){
    return(
        <div className='head'>
            <img src={start} alt="" className='Header--image1'/>
            <h2 className='Header--t1'>TESTIMONIAL</h2>
            <h1 className='Header--t2'>Our Awesome Clients</h1>
            <img src={end} alt="" className='Header--image2'/>
        </div>
    );
}