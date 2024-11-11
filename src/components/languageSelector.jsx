import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaGlobe } from 'react-icons/fa';
import styles from './LanguageSelector.module.css'; 

const languages = [
  { code: 'en', lang: 'English' },
  { code: 'de', lang: 'Deutsch' },
];

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className={styles.languageSelector}>
      <div className={styles.dropdown}>
        <button className={styles.dropbtn}>
          <FaGlobe /> {i18n.language.toUpperCase()}
        </button>
        <div className={styles.dropdownContent}>
          {languages.map((lng) => (
            <button
              className={lng.code === i18n.language ? styles.selected : ''}
              key={lng.code}
              onClick={() => changeLanguage(lng.code)}
            >
              {lng.lang}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguageSelector;
