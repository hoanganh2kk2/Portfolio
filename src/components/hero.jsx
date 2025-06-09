import {
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsPinterest,
} from "react-icons/bs";
import HeroPic from "../assets/Lưu Hạo Tồn.webp";

const Hero = () => {
  return (
    <section className="flex justify-around items-center p-10 lg:space-x-10 lg:flex-row flex-col lg:space-y-0 space-y-10 text-white">
      {/* Left Section - Introduction */}
      <div className="lg:w-1/3 w-full">
        <p className="text-4xl mb-5 text-slate-300">I'm</p>
        <h1 className="text-6xl font-bold mb-4">Lưu Hạo Tồn</h1>
        <hr className="border-slate-300 mb-6" />
        <p className="text-slate-300 font-sans leading-relaxed">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, ut
          dolores pariatur cumque repellat excepturi at maiores obcaecati odio
          nulla amet non expedita enim vitae, laborum, sunt quia. Placeat,
          magnam. Molestiae voluptates quod, error modi voluptate fugiat hic
          cupiditate vitae soluta est.
        </p>
      </div>

      {/* Middle Section - Profile Image */}
      <div className="lg:w-1/3 w-full flex justify-center">
        <img
          src={HeroPic}
          alt="Lưu Hạo Tồn"
          width={384}
          height={384}
          className="rounded-full w-60 h-60 lg:w-96 lg:h-96 border-8 object-cover border-white shadow-2xl hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Right Section - About & Social */}
      <div className="lg:w-1/3 w-full text-center lg:text-left">
        <h2 className="text-4xl mb-4 font-bold">About me</h2>
        <p className="text-slate-300 mb-6 leading-relaxed">
          Let's build quality in programming and design with our services
        </p>

        <button className="bg-white text-indigo-600 px-10 py-3 my-3 rounded-full hover:bg-indigo-800 hover:text-white transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105">
          Show More...
        </button>

        {/* Social Media Icons */}
        <div className="flex mt-8 space-x-4 justify-center lg:justify-start">
          <a href="#" className="group" aria-label="Facebook">
            <BsFacebook
              size={40}
              className="border-4 border-white hover:border-indigo-800 rounded-full p-2 transition-all duration-300 hover:bg-indigo-800 hover:text-white group-hover:scale-110"
            />
          </a>
          <a href="#" className="group" aria-label="Twitter">
            <BsTwitter
              size={40}
              className="border-4 border-white hover:border-indigo-800 rounded-full p-2 transition-all duration-300 hover:bg-indigo-800 hover:text-white group-hover:scale-110"
            />
          </a>
          <a href="#" className="group" aria-label="Instagram">
            <BsInstagram
              size={40}
              className="border-4 border-white hover:border-indigo-800 rounded-full p-2 transition-all duration-300 hover:bg-indigo-800 hover:text-white group-hover:scale-110"
            />
          </a>
          <a href="#" className="group" aria-label="Pinterest">
            <BsPinterest
              size={40}
              className="border-4 border-white hover:border-indigo-800 rounded-full p-2 transition-all duration-300 hover:bg-indigo-800 hover:text-white group-hover:scale-110"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
