import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { useUser } from '../../../hooks/useUser'
import Avatar from '../../../Icons/Avatar/Avatar'
import PassIcon from '../../../Icons/PassIcon/PassIcon'
import { ErrorAlert } from '../../atoms/Alert/ErrorAlert'
import Button from '../../atoms/Button/Button'
import Input from '../../molecules/Input/Input'
import { FormCard } from '../../organisms/FormCard/FormCard'
import { BasicLayout } from '../../templates/BasicLayout/BasicLayout'

export default function Login() {

    const [localUser, setLocalUser] = useState({})
    const {user, logIn,  error } = useUser()

    const handleSubmit = (e) => {
        e.preventDefault()
        logIn(localUser.email, localUser.password)
    }
    const handleChange = ({ target: { name, value } }) => {
        setLocalUser({ ...localUser, [name]: value })
    }

    if (user?.id) return <Navigate to='/' />
    
    return (
        <>
            <BasicLayout>
                <FormCard text='Start session'>
                    <section>
                        <p>Or use your email address</p>
                        <form className='form' onSubmit={handleSubmit}>
                            <Input
                                type="email"
                                name="email"
                                placeholder='example@gmail.com'
                                isRequired
                                icon={Avatar()}
                                onChange={handleChange}
                            />
                            <Input
                                type="password"
                                name="password"
                                placeholder='**********'
                                isRequired
                                icon={PassIcon()}
                                onChange={handleChange}
                            />
                            <Button type="submit" text="Get started" />
                        </form>
                    </section>
                    {error.errorMessage &&
                        <section>
                            <ErrorAlert text={error.errorMessage} />
                        </section>
                    }
                    <p className='marginflex'>
                        Don&apos;t have an account?
                        <Link to='/register'>&nbsp; Sign up for free</Link>
                    </p>
                </FormCard>
            </BasicLayout>
        </>
    )
}
