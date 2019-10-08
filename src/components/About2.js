import React, {useState} from 'react'
import {Link} from "react-router-dom";

export default function About(props) {
    return (
        <div style={{
            border : '1px solid black',
        }}>
            <p>About2 Page</p>
            <Link to='/'> Home</Link>
        </div>
    )
}
