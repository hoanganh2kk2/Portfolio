import Project1Img from "../assets/xinh1.jpg";
import Project2Img from "../assets/xinh2.jpg";
import Project3Img from "../assets/xinh3.jpg";
import Project4Img from "../assets/xinh4.jpg";

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: "Hospital Management System",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quae fugit corporis?",
      image: Project1Img,
      imagePosition: "right"
    },
    {
      id: 2,
      title: "School Management System", 
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quae fugit corporis?",
      image: Project2Img,
      imagePosition: "left"
    },
    {
      id: 3,
      title: "Inventory Management System",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quae fugit corporis?",
      image: Project3Img,
      imagePosition: "right"
    },
    {
      id: 4,
      title: "POS Management System",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quae fugit corporis?",
      image: Project4Img,
      imagePosition: "left"
    }
  ];

  const ProjectCard = ({ project }) => {
    const isImageLeft = project.imagePosition === "left";
    
    return (
      <div className="max-w-full mx-auto bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105">
        <div className={`md:flex ${isImageLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
          {/* Content */}
          <div className="flex-1 p-6 md:p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold mb-2">
              {project.title}
            </div>
            <a 
              href="#" 
              className="text-lg font-medium text-gray-900 hover:text-indigo-600 transition-colors duration-200"
            >
              Learn More
            </a>
            <p className="mt-3 text-gray-600 leading-relaxed">
              {project.description}
            </p>
            <div className="mt-4">
              <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-200 font-medium">
                View Project
              </button>
            </div>
          </div>
          
          {/* Image */}
          <div className="md:shrink-0 p-5 flex justify-center items-center">
            <img
              src={project.image}
              alt={project.title}
              className="rounded-full w-32 h-32 md:w-40 md:h-40 object-cover border-4 border-indigo-100 hover:border-indigo-300 transition-colors duration-300"
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="bg-indigo-800 mx-4 md:mx-20 my-20 rounded-2xl">
      {/* Header */}
      <div className="text-center py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          My Projects
        </h1>
        <p className="text-indigo-200 text-lg max-w-2xl mx-auto px-4">
          Explore some of my recent work and projects
        </p>
      </div>

      {/* Projects Grid */}
      <div className="px-6 md:px-10 pb-16">
        {/* First Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <ProjectCard project={projectsData[0]} />
          <ProjectCard project={projectsData[1]} />
        </div>
        
        {/* Divider */}
        <div className="flex justify-center my-12">
          <div className="w-32 h-1 bg-white rounded-full opacity-50"></div>
        </div>
        
        {/* Second Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ProjectCard project={projectsData[2]} />
          <ProjectCard project={projectsData[3]} />
        </div>
      </div>
    </section>
  );
};

export default Projects;