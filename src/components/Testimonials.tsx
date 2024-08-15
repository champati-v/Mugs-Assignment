import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import "@/styles/Testimonials.css";

const testimonials = [
  {
    quote:
      '"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia minima animi quos assumenda excepturi consequatur repellendus, accusamus voluptas quasi voluptate!"',
    name: "Name",
    title: "CEO",
  },
  {
    quote:
      '"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia minima animi quos assumenda excepturi consequatur repellendus, accusamus voluptas quasi voluptate!"',
    name: "Name",
    title: "CEO",
  },
];

function Testimonials() {
  return (
    <div className="testimonials" id="Testimonials" >
      <div className="testimonial-text">
        <h1>Testimonials</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          dolorum?
        </p>
      </div>

      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />

      <div className="contact-sec">

        <div className="contact-text">
          <h1>Lets Design Together</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            voluptatem corrupti perspiciatis.
          </p>
        </div>

        <div className="form">
          <input type="text" placeholder="Enter your email" />
          <button>Contact Me</button>
        </div>

      </div>

    </div>
  );
}

export default Testimonials;
