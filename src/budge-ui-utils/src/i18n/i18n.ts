import { getLocales } from "expo-localization";
import { I18n } from "i18n-js";
import en from "./en.json";

const translations = {
  en,
};

export const i18n = new I18n(translations);

i18n.locale = getLocales()[0].languageCode || "en";
i18n.enableFallback = true;