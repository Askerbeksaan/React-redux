import { useGetCategoriesQuery } from "../api/post";
export default function Foods(){
    const {data , isLoading} = useGetCategoriesQuery()
    if(isLoading){
        return(
            <p>Идет загрузка...</p>
        )
    }
    return(
        <div className="restBackground">
        <h2>Categories</h2>
            <div className="foods-list">
                {
            data.data.map(category => {
                return(
                    <div className="food-block">
                        <div key={category.id}>
                            <img className="foods-img" src={category.photoUrl} alt="" />
                            <p>{category.title}</p>
                        </div>
                    </div>
                )
            })
        }
            </div>   
        </div>
    )
}