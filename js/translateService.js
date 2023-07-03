(function (window, LANG_EN_TRANS, LANG_VI_TRANS) {
  class TranslateService {

    // inject our translations
    constructor(translations) {
        this._currentLang = "";
        this._translations = translations;
    }

    get currentLang() {
      return this._currentLang;
    }

    setCurrentLang(language) {
      this._currentLang = language;
    }

    /**
     *
     * @param {string} lang
     */
    use(lang) {
      // set current language
      // console.log('setLang='+lang);
      this._currentLang = lang;
    }

    /**
     *
     * @param {string} key
     * @returns string
     */
    translate(key) {
      // private perform translation
      let translation = key;
      // if(key=='test'){
      //     console.log('key='+key+ '|this.currentLang='+this.currentLang+"|typeof this._translations="+(typeof this._translations)+"|this._translations[this.currentLang]="+this._translations['LANG_EN_NAME'][key]+this._translations[this.currentLang]);
      //     Object.keys(this._translations).forEach(key => console.log(key));
      // }
      var curr_lang = "";
      if (this.currentLang == "en") curr_lang = "LANG_EN_NAME";
      else if (this.currentLang == "vi" || this.currentLang == "")
        curr_lang = "LANG_VI_NAME";
      if (this._translations[curr_lang] && this._translations[curr_lang][key]) {
        return this._translations[curr_lang][key];
      }

      return translation;
    }

    /**
     *
     * @param {string} key
     * @returns string
     */
    instant(key) {
      // call translation
      return this.translate(key);
    }
  }

  const dictionary = {
    'LANG_EN_NAME': LANG_EN_TRANS,
    'LANG_VI_NAME': LANG_VI_TRANS,
    };


  window.TranslateService = new TranslateService(dictionary);

  return {
    TranslateService,
  };
})(window, LANG_EN_TRANS, LANG_VI_TRANS);
