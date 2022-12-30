import GoogleIcon from '../../../Icons/Google/Google'
import { loginWithGoogleService } from '../../../services/UserService/authService'
import Button from '../../atoms/Button/Button'
import Logo from '../../molecules/Logo'
import { loginLogo, loginCard } from './index.module.css'

export const FormCard = ({ text,children }) => {
    return (
        <div className={loginCard}>
            <div className={loginLogo}>
                <Logo color="#F7F6F9" />
                <p>{text}</p>
            </div>
            <section>
                <p>Use one of your network</p>
                <Button onClick={loginWithGoogleService} text='Google' icon={<GoogleIcon />} />
            </section>
            {children}
        </div>
    )
}
