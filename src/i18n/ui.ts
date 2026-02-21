export const languages = {
  en: 'English',
  zh: '中文',
} as const;

export const defaultLang = 'en' as const;

export type Lang = keyof typeof languages;

export const ui = {
  en: {
    'site.title': 'Egg Product Export Inquiry',
    'site.description': 'Market intelligence platform for Chinese egg product exporters',
    'nav.home': 'Home',
    'nav.markets': 'Markets',
    'nav.guides': 'Guides',
    'nav.hscodes': 'HS Codes',
    'hero.title': 'China Egg Product Export Intelligence',
    'hero.subtitle': 'Navigate export regulations, market access requirements, and compliance pathways for egg products from China.',
    'home.markets.title': 'Market Overview',
    'home.markets.subtitle': 'Quick view of market access status across key export destinations.',
    'home.guides.title': 'Compliance Guides',
    'home.guides.subtitle': 'Step-by-step regulatory and compliance walkthroughs.',
    'home.about.title': 'About This Platform',
    'home.about.text': 'This platform helps Chinese egg product manufacturers and exporters understand market access requirements, regulatory frameworks, and compliance pathways for key export destinations.',
    'markets.title': 'Export Markets',
    'markets.subtitle': 'Market access status and requirements for Chinese egg product exports.',
    'guides.title': 'Compliance Guides',
    'guides.subtitle': 'Regulatory walkthroughs and compliance documentation.',
    'status.open': 'Open',
    'status.restricted': 'Restricted',
    'status.closed': 'Closed',
    'footer.disclaimer': 'This platform provides general guidance only. Always verify requirements with official regulatory authorities before exporting.',
    'footer.copyright': '© 2026 Egg Product Export Inquiry. All rights reserved.',
    'lang.switch': '中文',
    'readmore': 'Read more',
    'back.markets': '← Back to Markets',
    'back.guides': '← Back to Guides',
    'hscodes.title': 'HS Codes Reference',
    'hscodes.subtitle': 'Harmonized System codes for egg products commonly exported from China.',
    'hscodes.code': 'HS Code',
    'hscodes.description': 'Description',
    'hscodes.commercial': 'Commercial Name',
  },
  zh: {
    'site.title': '蛋品出口查询平台',
    'site.description': '中国蛋品生产商出口市场情报平台',
    'nav.home': '首页',
    'nav.markets': '市场',
    'nav.guides': '指南',
    'nav.hscodes': 'HS编码',
    'hero.title': '中国蛋品出口情报',
    'hero.subtitle': '导航出口法规、市场准入要求和蛋品合规路径。',
    'home.markets.title': '市场概览',
    'home.markets.subtitle': '主要出口目的地的市场准入状态快速查看。',
    'home.guides.title': '合规指南',
    'home.guides.subtitle': '逐步法规和合规操作指引。',
    'home.about.title': '关于本平台',
    'home.about.text': '本平台帮助中国蛋品生产商和出口商了解主要出口目的地的市场准入要求、法规框架和合规路径。',
    'markets.title': '出口市场',
    'markets.subtitle': '中国蛋品出口的市场准入状态和要求。',
    'guides.title': '合规指南',
    'guides.subtitle': '法规操作指引和合规文件说明。',
    'status.open': '开放',
    'status.restricted': '受限',
    'status.closed': '关闭',
    'footer.disclaimer': '本平台仅提供一般性指导，出口前请务必向官方监管机构核实具体要求。',
    'footer.copyright': '© 2026 蛋品出口查询平台 版权所有',
    'lang.switch': 'English',
    'readmore': '查看详情',
    'back.markets': '← 返回市场列表',
    'back.guides': '← 返回指南列表',
    'hscodes.title': 'HS编码参考',
    'hscodes.subtitle': '中国常见出口蛋品的协调制度编码。',
    'hscodes.code': 'HS编码',
    'hscodes.description': '描述',
    'hscodes.commercial': '商品名称',
  },
} as const;

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export function getLocalizedPath(path: string, lang: Lang): string {
  // Remove any existing locale prefix
  const cleanPath = path.replace(/^\/(en|zh)/, '');
  return `/${lang}${cleanPath || '/'}`;
}
