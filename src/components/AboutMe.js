import React from "react";

const AboutMe = () => {
  const data = [
    { skills: "HTML5" },
    { skills: "CSS" },
    { skills: "Tailwind" },
    { skills: "Bootstrap" },
    { skills: "ReactJS" },
    { skills: "NodeJS" },
    { skills: "MongoDB" },
    { skills: "ExpressJS" },
  ];
  return (
    <section data-aos="fade-left" className="text-gray-100">
      <div className="container px-4 py-12 mx-auto flex h-[700px] justify-center items-center">
        <div className="grid gap-4 mx-4 sm:grid-cols-12 place-items-center">
          <div className="col-span-12 sm:col-span-3">
            <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-violet-400">
              <h3 className="text-3xl font-semibold">Skills</h3>
              <span className="text-sm font-bold tracking-wider uppercase text-gray-400">
                Web Developer
              </span>
            </div>
          </div>
          <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
            {data.map((value) => (
              <>
                <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-700">
                  <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-violet-400">
                    <h3 className="text-xl font-semibold tracking-wide">
                      {value.skills}
                    </h3>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
