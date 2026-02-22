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
    'footer.legal': 'Disclaimer',
    'legal.title': 'Legal Disclaimer',
    'legal.lastUpdated': 'Last updated: February 2026',
    'legal.disclaimer.general': 'The information provided on this platform is for general informational purposes only. It does not constitute professional trade, legal, regulatory, or export compliance advice.',
    'legal.disclaimer.accuracy': 'While we strive to keep information accurate and up-to-date, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, or suitability of the information contained on this platform.',
    'legal.disclaimer.professional': 'You should always consult with qualified trade compliance professionals, customs brokers, and relevant regulatory authorities before making any export decisions. Reliance on any information provided by this platform is strictly at your own risk.',
    'legal.disclaimer.links': 'This platform may contain links to external websites operated by government agencies and regulatory bodies. We have no control over the content or availability of those sites and accept no responsibility for them.',
    'legal.disclaimer.changes': 'Export regulations, tariff schedules, and market access requirements are subject to change without notice. Information on this platform may not reflect the most recent regulatory updates. Always verify current requirements with official sources before exporting.',
    'legal.section.general': 'General Information',
    'legal.section.accuracy': 'Accuracy of Information',
    'legal.section.professional': 'No Professional Advice',
    'legal.section.links': 'External Links',
    'legal.section.changes': 'Regulatory Changes',
    'notFound.title': 'Page Not Found',
    'notFound.heading': '404',
    'notFound.message': 'The page you are looking for does not exist or has been moved.',
    'notFound.backHome': 'Back to Home',
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
    'footer.legal': '免责声明',
    'legal.title': '法律免责声明',
    'legal.lastUpdated': '最后更新：2026年2月',
    'legal.disclaimer.general': '本平台提供的信息仅供一般参考之用，不构成专业贸易、法律、监管或出口合规建议。',
    'legal.disclaimer.accuracy': '尽管我们努力保持信息的准确性和时效性，但我们对本平台所含信息的完整性、准确性、可靠性或适用性不作任何明示或暗示的陈述或保证。',
    'legal.disclaimer.professional': '在做出任何出口决策之前，您应始终咨询合格的贸易合规专业人员、报关行和相关监管机构。依赖本平台提供的任何信息，风险由您自行承担。',
    'legal.disclaimer.links': '本平台可能包含指向政府机构和监管机构运营的外部网站的链接。我们无法控制这些网站的内容或可用性，也不对其承担任何责任。',
    'legal.disclaimer.changes': '出口法规、关税税则和市场准入要求可能随时变更，恕不另行通知。本平台上的信息可能未反映最新的法规更新。出口前请务必向官方来源核实当前要求。',
    'legal.section.general': '一般信息',
    'legal.section.accuracy': '信息准确性',
    'legal.section.professional': '非专业建议',
    'legal.section.links': '外部链接',
    'legal.section.changes': '法规变更',
    'notFound.title': '页面未找到',
    'notFound.heading': '404',
    'notFound.message': '您查找的页面不存在或已被移动。',
    'notFound.backHome': '返回首页',
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
