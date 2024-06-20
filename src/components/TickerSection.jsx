import imgRestaurants from '/restaurants.png'

export default function TickerSection(){
    return(
        <div className='TickerSection'>
            <div>
                <h1><span>Award winning</span> The best restaurants near you!</h1>
                <button>Explore the best restaurants</button>
            </div>
            <img src={imgRestaurants} />
        </div>
    )
}