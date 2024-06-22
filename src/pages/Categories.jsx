import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useGetCategoriesQuery } from "../api/post";
import { Link } from "react-router-dom";

export default function Categories(){
    const {data , isLoading} = useGetCategoriesQuery()
    if(isLoading){
        return(
            <p>Идет загрузка...</p>
        )
    }
    return(
        <div>
            <Header />
            <div className="category-block">
                <h1>Categories</h1>
            </div>
            <div className="restBackground">
                <h2>What’s on the menu?</h2>
                <h6 className="menu-txt">Whatever you’re craving - we’ll deliver it to your door. Feel like having pizza, sushi or your favourite dish from Tatooine? Explore your possibilities below.</h6>
                <div className="menu-list">
                    {data.data.map(category => {
                        return(
                            <Link key={category.id} to={'/categories/'+category.id}>
                                <div className="food-img-block">
                                    <img src={category.photoUrl} alt="" />
                                    <p>{category.title}</p>
                                </div>
                            </Link>
                            
                        )
                    })}
                </div>
            </div>
            <Footer />
        </div>
    )
}