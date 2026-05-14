// i18n 这里仅示例词包设置和管理, 语种设置不在子应用中进行
import { I18n } from "@lovrabet/i18n";
import locales from "../locales";

const $i18n = new I18n({
  locale: locales,
});

export { $i18n };
