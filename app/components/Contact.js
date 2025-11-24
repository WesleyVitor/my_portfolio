export default function Contact() {
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: "LinkedIn",
      url: "https://www.linkedin.com/in/wesleydemorais/?locale=en_US",
    },
    {
      name: "GitHub",
      icon: "GitHub",
      url: "https://github.com/WesleyVitor",
    },
    {
      name: "Dev.to",
      icon: "Dev.to",
      url: "https://dev.to/wesleymorais",
    },
    {
      name: "Medium",
      icon: "Medium",
      url: "https://medium.com/@wesleydemorais",
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-8 md:mb-12">
          CONTACT
        </h2>
        <div className="space-y-6 md:space-y-8">
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
            Feel free to reach out if you&apos;d like to collaborate or have any questions.
          </p>
          <a
            href="mailto:your.email@example.com"
            className="inline-block text-lg md:text-xl text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
          >
            wesleydemorais@outlook.com.br
          </a>
          
          <div className="flex justify-center items-center space-x-6 md:space-x-8 pt-8">
            <p className="text-sm md:text-base font-semibold text-gray-700 dark:text-gray-300">
              Follow me
            </p>
            <div className="flex space-x-4 md:space-x-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

