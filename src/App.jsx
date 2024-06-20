import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import NewRestaurantList from './components/NewRestaurants'
import RestaurantList from './components/ReataurantList'
import TickerSection from './components/TickerSection'
import Banner from '/Banner block.png'
import Foods from './components/Foods'

function App() {
    return(
      <>
      <Header />
      <div className='banner'>
        <button className='btn_banner'>See all restaurants</button>
        <img src={Banner} alt="" />
      </div>
      <div className='restBackground'>
        <h2>Our favourite picks</h2>
        <RestaurantList />
      </div>
      <TickerSection />
      <div className='restBackground'>
        <h2>New arrivals</h2>
        <NewRestaurantList />
      </div>
      <Foods />
      <Footer />
      </>
    )
}

export default App