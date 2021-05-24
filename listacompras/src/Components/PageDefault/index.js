import React from 'react'
import Footer from "../Footer/index"
import Header from "../Header/index"
import {MyContainer} from "./style"

export default function PageDefault (props)
{
    return(
        <>
        <Header/>
            <MyContainer>
                {props.children}
            </MyContainer>
        <Footer/>
        </>
    )
}