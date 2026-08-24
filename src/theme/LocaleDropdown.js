import React, {useEffect} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function LocaleDropdown() {
  const {i18n} = useDocusaurusContext();

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const lang = (navigator.language || (navigator.languages && navigator.languages[0]) || 'en');
    // # ponytail: browser-language redirect disabled; dropdown selects manually.
  }, []);

  const locales = [
    {code: 'en', label: 'English'},
    {code: 'fa', label: 'فارسی'},
  ];

  const buildHref = (loc) => {
    if (typeof window === 'undefined') return '/';
    const path = window.location.pathname || '/';
    const base = path.replace(/^\/fa\//, '/');
    return loc.code === 'fa' ? `/fa${base}` : base;
  };

  return (
    <div className="navbar__item dropdown dropdown--hoverable dropdown--right">
      <button
        className="navbar__link"
        aria-label="Select language"
        onClick={(e) => {
          const menu = e.currentTarget.nextElementSibling;
          menu.classList.toggle('dropdown__menu--open');
        }}
      >
        {i18n.currentLocale === 'fa' ? 'فارسی' : 'English'} ▾
      </button>
      <ul className="dropdown__menu">
        {locales.map((loc) => (
          <li key={loc.code}>
            <a className="dropdown__link" href={buildHref(loc)}>
              {loc.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
