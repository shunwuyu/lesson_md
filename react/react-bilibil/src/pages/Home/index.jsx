import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Wrapper } from './style'
import Header from "@/components/header";

export default function Home() {
    const navigate = useNavigate()
    useEffect(() => {
        // console.log('-----')
        navigate('/home')
    }, [])
    return (
        <Wrapper>
            <Header />  
        </Wrapper>
    )
}
