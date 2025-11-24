export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 md:py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">
          © {currentYear} by Wesley.
        </p>
        <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mt-2">
          Contact: <a href="mailto:wesleydemorais@outlook.com.br" className="hover:text-gray-900 dark:hover:text-gray-200 transition-colors">wesleydemorais@outlook.com.br</a>
        </p>
      </div>
    </footer>
  );
}

