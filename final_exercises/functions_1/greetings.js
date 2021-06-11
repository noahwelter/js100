function greet(lang, reg) {
  let greetList = {
    en: {US: 'Hey!', GB: 'Hello!', AU: 'Howdy!', default: 'Hi!'},
    fr: {default: 'Salut!'},
    pt: {default: 'Olá'},
    de: {default: 'Hallo!'}
  };

  return greetList[lang][reg] ? greetList[lang][reg] : greetList[lang]['default'];
}

function extractLanguage(locale) {
  return locale.slice(0, 2);
}

function extractRegion(locale) {
  return locale.slice(3, 5);
}

function localGreet(locale) {
  let lang = extractLanguage(locale);
  let reg = extractRegion(locale);

  console.log(greet(lang, reg));
}