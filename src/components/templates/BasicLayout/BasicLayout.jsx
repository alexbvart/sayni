
import { basicLayout } from './index.module.css'
import blob from '../../../assets/blob.svg'
export const BasicLayout = ({ children }) => {

    const bgLayout = {
        with: '100%',
        heigth: '100%',
        backgroundImage: `url(${blob})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }
    return (
        <div className={basicLayout} style={bgLayout}>
            {children}
        </div>
    )
}
