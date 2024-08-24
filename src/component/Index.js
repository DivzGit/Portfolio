import React from "react";
import Developer from "../assets/images/developer-removebg.png";
import { AiOutlineTwitter ,AiOutlineFacebook,AiOutlineLinkedin} from "react-icons/ai";

const Index = () => {
  return (
    <section
      className="flex flex-col md:flex-row md:h-[100vh] px-5 py-32 bg-secondary text-white justify-center"
      style={{ background: "#9975fb45" }}
    >
      <div className="md:w-1/2 flex flex-col">
        <h1 className="text-6xl">
          Hi, <br />
          I'm JVM
          <p className="text-2xl font-font-sriracha">Full-Stack Developer</p>
        </h1>
        <div className="flex py-10">
          <a href=" " className="pr-5 hover:text-green-300"><AiOutlineTwitter size={40}/></a>
          <a href=" " className="pr-5 hover:text-green-300"><AiOutlineFacebook size={40}/></a>
          <a href=" " className="hover:text-green-300"><AiOutlineLinkedin size={40}/></a>
        </div>
      </div>
      {/* <img className="md:w-1/3" src={Developer} alt="Developer" /> */}
    </section>
  );
};

export default Index;
