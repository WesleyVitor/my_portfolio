export default function Projects() {
  const projects = [
    {
      title: "Review AI",
      technologies: "Python, FastAPI, OpenAI Agents, LangChain, Google Auth, Next.js, Tailwind CSS",
      description: [
        "Generates educational exercises (multiple-choice and short-answer questions) based on review content",
        "Automatically generates structured reviews from PDF content using RAG",
        "Upload and process PDF files for content extraction",
        "Track and access all previously generated reviews and exercises",
        "Stores generated PDFs in Cloudflare R2 for easy access",
        "Mobile-friendly interface with adaptive layouts"
      ],
      link: "https://github.com/WesleyVitor/review_ai",
    },
    {
      title: "Travel AI",
      technologies: "LangChain, LangGraph, Airbnb MCP, Whisper model(OpenAI), Duffel API, Gradio",
      description: [
        "Transcribes and translates audio input to generate a personalized travel itinerary",
        "Retrieves flight data from the Duffel API and lodging options from Airbnb MCP, combining both into a complete travel plan."
      ],
      link: "https://github.com/WesleyVitor/travel_ia_project",
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-12 md:mb-16 text-center">
          PROJECTS
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
                  target="_blank"
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

