import Project1Img from "../assets/xinh1.jpg";
import Project2Img from "../assets/xinh2.jpg";
import Project3Img from "../assets/xinh3.jpg";
import Project4Img from "../assets/xinh4.jpg";

const project = () => {
  return (
    <>
      <div className="bg-indigo-800 m-20 max-w-full">
        <div className="grid justify-items-center m-10">
          <h1 className="text-3xl text-white mt-10">Projects</h1>
        </div>

        <div>
          <div className="grid grid-cols-2 gap-4 p-5">
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse">
              <div className="md:flex">
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                    Hospital Management System
                  </div>
                  <a href="#">Subheading</a>
                  <p className="mt-2 text-slate-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laborum quae fugit corporis?
                  </p>
                </div>
                <div className="md:shrink-0 p-5">
                  <img
                    src={Project1Img}
                    alt="Project1"
                    width={150}
                    height={150}
                    className="rounded-full w-32 h-32 object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse">
              <div className="md:flex">
                <div className="md:shrink-0 p-5">
                  <img
                    src={Project2Img}
                    alt="Project2"
                    width={150}
                    height={150}
                    className="rounded-full w-32 h-32 object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                    School Management System
                  </div>
                  <a href="#">Subheading</a>
                  <p className="mt-2 text-slate-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laborum quae fugit corporis?
                  </p>
                </div>
              </div>
            </div>
          </div>
          <hr className="text-white" />
          <div className="grid grid-cols-2 gap-4 p-5">
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse">
              <div className="md:flex">
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                    Inventory Management System
                  </div>
                  <a href="#">Subheading</a>
                  <p className="mt-2 text-slate-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laborum quae fugit corporis?
                  </p>
                </div>
                <div className="md:shrink-0 p-5">
                  <img
                    src={Project3Img}
                    alt="Project3"
                    width={150}
                    height={150}
                    className="rounded-full w-32 h-32 object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse">
              <div className="md:flex">
                <div className="md:shrink-0 p-5">
                  <img
                    src={Project4Img}
                    alt="Project4"
                    width={150}
                    height={150}
                    className="rounded-full w-32 h-32 object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                    POS Management System
                  </div>
                  <a href="#">Subheading</a>
                  <p className="mt-2 text-slate-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laborum quae fugit corporis?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default project;
