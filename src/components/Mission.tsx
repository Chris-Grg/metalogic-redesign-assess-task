import man from "../../public/assets/ai-1.jpg";

const Mission = () => {
  return (
    <section className="mb-12 lg:p-[8rem] bg-blue-100" id="mission">
      <div className="flex justify-around items-start ml-11">
        <figure className="hidden lg:block">
          <img
            src={man}
            alt="man"
            className="rounded-bl-3xl h-[40rem] w-full"
            loading="lazy"
          />
        </figure>
        <div className="mx-auto flex flex-col gap-9 text-left lg:px-20 py-1 2xl:container md:w-[60%]">
          <div className="text-xl font-medium text-red-500">Our Mission</div>
          <h1 className="text-7xl font-black text-blue-950">
            <span>Dedication to</span>
            <br />
            <span className="text-red-500">innovation</span>
          </h1>
          <p className="font-light text-2xl">
            We believe that every project is an opportunity to create something
            remarkable – a chance to push boundaries, challenge norms, and
            exceed expectations. We approach each endeavor with curiosity and
            creativity, striving to craft solutions that not only meet your
            needs but also propel you ahead of the curve.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mission;
