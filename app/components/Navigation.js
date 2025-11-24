'use client';

export default function Navigation({ mobile = false, onLinkClick }) {
  const navItems = [
    { href: '#home', label: 'HOME' },
    { href: '#projects', label: 'PROJECTS' },
    { href: '#industry', label: 'INDUSTRY' },
    { href: '#contact', label: 'CONTACT' },
  ];

  const handleClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (onLinkClick) onLinkClick();
    }
  };

  if (mobile) {
    return (
      <ul className="space-y-4">
        {navItems.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className="block text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors uppercase tracking-wide"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <ul className="flex items-center space-x-6 lg:space-x-8">
      {navItems.map((item) => (
        <li key={item.href}>
          <a
            href={item.href}
            onClick={(e) => handleClick(e, item.href)}
            className="text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors uppercase tracking-wide"
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

