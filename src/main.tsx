import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux';
import { store } from '../store.ts';
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationES from './locales/es.json'; // Importa las traducciones en español
import translationEN from './locales/en.json'; // Importa las traducciones en inglés

const lang = localStorage.getItem("language");

i18n
  .use(initReactI18next)
  .init({
    resources: {
      es: {
        translation: translationES, 
      },
      en: {
        translation: translationEN,
      },
    },
    lng: lang || 'es', 
    fallbackLng: lang || 'es', 
    interpolation: {
      escapeValue: false,
    },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <I18nextProvider i18n={i18n}>
    <Provider store={store}>
      <App />
    </Provider>,
  </I18nextProvider>
)
