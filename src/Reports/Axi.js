import React, { useEffect } from 'react';
import axios from 'axios';

const Axi = () => {

    useEffect( ()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res=> console.log(res))
        .catch(err=> console.log(err))
    })


    return (
        <>
        <div style={{height:"50vh",display:"flex",alignItems:"center",justifyContent:"center"}}>
            axi
        </div>
    </>
    )
}
export default Axi;
