import laptop from "../../public/assets/lap.webp";

const Intro = () => {
  return (
    <section
      className="relative m-auto md:py-40 mb-2 flex lg:flex-row w-[80%] lg:items-start sm:items-center"
      id="intro"
    >
      <div className="flex flex-col gap-10 pb-28 pt-8 text-left ">
        <span className="text-xl uppercase font-bold">about us</span>
        <div
          className="text-4xl font-bold capitalize md:text-5xl lg:text-6xl text-red-600"
          style={{ opacity: "1", transform: "none" }}
        >
          driving innovations
          <br /> <span className="text-blue-900"> and empowering business</span>
        </div>
        <div className="font-semibold md:w-[90%] text-blue-900">
          <span className="text-bold font-bold">
            Bridging Futures Since 2023
          </span>
          <p className="text-sm">
            Metalogic envisions a future where technology serves as a catalyst
            for limitless human potential, fostering innovation and empowering
            organizations to thrive in a transformative digital era.
          </p>
        </div>
      </div>
      <div className="w-full hidden lg:block">
        <img src={laptop} className="rounded-br-3xl" loading="lazy" />
      </div>
    </section>
  );
};

export default Intro;
