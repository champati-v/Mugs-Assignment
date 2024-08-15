import "@/styles/Hero1.css"

function Hero1() {
  return (
    <>
    <div className="hero1" id="Hero1" >
        <div className="hero-text">
            <p className="hi" >Hi I am</p>
            <p className="name" >Muhammad Umair</p>
            <h1 className="ui" >UI & UX</h1>
            <h1 className="design" >Designer</h1>
            <br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.</p>
            <p> accusantium, deserunt consequuntur dignissimos architecto, labore, cupiditate sed.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <br />
            <button className="hero-btn" >Hire me</button>
        </div>
        <div className="hero-img">
            <img src="/assets/hero-img.svg" alt=""/>
            <img src="/assets/orange-rectangle.svg" alt="" className="rect" />
            <div className="icons">
                <ul>
                <li><img src="/assets/facebook.svg" alt="" />  </li>
                <li><img src="/assets/twitter.svg" alt="" /></li>
                <li><img src="/assets/instagram.svg" alt="" /></li>
                <li><img src="/assets/linkedin.svg" alt="" /></li>
                </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default Hero1