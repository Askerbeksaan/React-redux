import bigLogo from '/logo.png'

export default function Footer(){
    return(
        <footer>
            <img src={bigLogo} alt="" />
            <div className='table'>
                <div className='column'>
                    <h4>Discover us</h4>
                    <h6>Home</h6>
                    <h6>Categories</h6>
                    <h6>About</h6>
                </div>
                <div className='column'>
                    <h4>Our social media</h4>
                    <h6>Facebook</h6>
                    <h6>Instagram</h6>
                    <h6>Twitter</h6>
                </div>
                <div className='column'>
                    <h4>Check our apps</h4>
                    <h6>Link</h6>
                    <h6>Link</h6>
                </div>
            </div>
        </footer>
    )
}