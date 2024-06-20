import { supabase } from "../api/index.js";
import { useGetFoodQuery } from "../api/post.js";
import RestaurantCard from "./RestaurantCard";

function RestaurantList() {
    const {data: restaurants, isLoading, error } = useGetFoodQuery()
    if (isLoading) {
        return (
            <p>Идет загрузка...</p>
        )
    }
    return (
            <div className="Restaurants">
                {
                    restaurants.data.map(restaurant => <RestaurantCard
                        id={restaurant.id}
                        key={restaurant.id}
                        name={restaurant.name}
                        categories={restaurant.categories}
                        photoUrl={restaurant.photoUrl}
                        rating={restaurant.rating}
                        specialty={restaurant.specialty}   
                    />)
                }
            </div>   

    );
}

export default RestaurantList;