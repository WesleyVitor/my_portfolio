import Image from "next/image";
export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 md:pt-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 md:mb-8 flex items-center flex-col gap-2">
          <Image width={150} height={150} src="https://github.com/WesleyVitor.png" alt="Wesley Vitor's avatar" className="rounded-full" />
          Hi, I&apos;m Wesley
        </h1>
        <div className="space-y-4 md:space-y-6 text-md md:text-md text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          <p>
            I&apos;m a software engineer developer passionate about solving real-world problems through technology. 
            I have solid experience with Python, Django, and PostgreSQL, as well as working with REST APIs, payment integrations (e.g., Starkbank, Vindi), and deployments on Kubernetes in Google Cloud.
          </p>
          <p>
            I&apos;ve worked in startups and on high-impact social projects, such as Lift Learning in partnership with Finatec. My focus is on writing clean, high-performance, and well-documented code.
          </p>
          <p>
            Currently, I&apos;m diving deeper into applied AI (GenAI, RAG, LLMs) and seeking opportunities that challenge my technical skills while delivering real value to users.
          </p>
          <p>
            In my spare time, I share knowledge by writing technical articles and exploring the world of Django and AI.
          </p>
          <p>
            I believe technology has the power to transform lives — and I want to be at the heart of that transformation.
          </p>
        </div>
      </div>
    </section>
  );
}

