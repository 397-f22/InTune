import { useState, useEffect } from 'react';



export const Hellow = () => {
    const [initState, setInitState] = useState([])
    useEffect(()=>{
fetch('/api').then(res => {
    if(res.ok){
        return res.json()
    }
}).then(jsonResponse => setInitState(jsonResponse))
    },[])
    console.log(initState.message)
    return(<h1>hello</h1>);
}