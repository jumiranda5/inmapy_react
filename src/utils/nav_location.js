
export const nav_locale = () => {

  const navLocale = navigator.language;
  const localeSplit = navLocale.split('-');
  let locale = localeSplit[0];

  if (locale !== "pt") locale = "en";

  return locale;

}
