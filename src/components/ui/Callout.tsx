import type { ReactNode } from 'react';

type CalloutType = 'info' | 'tip' | 'warning' | 'danger';

interface CalloutProps {
  type?: CalloutType;
  title?: string;
  children: ReactNode;
}

const calloutStyles: Record<CalloutType, { color: string; bg: string; icon: string }> = {
  info: { color: 'var(--neuraforge-accent-blue)', bg: 'var(--neuraforge-accent-blue-light)', icon: 'ℹ️' },
  tip: { color: 'var(--neuraforge-accent-green)', bg: 'var(--neuraforge-accent-green-light)', icon: '💡' },
  warning: { color: 'var(--neuraforge-accent-yellow)', bg: 'var(--neuraforge-accent-yellow-light)', icon: '⚠️' },
  danger: { color: 'var(--neuraforge-accent-red)', bg: 'var(--neuraforge-accent-red-light)', icon: '🚨' },
};

const defaultTitles: Record<CalloutType, string> = {
  info: 'Information',
  tip: 'Astuce',
  warning: 'Attention',
  danger: 'Danger',
};

export function Callout({ type = 'info', title, children }: CalloutProps) {
  const style = calloutStyles[type];

  return (
    <div
      className="my-4 rounded-xl p-4"
      style={{
        background: style.bg,
        borderLeft: `3px solid ${style.color}`,
      }}
    >
      <div className="flex items-center gap-2 mb-2 font-semibold text-sm" style={{ color: style.color }}>
        <span>{style.icon}</span>
        <span>{title ?? defaultTitles[type]}</span>
      </div>
      <div className="text-sm" style={{ color: 'var(--neuraforge-text-secondary)' }}>
        {children}
      </div>
    </div>
  );
}
