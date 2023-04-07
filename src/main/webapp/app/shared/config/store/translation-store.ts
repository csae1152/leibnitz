import { Module } from 'vuex';

export const translationStore: Module<any, any> = {
  state: {
    currentLanguage: localStorage.getItem('currentLanguage') || 'en',
    languages: {
      cs: { name: 'Český' },
      da: { name: 'Dansk' },
      nl: { name: 'Nederlands' },
      en: { name: 'English' },
      fi: { name: 'Suomi' },
      fr: { name: 'Français' },
      de: { name: 'Deutsch' },
      it: { name: 'Italiano' },
      pl: { name: 'Polski' },
      'pt-br': { name: 'Português (Brasil)' },
      'pt-pt': { name: 'Português' },
      es: { name: 'Español' },
      sv: { name: 'Svenska' },
      // jhipster-needle-i18n-language-key-pipe - JHipster will add/remove languages in this object
    },
  },
  getters: {
    currentLanguage: state => state.currentLanguage,
    languages: state => state.languages,
  },
  mutations: {
    currentLanguage(state, newLanguage) {
      state.currentLanguage = newLanguage;
      localStorage.setItem('currentLanguage', newLanguage);
    },
  },
};
