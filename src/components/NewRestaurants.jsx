import { useGetFoodQuery } from "../api/post.js";
import RestaurantCard from "./RestaurantCard";

function NewRestaurantList() {
    const {data: restaurants, isLoading, error } = useGetFoodQuery()
    if (isLoading) {
        return (
            <p>Идет загрузка...</p>
        )
    }
    const newRestaurants = restaurants.data.filter(rest => rest.isNew === true) 
    return (
            <div className="Restaurants">
                {
                    newRestaurants.map(restaurant => <RestaurantCard
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

export default NewRestaurantList;