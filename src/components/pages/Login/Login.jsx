import React from 'react'
import Avatar from '../../../Icons/Avatar/Avatar'
import PassIcon from '../../../Icons/PassIcon/PassIcon'
import Button from '../../atoms/Button/Button'
import Input from '../../molecules/Input/Input'
import Logo from '../../molecules/Logo'
import {loginLogo,loginBg,loginCard} from './index.module.css'

export default function Login() {

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log("submit");
    }

    return (
        <>
            {/* <img src="https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"
                alt="image background" /> */}

            <div className={loginLogo}>
                <Logo/>                
            </div>
            <div className={loginBg}>  </div >
            <div className={loginCard}>
                <h1>Hello!! <br></br>
                    Welcome</h1>
                <form className='form' onSubmit={handleSubmit}>
                    <Input 
                        type="email" 
                        name="email" 
                        placeholder='example@gmail.com' 
                        isRequired
                        icon={Avatar()}
                    />
                    <Input 
                        type="password" 
                        name="password" 
                        placeholder='**********' 
                        isRequired
                        icon={PassIcon()}
                    />
                    <Button type="submit" text="Get started" />
                </form>
            </div>
        </>
    )
}
