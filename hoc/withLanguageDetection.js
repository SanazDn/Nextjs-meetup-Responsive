import { useEffect } from 'react';
import { i18n } from '../i18n'; // Import the i18n instance
//import { useTranslation } from "next-i18next";

const withLanguageDetection = (WrappedComponent) => {
    //const { i18n, t } = useTranslation();

  const WithLanguageDetection = (props) => {
    useEffect(() => {
      // Your language detection logic here
      const userLanguage = navigator.language || 'en';
      console.log("userLanguage",userLanguage)

      // Set the language for the page
      //i18n.changeLanguage(userLanguage);
    }, []);

    return <WrappedComponent {...props} />;
  };

  return WithLanguageDetection;
};

export default withLanguageDetection;
