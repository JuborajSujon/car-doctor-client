import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero min-h-screen  px-4 py-16 lg:py-20">
      <div className="hero-content flex-col lg:flex-row gap-20">
        <div className="lg:w-1/2 relative">
          <img src={person} className="w-3/4 rounded-lg shadow-2xl" alt="" />
          <img
            src={parts}
            className="w-1/2 absolute right-5 top-1/2 rounded-lg shadow-2xl border-8 border-white"
            alt=""
          />
        </div>
        <div className="lg:w-1/2">
          <p className="text-orange-600 font-bold">About Us</p>
          <h1 className="text-5xl font-bold">
            We are qualified & of experience
          </h1>
          <p className="py-6">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p className="py-6">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>

          <button className="btn text-white bg-orange-600 ">
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
