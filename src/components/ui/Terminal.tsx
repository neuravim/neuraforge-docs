'use client';

interface TerminalProps {
  children: string;
  title?: string;
}

export function Terminal({ children, title }: TerminalProps) {
  const lines = children.trim().split('\n');

  return (
    <div
      className="rounded-xl overflow-hidden my-4 font-mono"
      style={{
        background: 'var(--neuraforge-terminal-bg)',
        border: '1px solid var(--neuraforge-border)',
        boxShadow: 'var(--neuraforge-shadow)',
      }}
    >
      <div
        className="flex items-center gap-2 px-4 py-2.5"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
      >
        <span className="w-3 h-3 rounded-full" style={{ background: '#ff5f57' }} />
        <span className="w-3 h-3 rounded-full" style={{ background: '#febc2e' }} />
        <span className="w-3 h-3 rounded-full" style={{ background: '#28c840' }} />
        {title && (
          <span className="ml-2 text-xs" style={{ color: '#7f8ea3' }}>
            {title}
          </span>
        )}
      </div>
      <div className="p-4 text-sm leading-relaxed overflow-x-auto">
        {lines.map((line, i) => (
          <div key={i}>
            {line.startsWith('$ ') ? (
              <>
                <span style={{ color: 'var(--neuraforge-terminal-shell)' }}>$ </span>
                <span style={{ color: 'var(--neuraforge-terminal-cmd)' }}>
                  {line.slice(2)}
                </span>
              </>
            ) : line.startsWith('NeuraForge ') ? (
              <span style={{ color: 'var(--neuraforge-terminal-neuraforge)' }}>{line}</span>
            ) : (
              <span style={{ color: 'var(--neuraforge-terminal-output)' }}>{line || ' '}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
