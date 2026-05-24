export function AidenLogo({ size = 32 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="NeuraForge logo"
    >
      {/* Rounded square — white */}
      <rect width="512" height="512" rx="96" fill="#ffffff" stroke="#e5e7eb" strokeWidth="2" />

      {/* A shape — left leg */}
      <polygon points="256,80 148,420 200,420 256,220" fill="#e85d04" />
      {/* A shape — right leg */}
      <polygon points="256,80 364,420 312,420 256,220" fill="#d35400" />

      {/* Crossbar with gap in center */}
      <rect x="185" y="300" width="62" height="32" rx="4" fill="#e85d04" />
      <rect x="265" y="300" width="62" height="32" rx="4" fill="#d35400" />

      {/* Summit dot — the AI spark */}
      <circle cx="256" cy="72" r="16" fill="#e85d04" />
    </svg>
  );
}
