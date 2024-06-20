import lastImg from '/Group 11.png'
import logoIcon from '/Group.png'
import MyOrders from '../components/MyOrders'
export default function LastPage(){
    let hour = new Date().getHours()
    let minut = new Date().getMinutes()
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
                <h2 className='Last-txt'>Order confirmed!</h2>
            </div>
            <div className='whiteblock'>
                <div className='myOrder'>
                    <p>Estimated delivery</p>
                    <h2>{hour}:{minut} today</h2>
                    <MyOrders />
                </div>
                <img src={lastImg} alt="" />
            </div>
        </div>
    )
}