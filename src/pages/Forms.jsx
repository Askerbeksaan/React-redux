import logoIcon from '/Group.png'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import MyOrders from '../components/MyOrders'
import { useCreateOrderMutation } from '../api/post'
export default function Forms(){
    const data = useSelector((state)=>state.order.data)
    const [createOrder] = useCreateOrderMutation()
    let sumPrice=0
    return(
        <div>
            <header>
            <div className='block1'>
                <img src={logoIcon} alt="" />
                <h4>QuickMeal</h4>
            </div>
            <div className='block2'>
            </div>
            </header>
            <div className='greenblock'>
                <h2>Your order at restaurant.name</h2>
            </div>
           <div className="form-block">
                <div className='head'>
                    <h4>Contact details</h4>
                    <p>Step 1 of 3</p>
                </div>
                <div className='inputs'>
                    <div  className='head'>
                        <div className='inputs'>
                            <label>First name</label>
                            <input className='short' type="text" />
                        </div>
                        <div className='inputs'>
                            <label>Last name</label>
                            <input className='short' type="text" />
                        </div>
                    </div>
                    <label>Email address</label>
                    <input type="text" />
                    <label htmlFor="">Phone number (optional)</label>
                    <input type="text" />
                </div>
                <p>We’ll only use your phonenumber to call you about your question</p>
                <Link to='/lastPage'>
                    <button>Отправить</button>
                </Link>
           </div>
           <MyOrders/>
        </div>
    )
}
