import starIcon from '/Star.svg' 
import { Link } from 'react-router-dom' 

function RestaurantCard({ id, name, rating, photoUrl, specialty, categories }) {
    const categoriesList = categories.map(category => {
        return(
            <p key={category}>{category}</p>
        )
    })

    return (
        <Link to={'/restaurants/'+id}>
            <div className='RestaurantCard'>
                <img src={photoUrl} alt="" width={427} height={240}/>
                <h4>{name}</h4>
                <div>
                    <img src={starIcon} alt="" />
                    <span>{rating}</span>
                </div>
                <h6>{specialty}</h6>
                <div className='foodCategory'>
                    {categoriesList}
                </div>
            </div>
        </Link>
    );
}

export default RestaurantCard;