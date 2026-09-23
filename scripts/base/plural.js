const ruPlural = new Intl.PluralRules("ru-RU");

export const RUB_PLURAL_FORMS = {
  one: "рубль",
  few: "рубля",
  many: "рублей",
  other: "рубля",
};

export const GRAM_PLURAL_FORMS = {
  one: "грамм",
  few: "грамма",
  many: "граммов",
  other: "грамма",
};

export const pluralize = (number, pluralForms) => {
  const category = ruPlural.select(number);
  return pluralForms[category] ?? pluralForms.many;
};
