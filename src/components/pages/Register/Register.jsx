import React from 'react'
import { BasicLayout } from '../../templates/BasicLayout/BasicLayout'
import { FormCard } from '../../organisms/FormCard/FormCard'

import { useUser } from '../../../hooks/useUser'

import Input from '../../molecules/Input/Input'
import Button from '../../atoms/Button/Button'
import Avatar from '../../../Icons/Avatar/Avatar'
import PassIcon from '../../../Icons/PassIcon/PassIcon'
import { Link } from 'react-router-dom'
import { ErrorAlert } from '../../atoms/Alert/ErrorAlert'

export default function Register() {

    const { user, setUser, singUp, error } = useUser()

    const handleSubmit = (e) => {
        e.preventDefault()
        singUp(user.email, user.password)
    }
    const handleChange = ({ target: { name, value } }) => {
        setUser({ ...user, [name]: value })
    }

    return (
        <BasicLayout>
            <FormCard text='Create your account'>
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
                <p>
                    Already have an account?
                    <Link to='/login'>&nbsp; Sign in for free</Link>
                </p>
            </FormCard>
        </BasicLayout>
    )
}
