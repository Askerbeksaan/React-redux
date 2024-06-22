import staricon from '/Star.svg'
import { useGetFoodQuery } from "../api/post";
import { useParams } from "react-router-dom";
import { useSelector,useDispatch } from 'react-redux';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useGetCategoriesQuery } from "../api/post";
import MealCard from '../components/MealCard'
import Modal from '../components/Modal';
import { increase, setSelectedItem, decrease, setData, setClose } from '../hooks/orderReducer';

function Details() {
    const dispatch = useDispatch()
    const selectedItem = useSelector((state) => state.order.selectedItem)
    const quant = useSelector((state) => state.order.quantity)
    const price = useSelector((state) => state.order.price)
    const { id } = useParams();
    const {data,isLoading} = useGetFoodQuery()
    const {data: foods, isLoad } = useGetCategoriesQuery()
    if(isLoading){
        return(
            <p>Идет загрузка...</p>
        )
    }
    if(isLoad){
        return(
            <p>Идет загрузка...</p>
        )
    }
    const singleRest = data.data.filter(rest=> rest.id==parseInt(id))
    return(
        <div>
            <Header />
            <div className="singleBanner" key={singleRest[0].id}>
                <img className="singleFoodBanner" src={singleRest[0].photoUrl} alt="" />
                <h1 className="singleTxtBanner">{singleRest[0].name}</h1>
            </div>
            <div className='restBackground RestaurantCard'>
                <h2>About</h2>
                <h6>{singleRest[0].specialty}</h6>
                <div>
                    <img src={staricon} alt="" />
                    <p>{singleRest[0].rating}</p>
                </div>
                <div className='foodCategory'>
                    {
                        singleRest[0].categories.map(food => {
                            return(
                                <p key={food}>{food}</p>
                            )
                        }
                        )
                    }
                </div>
            </div>
            <div className='restBackground grid-block'>
                {
                    foods.data.map(food=><MealCard 
                        key={food.id}
                        name={food.title}
                        price={food.id}
                        description={food.title}
                        onShowModal={()=>dispatch(setSelectedItem(food))}
                    />)
                }
                
            </div>
            {
                    selectedItem && <Modal 
                        heading={selectedItem.title}
                        description={selectedItem.title}
                        quantity={selectedItem.quantity}
                        sum={selectedItem.price}
                        increase={()=>dispatch(increase(quant))}
                        decrease={()=>dispatch(decrease(quant))}
                        addOrder={()=>dispatch(setData(selectedItem))}
                        closing={()=>dispatch(setClose(selectedItem))}
                    />
                }
            

            <Footer />
        </div>
    )
}

export default Details;