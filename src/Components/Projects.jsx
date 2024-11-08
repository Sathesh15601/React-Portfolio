import employeeMSImage from "../assets/WeatherProjects.png";
import bookMSImage from "../assets/ViteTodolist.png";

const projects = [
  {
    id: 1,
    name: "Weather Application",
    description:
      "Very smooth and responsive using HTML, CSS, and JavaScript. Users can search for a location and view the weather report.",
    image: employeeMSImage,
    github: "https://github.com/Sathesh15601/Weather-app.git",
    preview: "https://weather15601app.netlify.app/",
  },
  {
    id: 2,
    name: "Todolist from localstorage",
    description:
      "Using React js and tailwind css then it will store the data in localstorage when we reload the page it will still displayed the stored data ",
    image: bookMSImage,
    github: "https://github.com/Sathesh15601/TodoList-from-LocalStorage.git",
    preview: "https://vitetodolist.netlify.app/",
  },
];

const Projects = () => {
  return (
    <div className="background4 text-white py-20" id="projects">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-green-700 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 ease-out overflow-hidden"
              data-aos="fade-right"
            >
              <img
                src={project.image}
                alt={`Screenshot of ${project.name}`}
                className="rounded-lg mb-4 w-full h-48 object-cover shadow-lg"
                onError={(e) => {
                  e.target.src = "path/to/default/image.png";
                }}
              />
              <h3 className="text-2xl text-black mb-2">{project.name}</h3>
              <p className="text-green-300 mb-4">{project.description}</p>
              <div className="flex justify-between">
                <a
                  href={project.github}
                  className="bg-green-900 text-white inline-block transform transition-transform duration-300 hover: active:bg-green-800 hover:bg-green-600 hover:scale-105 px-4 py-2 rounded "
                  target="_blank"
                  aria-label={`View ${project.name} on GitHub`}
                >
                  GitHub Link
                </a>
                <a
                  href={project.preview}
                  className=" bg-green-900 text-white inline-block transform transition-transform duration-300 hover: active:bg-green-800 hover:bg-green-600 hover:scale-105 px-4 py-2 rounded  "
                  target="_blank"
                  aria-label={`Preview ${project.name}`}
                >
                  Preview
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
