import "@/styles/Hero2.css"

function Hero2() {
  return (
    <div className="hero2" id="Hero2" >
        <div className="hero2-img">
            <img src="/assets/hero-img1.svg" alt=""/>
            <img src="/assets/orange-rectangle.svg" alt=""  className="rect1" width="300px" />
        </div>
        <div className="hero2-text">
            <h1 className="about" >About Me</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, autem!</p>
            <p>Perspiciatis distinctio maxime ducimus sit praesentium odio, beatae odit. Atque, in dolorem?</p>

            <br />

            <h1 className="skill" >UX</h1>
            <img src="/assets/ux.png" alt="" width="500px" />

            <h1 className="skill" >Website Design</h1>
            <img src="/assets/web.png" alt="" width="500px" />

            <h1 className="skill" >App Design</h1>
            <img src="/assets/app.png" alt="" width="500px" />

            <h1 className="skill" >Graphic Design</h1>
            <img src="/assets/graphic.png" alt="" width="500px" />   
        </div>
    </div>
  )
}

export default Hero2