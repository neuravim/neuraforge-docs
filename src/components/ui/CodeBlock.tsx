'use client';

import { useState } from 'react';

interface CodeBlockProps {
  children: string;
  language?: string;
  filename?: string;
  highlight?: string;
}

// CSS variable references — resolved at render time per theme
const V = {
  text: 'var(--aiden-terminal-text)',
  comment: 'var(--aiden-terminal-comment)',
  keyword: 'var(--aiden-terminal-keyword)',
  shell: 'var(--aiden-terminal-shell)',
  cmd: 'var(--aiden-terminal-cmd)',
  key: 'var(--aiden-terminal-key)',
  value: 'var(--aiden-terminal-value)',
  output: 'var(--aiden-terminal-output)',
  aiden: 'var(--aiden-terminal-aiden)',
};

const SHELL_CMDS = /^(aiden|pnpm|npm|npx|node|git|cd|mkdir|ls|cat|cp|mv|rm|echo|curl|chmod|export|pip|cargo|go|docker|kubectl|gh)\b/;

function colorShellLine(line: string): React.ReactNode {
  if (line.startsWith('$ ')) {
    return (
      <>
        <span style={{ color: V.shell }}>$ </span>
        <span style={{ color: V.cmd }}>{line.slice(2)}</span>
      </>
    );
  }
  if (line.startsWith('# ')) {
    return <span style={{ color: V.comment }}>{line}</span>;
  }
  if (/^NeuraForge\s/.test(line)) {
    return <span style={{ color: V.aiden }}>{line}</span>;
  }
  if (SHELL_CMDS.test(line.trimStart())) {
    return <span style={{ color: V.cmd }}>{line}</span>;
  }
  return <span style={{ color: V.output }}>{line}</span>;
}

function colorLine(line: string, lang: string): React.ReactNode {
  if (lang === 'bash' || lang === 'sh' || lang === '' || lang === 'text') {
    return colorShellLine(line);
  }

  if (lang === 'yaml' || lang === 'yml') {
    if (line.trimStart().startsWith('#')) {
      return <span style={{ color: V.comment }}>{line}</span>;
    }
    const yamlMatch = line.match(/^(\s*)([\w.-]+)(:)(.*)/);
    if (yamlMatch) {
      return (
        <>
          {yamlMatch[1]}
          <span style={{ color: V.key }}>{yamlMatch[2]}</span>
          <span style={{ color: V.text }}>:</span>
          <span style={{ color: V.value }}>{yamlMatch[4]}</span>
        </>
      );
    }
    if (line.trimStart().startsWith('-')) {
      return <span style={{ color: V.value }}>{line}</span>;
    }
  }

  if (lang === 'js' || lang === 'javascript' || lang === 'ts' || lang === 'typescript') {
    if (line.trimStart().startsWith('//')) {
      return <span style={{ color: V.comment }}>{line}</span>;
    }
    const parts = line.split(/(const|let|var|function|return|import|export|from|require|if|else|async|await|new|class|extends|interface|type)\b/);
    if (parts.length > 1) {
      return parts.map((part, i) =>
        i % 2 === 1
          ? <span key={i} style={{ color: V.keyword }}>{part}</span>
          : <span key={i} style={{ color: V.text }}>{part}</span>
      );
    }
  }

  if (lang === 'markdown' || lang === 'md') {
    if (line.startsWith('#')) {
      return <span style={{ color: V.keyword }}>{line}</span>;
    }
    if (line.startsWith('-') || line.startsWith('*')) {
      return <span style={{ color: V.value }}>{line}</span>;
    }
  }

  if (line.trimStart().startsWith('#')) {
    return <span style={{ color: V.comment }}>{line}</span>;
  }
  if (line.trimStart().startsWith('//')) {
    return <span style={{ color: V.comment }}>{line}</span>;
  }

  return <span style={{ color: V.text }}>{line}</span>;
}

export function CodeBlock({ children, language, filename, highlight }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const lang = language ?? '';

  const handleCopy = async () => {
    await navigator.clipboard.writeText(children.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const highlightLines = highlight
    ? highlight.split(',').map((n) => parseInt(n.trim(), 10))
    : [];

  const lines = children.trim().split('\n');
  const label = filename || (lang && lang !== 'text' ? lang : '');

  return (
    <div
      className="rounded-xl overflow-hidden my-4"
      style={{ background: 'var(--aiden-terminal-bg)', border: '1px solid var(--aiden-border)' }}
    >
      <div
        className="flex items-center justify-between px-4 py-2 text-xs"
        style={{
          borderBottom: '1px solid var(--aiden-border)',
          color: V.comment,
        }}
      >
        <span>{label}</span>
        <button
          onClick={handleCopy}
          className="px-2 py-0.5 rounded text-xs transition-colors cursor-pointer"
          style={{ color: V.comment }}
        >
          {copied ? '✓ Copie' : 'Copier'}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto text-sm leading-relaxed">
        <code>
          {lines.map((line, i) => (
            <span
              key={i}
              className="block"
              style={{
                background: highlightLines.includes(i + 1)
                  ? 'rgba(232, 93, 4, 0.08)'
                  : 'transparent',
                borderLeft: highlightLines.includes(i + 1)
                  ? '2px solid var(--aiden-accent-primary)'
                  : '2px solid transparent',
                paddingLeft: '0.75rem',
              }}
            >
              {colorLine(line, lang) || ' '}
            </span>
          ))}
        </code>
      </pre>
    </div>
  );
}
