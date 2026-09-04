const RU_PLURAL = new Intl.PluralRules("ru-RU");

export const RUB_PLURAL_FORMS = {
  one: "рубль",
  few: "рубля",
  many: "рублей",
};

export const GRAM_PLURAL_FORMS = {
  one: "грамм",
  few: "грамма",
  many: "граммов",
};

export const pluralizeIntl = (number, forms) => {
  const category = RU_PLURAL.select(number);
  return forms[category] || forms.many || forms.other || forms.one;
};
