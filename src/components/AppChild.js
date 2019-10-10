import React, {useState, use} from 'react';
import './AppChild.scss';


export default function AppChild(props) {
    const [msg, setMsg] = useState(props.msg);

    return (
      <div style={
          {
              border : '1px solid black'
          }
      }>
          저는 자식입니다..
          <p>{msg}</p>
      </div>
    );
}
