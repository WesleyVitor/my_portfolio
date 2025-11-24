export default function IndustryProjects() {
  const projects = [
    {
      title: "Backend Developer",
      technologies: "Python, Django, SQL, Kubernetes, Google Cloud Platform, DRF",
      description: [
        "Designed, developed and tested new features and maintained legacy code using python and django framework.",
        "Implemented subscription payment functionality via bank_slip, PIX, and credit card, integrating with Starkbank and Vindi.",
        "Developed endpoints for front-end consumption and optimized existing ones.",
        "Updated documentation and added logs for better system tracking",
        "Assisted the operations team in resolving client issues."
      ],
      link: "#",
    },
    {
      title: "Entry Level Developer",
      technologies: "Ruby, Ruby on Rails, SQL",
      description: [
        "Participation in the Lift Learning program, organized by Finatec, in collaboration with academia, major companies, and entrepreneurs.",
        "Worked as a junior developer on the development of a video contract product.",
        "Contributed to a project that was deployed to production and used by real users to address existing issues.",
        "Collaborated with a team to develop and enhance an innovative solution."

      ],
      link: "#",
    },
    {
      title: "Volunteer Programmer",
      technologies: "Python, Django, SQL",
      description: [
        "Participation in craftsperson programm that create a platform to handle their products",
      ],
      link: "#",
    },
  ];

  return (
    <section id="industry" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-12 md:mb-16 text-center">
          INDUSTRY
        </h2>
        <div className="space-y-8 md:space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mb-3 md:mb-4">
                <a
                  href={project.link}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {project.title}
                </a>
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2 md:mb-3 text-sm md:text-base">
                {project.technologies}
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base italic">
                <ul class="list-disc pl-5">
                {project.description.map((desc)=>(
                  <li >{desc}</li>
                ))}

                </ul>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

