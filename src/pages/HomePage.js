import React, {useState, useEffect} from 'react';
import {useGetProductData} from "../data/useGetProductData";

export default function HomePage(props) {

    const [enabled, setEnabled] = useState(false)

    const {data} = useGetProductData(enabled)

    useEffect(()=>{
        console.log(data)
    }, [data])

    const buttonHandler = () => {
        setEnabled(true)
    }

    return (
        <>
            <button type='button' onClick={buttonHandler} >Get Products</button>
        </>
    );
}
