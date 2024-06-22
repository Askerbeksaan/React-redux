import { useSelector } from 'react-redux'
export default function MyOrders(){
    const data = useSelector((state)=>state.order.data)
    let sumPrice=0
    return(
        <div className='miniOrder'>
                <h4>Your order</h4>
                <div>
                    {
                        data.map(order=> {
                            sumPrice+=order.price
                            return(
                                <div key={order.title} className='head'>
                                    <h3>{order.quantity}</h3>
                                    <h3>{order.title}</h3>
                                    <h3>{order.price}$</h3>
                                </div>
                            )
                            }
                        )
                    }
                </div>
                <div>
                    <h4>Total</h4>
                    <h4>{sumPrice}</h4>
                </div>
           </div>
    )
}