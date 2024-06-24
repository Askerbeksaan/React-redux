import { Link } from 'react-router-dom'
import logoIcon from '/Group.png'
import cartIcon from '/button _ black _ icon.png'
import Orders from './Orders'
import { useSelector, useDispatch } from 'react-redux'
import { setShowOrder, setClose } from '../hooks/orderReducer'

export default function Header() {
    let summer = 0
    const data = useSelector((state)=>state.order.data)
    const dispatch = useDispatch();
    const showOrder = useSelector((state)=>state.order.showOrder)
    return(
        <header>
            <div className='block1'>
                <img src={logoIcon} alt="" />
                <h4>QuickMeal</h4>
            </div>
            <div className='block2'>
                <Link to='/'>Home</Link>
                <Link to='/categories'>All restaurants</Link>

                <button onClick={()=>dispatch(setShowOrder(data))} className='cartBtn'>
                    <img src={cartIcon} alt="" />
                </button>
                {
                    showOrder && 
                    <div className='order'> 
                        <div className='orderHeader'>
                            <h4>Your order</h4>
                            <button onClick={()=>dispatch(setClose(showOrder))}>x</button>
                        </div>
                        {
                        data.map(order => {
                            summer+=order.sum
                            return(
                            <Orders 
                                key={order.name}
                                heading={order.name}
                                description={order.description}
                                quantity={order.quantity}
                                sum={order.sum}
                        />)
                            }
                        )}
                        <div className='flexing'>
                            <div className='head'>
                                <h4>Total</h4>
                                <h4 className='lighter'>{summer}$</h4>
                            </div>
                            <Link to='/Forms'>
                                <button>Checkout</button>
                            </Link>
                        </div>
                    </div>
                }
                
            </div>
        </header>
    
    )

}