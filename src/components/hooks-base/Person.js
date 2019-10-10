import React, {useState, useEffect} from 'react'

export default function Person(props) {

    //useState
    const [name, setName] = useState('Hook');
    const [age, setAge] = useState(10);

    function setNameFunction() {
        setName('HOOK');
    }

    //useEffect

    // 컴포넌트가 랜더링 될 때마다 + 값이 업데이트 될때마다
    useEffect(()=>{
       console.log('useEffect 랜더링 완료! + 값 업데이트!');
       console.log(name, age);
    });

    // 마운트 될 때만 실행
    useEffect(()=>{
        console.log('useEffect 랜더링 될때만..');
    }, []);

    //특정 값이 업데이트 될 때만 실횅
    useEffect(()=>{
        console.log('useEffect name updated..');
    }, [name]);

    return (
        <div>
            <p>나는 {name}으로 작성된 컴포넌트야!</p>
            <button onClick={setNameFunction}>HOOK 변경!</button>
        </div>
    )

}
