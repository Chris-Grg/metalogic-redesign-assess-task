import team from "../data/team.json";
import Card from "../components/Card";
import { NavLink } from "react-router-dom";
import Intro from "../components/Intro";
import Mission from "../components/Mission";

const About = () => {
  return (
    <>
      <Intro />
      <Mission />
      <section className="mb-20" id="projects">
        <div>
          <div className="z-50 mx-auto flex w-[95%] justify-around rounded-xl bg-white py-6 text-center shadow-lg shadow-translucent-dark-100 2xl:container sm:w-[80%]">
            <div className="flex flex-col">
              <p className="text-5xl font-bold text-blue-900">32+</p>
              <p className="font-light text-red-600">Projects Completed</p>
            </div>
            <div className="flex flex-col">
              <p className="text-5xl font-bold text-blue-900">50+</p>
              <p className="font-light text-red-600">Satisfied Clients</p>
            </div>
            <div className="flex flex-col">
              <p className="text-5xl font-bold text-blue-900">18+</p>
              <p className="font-light text-red-600">Experts</p>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-12 lg:px-[8rem]" id="team">
        <div className="flex flex-col gap-9">
          <p className="font-bold text-l text-red-500">MEET THE TEAM</p>
          <h1 className="font-bold text-5xl text-blue-950">
            We Are a Distributed Team
          </h1>
          <div className="grid lg:grid-cols-3">
            {team.map((t) => (
              <Card {...t} key={t.name} />
            ))}
          </div>
        </div>
      </section>
      <section className="m-auto w-full lg:h-screen gap-2 office p-[100px]">
        <div className="flex flex-col gap-2  lg:w-[50%] ml-auto mr-auto bg-slate-100 p-5 rounded-br-3xl">
          <p className="text-4xl">
            <span className="text-red-600">Where Vison</span>
            <span className="text-blue-900 font-bold block">
              Meets Execution
            </span>
          </p>
          <p className="text-lg text-blue-900">
            At Metalogic, we navigate the digital landscape with innovation,
            collaboration, and a dedicated focus on client success. Rooted in a
            commitment to pioneering solutions and anticipating future needs,
            our client relationships go beyond transactions. Understanding
            unique challenges, we craft solutions that align effortlessly with
            business objectives. With a user-centric design philosophy, agile
            methodologies, and a commitment to continuous learning, we promise
            transformative success at Metalogic Software Pvt. Ltd.
          </p>
          <p className="flex gap-5 items-center justify-start m-4" id="more">
            <span className="text-blue-900 font-extrabold hover:text-red-600">
              <a href="/services" className="flex items-center ">
                FIND OUT MORE
                <span className="d-inline-flex">
                  <svg
                    className="playbook__icon"
                    width="18"
                    height="18"
                    fill="currentColor"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <g opacity="1">
                      <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
                    </g>
                  </svg>
                </span>
              </a>
            </span>

            <span className="">
              <NavLink
                to="/career"
                className="flex items-center text-blue-900 font-extrabold hover:text-red-600"
              >
                SEE OPEN JOBS
                <span className="d-inline-flex">
                  <svg
                    className="playbook__icon"
                    width="18"
                    height="18"
                    fill="currentColor"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <g opacity="1">
                      <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
                    </g>
                  </svg>
                </span>
              </NavLink>
            </span>
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
