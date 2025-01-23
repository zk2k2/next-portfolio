import Image from "next/image";
import { IoLogoLinkedin } from "react-icons/io5";

const About = () => {
  return (
    <div className="animate-fade-in-slide-bottom !overflow-clip w-full       lg:my-0    flex-col flex justify-center lg:space-x-0 xl:space-x-8 text-3xl ">
      {" "}
      <div className="flex justify-center space-x-6 ">
        <p className="  xl:px-[7rem]  xl:w-full lg:text-6xl mb-2  text-4xl xl:text-left text-center  mt-8  font-medium text-dark-blue">
          {" "}
          ZIED KHARRAT
        </p>
      </div>
      <div className="  w-full px-4 lg:my-0    lg:flex-row  flex-col flex justify-center lg:space-x-0  text-3xl ">
        <div className=" !w-full     xl:mx-16   lg:mx-10 px-5 lg:px-0  lg:my-0 transition-opacity  duration-500 ease-in-out opacity-100   lg:flex-row  flex-col flex justify-center  lg:space-x-0 xl:space-x-32 text-3xl ">
          <div className="flex text-container  xl:min-w-[50%] transition-opacity duration-500 ease-in-out opacity-100 justify-center flex-col   ">
            <p className="text-light-blue my-4  font-medium px-4 md:px-0 lg:text-left text-center  !text-[1.75rem]  lg:text-2xl">
              ICT Engineering Student | Full Stack Developer
            </p>

            <div className="   flex  justify-center ">
              <p className="text-black xl:min-w-[40rem]   lg:text-xl text-lg md:px-0 px-3 xl:text-2xl  lg:text-left text-center my-6 ">
                Hey there! I&apos;m an ICT Engineering student at INSAT and a
                passionate Full Stack Developer, always ready to dive into
                exciting new projects. I have experience working with various
                web technologies, and I am always exploring new fields such as
                AI and DevOps. I am currently seeking internships and
                opportunities to further develop my skills and contribute to
                innovative projects. Feel free to reach out to me!
              </p>
            </div>
            <div className=" self-center   lg:mx-0 lg:mb-3  justify-center lg:justify-normal flex mx-12 lg:my-0 my-8  w-full space-x-4">
              <button
                className="rounded-full hover:bg-dark-blue font-medium px-7 py-2 xl:text-xl text-[1rem] bg-light-blue transition-colors duration-300 ease-in-out"
                onClick={() => {
                  window.open("/files/Resume - Zied Kharrat.pdf", "_blank");
                }}
              >
                View Resume
              </button>

              <button
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/zied-kharrat/",
                    "_blank"
                  )
                }
                className=" text-light-blue rounded-lg text-5xl hover:text-dark-blue transition-colors duration-300 ease-in-out "
              >
                <IoLogoLinkedin />
              </button>
            </div>
          </div>
          <div className=" !order-2 order    xl:!mx-12  flex flex-col   justify-center lg:my-0 my-6 ">
            <Image
              src="/images/me.png"
              className=" xl:min-w-[426px] xl:!m-0   lg:min-w-[250px] lg:min-h-[176px] place-self-center md:min-w-[213px] md:min-h-[200px]  rounded-full"
              alt="company logo"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
