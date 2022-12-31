import { formatDate } from '../../../helpers/formatDate'
import { useOrder } from '../../../hooks/useOrder'
import { SayniLoader } from '../../atoms/Loader/SayniLoader'
import Logo from '../../molecules/Logo'
import {brief} from './index.module.css'

export const Order = () => {
    const { order, loadingOrder, errorOrder } = useOrder()

    if (loadingOrder) return <SayniLoader />

    return (
        <>
            {(!loadingOrder && !errorOrder) &&
                <div className={brief}>

                    <Logo />
                    <p>Order: {order.id}</p>
                    <p>Issue date: {formatDate(order.date.toDate())}</p>
                    <table>
                        <thead>
                            <tr>
                                <td><strong>Unit</strong></td>
                                <td><strong>Product</strong></td>
                                <td><strong>Price</strong></td>
                                <td><strong>Subtotal</strong></td>
                            </tr>
                        </thead>

                        <tbody>
                            {order.items.map((o) => (
                                <tr key={o.id}>
                                    <td>{o.units}</td>
                                    <td>{o.name}</td>
                                    <td>{o.price}</td>
                                    <td>{o.units * o.price}</td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan="3"> 
                                    <b>Total amount</b>
                                </td>
                                <td>{order.totalAmount}</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            }
        </>
    )
}
