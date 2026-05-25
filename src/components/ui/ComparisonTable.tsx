interface ComparisonRow {
  feature: string;
  flash: string | boolean;
  standard: string | boolean;
  enterprise: string | boolean;
}

interface ComparisonTableProps {
  rows: ComparisonRow[];
}

function CellValue({ value }: { value: string | boolean }) {
  if (typeof value === 'boolean') {
    return value ? (
      <span style={{ color: 'var(--neuraforge-accent-green)' }}>✓</span>
    ) : (
      <span style={{ color: 'var(--neuraforge-text-muted)' }}>—</span>
    );
  }
  return <span style={{ color: 'var(--neuraforge-text-secondary)' }}>{value}</span>;
}

export function ComparisonTable({ rows }: ComparisonTableProps) {
  return (
    <div className="my-6 overflow-x-auto rounded-xl" style={{ border: '1px solid var(--neuraforge-border)' }}>
      <table className="w-full text-sm">
        <thead>
          <tr style={{ background: 'var(--neuraforge-bg-secondary)' }}>
            <th className="text-left px-4 py-3 font-semibold" style={{ color: 'var(--neuraforge-text-primary)' }}>
              Fonctionnalite
            </th>
            <th className="text-center px-4 py-3 font-semibold" style={{ color: 'var(--neuraforge-accent-yellow)' }}>
              Flash
            </th>
            <th className="text-center px-4 py-3 font-semibold" style={{ color: 'var(--neuraforge-accent-primary)' }}>
              Standard
            </th>
            <th className="text-center px-4 py-3 font-semibold" style={{ color: 'var(--neuraforge-accent-purple)' }}>
              Enterprise
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              style={{ borderBottom: '1px solid var(--neuraforge-border)' }}
            >
              <td className="px-4 py-3" style={{ color: 'var(--neuraforge-text-secondary)' }}>
                {row.feature}
              </td>
              <td className="px-4 py-3 text-center"><CellValue value={row.flash} /></td>
              <td className="px-4 py-3 text-center"><CellValue value={row.standard} /></td>
              <td className="px-4 py-3 text-center"><CellValue value={row.enterprise} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
