type BadgeVariant =
  | 'flash' | 'standard' | 'enterprise'
  | 'lead' | 'analyst' | 'planner' | 'dev' | 'qa' | 'docops'
  | 'claude' | 'gemini' | 'copilot';

interface BadgeProps {
  variant: BadgeVariant;
  children?: string;
}

const badgeColors: Record<BadgeVariant, { bg: string; color: string }> = {
  flash: { bg: 'var(--neuraforge-accent-yellow-light)', color: 'var(--neuraforge-accent-yellow)' },
  standard: { bg: 'var(--neuraforge-accent-blue-light)', color: 'var(--neuraforge-accent-blue)' },
  enterprise: { bg: 'var(--neuraforge-accent-purple-light)', color: 'var(--neuraforge-accent-purple)' },
  lead: { bg: 'var(--neuraforge-accent-yellow-light)', color: 'var(--neuraforge-accent-yellow)' },
  analyst: { bg: 'var(--neuraforge-accent-blue-light)', color: 'var(--neuraforge-accent-blue)' },
  planner: { bg: 'var(--neuraforge-accent-blue-light)', color: 'var(--neuraforge-accent-blue)' },
  dev: { bg: 'var(--neuraforge-accent-green-light)', color: 'var(--neuraforge-accent-green)' },
  qa: { bg: 'var(--neuraforge-accent-red-light)', color: 'var(--neuraforge-accent-red)' },
  docops: { bg: 'var(--neuraforge-bg-secondary)', color: 'var(--neuraforge-text-muted)' },
  claude: { bg: 'var(--neuraforge-accent-primary-light)', color: 'var(--neuraforge-accent-primary)' },
  gemini: { bg: 'var(--neuraforge-accent-blue-light)', color: 'var(--neuraforge-accent-blue)' },
  copilot: { bg: 'var(--neuraforge-bg-secondary)', color: 'var(--neuraforge-text-muted)' },
};

const defaultLabels: Record<BadgeVariant, string> = {
  flash: 'Flash', standard: 'Standard', enterprise: 'Enterprise',
  lead: 'Lead', analyst: 'Analyst', planner: 'Planner', dev: 'Dev', qa: 'QA', docops: 'DocOps',
  claude: 'Claude Code', gemini: 'Gemini', copilot: 'Copilot',
};

export function Badge({ variant, children }: BadgeProps) {
  const style = badgeColors[variant];
  return (
    <span
      className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium font-mono"
      style={{ background: style.bg, color: style.color }}
    >
      {children ?? defaultLabels[variant]}
    </span>
  );
}
