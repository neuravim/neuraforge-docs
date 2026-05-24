import { getDictionary } from '@/i18n/dictionaries';

export interface NavItem {
  title: string;
  href: string;
  children?: NavItem[];
}

export interface NavSection {
  title: string;
  icon: string;
  items: NavItem[];
}

export function getNavigation(locale: string): NavSection[] {
  const dict = getDictionary(locale);
  const l = `/${locale}`;

  return [
    {
      title: dict.nav.getting_started,
      icon: 'rocket',
      items: [
        { title: dict.nav.installation, href: `${l}/getting-started/installation` },
        { title: dict.nav.quickstart, href: `${l}/getting-started/quickstart` },
        { title: dict.nav.first_feature, href: `${l}/getting-started/first-feature` },
      ],
    },
    {
      title: dict.nav.guides,
      icon: 'book',
      items: [
        { title: dict.nav.modes, href: `${l}/guides/modes` },
        { title: dict.nav.agents, href: `${l}/guides/agents` },
        {
          title: dict.nav.providers,
          href: `${l}/guides/providers`,
          children: [
            { title: dict.nav.claude_code, href: `${l}/guides/providers/claude-code` },
            { title: dict.nav.gemini_cli, href: `${l}/guides/providers/gemini` },
            { title: dict.nav.opencode, href: `${l}/guides/providers/opencode` },
            { title: dict.nav.codex, href: `${l}/guides/providers/codex` },
            { title: dict.nav.copilot, href: `${l}/guides/providers/copilot` },
            { title: dict.nav.custom_api, href: `${l}/guides/providers/custom-api` },
          ],
        },
        { title: dict.nav.configuration, href: `${l}/guides/configuration` },
        { title: dict.nav.rules_templates, href: `${l}/guides/rules-and-templates` },
        { title: dict.nav.skills, href: `${l}/guides/skills` },
        { title: dict.nav.troubleshooting, href: `${l}/guides/troubleshooting` },
      ],
    },
    {
      title: dict.nav.reference,
      icon: 'terminal',
      items: [
        { title: dict.nav.cli, href: `${l}/reference/cli` },
        { title: dict.nav.config, href: `${l}/reference/config` },
        { title: dict.nav.artefacts, href: `${l}/reference/artefacts` },
        { title: dict.nav.glossary, href: `${l}/reference/glossary` },
      ],
    },
    {
      title: 'Tutorial',
      icon: 'rocket',
      items: [
        { title: locale === 'fr' ? 'Le terrain de jeu' : 'The Playground', href: `${l}/tutorial/setup` },
        { title: locale === 'fr' ? 'Mode flash' : 'Flash Mode', href: `${l}/tutorial/flash` },
        { title: locale === 'fr' ? 'Mode standard' : 'Standard Mode', href: `${l}/tutorial/standard` },
        { title: locale === 'fr' ? 'Mode enterprise' : 'Enterprise Mode', href: `${l}/tutorial/enterprise` },
        { title: locale === 'fr' ? 'Boite a outils' : 'Toolbox', href: `${l}/tutorial/toolbox` },
      ],
    },
    {
      title: dict.nav.cookbook,
      icon: 'code',
      items: [
        { title: dict.nav.brownfield, href: `${l}/cookbook/brownfield` },
        { title: dict.nav.team, href: `${l}/cookbook/team` },
        { title: dict.nav.ci_cd, href: `${l}/cookbook/ci-cd` },
        { title: dict.nav.migration_bmad, href: `${l}/cookbook/migration-bmad` },
      ],
    },
  ];
}
