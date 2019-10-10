import React, {useState, useEffect} from 'react'
import {Link} from "react-router-dom";

export default function About(props) {

    //useEffect
    useEffect(()=>{
        // 함수를 반환
       return () => {
           console.log('cleanup')
       }
    });

    return (
        <div style={{
            border : '1px solid black',
        }}>
            <p>About Page</p>
            <Link to='/'> Home</Link>
        </div>
    )
}
