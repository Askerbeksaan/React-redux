import Header from "../components/Header";
import RestaurantList from "../components/ReataurantList";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import { useGetCategoriesQuery } from "../api/post";

export default function CategoryFood(){
    const { id } = useParams()
    const {data,isLoading} = useGetCategoriesQuery()
    if(isLoading){
        return(
            <p>Идет загрузка...</p>
        )
    }
    const singleFood = data.data.filter(food=> food.id===parseInt(id))
    return(
        <div>
            <Header />
            <div className="singleBanner" key={singleFood[0].id}>
                <img className="singleFoodBanner" src={singleFood[0].photoUrl} alt="" />
                <h1 className="singleTxtBanner">{singleFood[0].title}</h1>
            </div>
            <div className="restBackground">
                <RestaurantList />
                <RestaurantList />
            </div>
            <Footer />
        </div>
    )
}