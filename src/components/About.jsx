import img from "../assets/img/about.png";

const About = () => {
  return (
    <div className=" min-h-screen flex flex-col md:flex-row items-center md:mx-32 mx-5">
      <div>
        <h1 className="text-5xl font-semibold text-center md:text-start mt-14 md:mt-0">
          About Us
        </h1>

        <div className=" w-full md:w-3/4 space-y-5 mt-4">
          <p>
            At FitZone, we&apos;re more than just a fitness center; we&apos;re a
            community dedicated to helping you achieve your fitness goals and
            living a healthier, happier life. With a passion for fitness and a
            commitment to your well-being, our team of experienced trainers and
            staff is here to guide and inspire you on your fitness journey.
          </p>

          <p>
            Whether you&apos;re a fitness novice or a seasoned athlete, FitZone welcomes you with open arms. We&apos;re committed to helping you
            achieve your fitness dreams and make positive, lasting changes in
            your life. Join us today and become a part of our fitness family.
          </p>
        </div>
      </div>
      <div>
      <img src={img} alt="img" />
      </div>
    </div>
  );
};

export default About;
