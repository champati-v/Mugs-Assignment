import "@/styles/Services.css";

function Services() {
  return (
    <div className="services" id="Services" >
      <div className="text">
        <h1>Services</h1>
        <p>Lorem ipsum dolor sit amet consectetur</p>
        <p>consectetur adipisicing elit. Ut, ita</p>
      </div>
      <div className="cards-box">
        <div className="card">
          <div className = "card-imag" >
            <img src="/assets/ui-icon.png" alt="" className="card-icons" />
          </div>
          <h1>UI/UX</h1>
          <p>Lorem ipsum dolor sit amet consectetur</p>
        </div>

        <div className="card">
          <div className = "card-imag" >
            <img src="/assets/web-icon.png" alt="" className="card-icons" />
          </div>
          <h1>Website Design</h1>
          <p>Lorem ipsum dolor sit amet, consectetur</p>
        </div>

        <div className="card">
          <div className = "card-imag" >
            <img src="/assets/app-icon.png" alt="" className="card-icons" />
          </div>
          <h1>App Design</h1>
          <p>Lorem ipsum dolor sit amet consectetur</p>
        </div>

        <div className="card">
          <div className = "card-imag" >
            <img src="/assets/graphic-icon.png" alt="" className="card-icons" />
          </div>
          <h1>Graphic Design</h1>
          <p>Lorem ipsum dolor, sit amet consectetur</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
