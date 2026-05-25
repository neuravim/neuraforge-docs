export function NeuraForgeLogo({ size = 32 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="NeuraForge logo"
    >
      <defs>
        <linearGradient id="nf-bg" x1="80" y1="48" x2="448" y2="464" gradientUnits="userSpaceOnUse">
          <stop stopColor="#111827" />
          <stop offset="1" stopColor="#020617" />
        </linearGradient>
        <linearGradient id="nf-forge" x1="136" y1="88" x2="384" y2="424" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fbbf24" />
          <stop offset="0.48" stopColor="#f97316" />
          <stop offset="1" stopColor="#dc2626" />
        </linearGradient>
        <filter id="nf-glow" x="72" y="48" width="368" height="416" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feGaussianBlur stdDeviation="10" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <rect width="512" height="512" rx="104" fill="url(#nf-bg)" />
      <path d="M96 384h320l-28 56H124l-28-56Z" fill="#1f2937" stroke="#475569" strokeWidth="10" strokeLinejoin="round" />
      <path d="M154 392h204l34-70H120l34 70Z" fill="#334155" stroke="#64748b" strokeWidth="10" strokeLinejoin="round" />
      <g filter="url(#nf-glow)">
        <path d="M144 330V124h58l108 136V124h58v206h-58L202 194v136h-58Z" fill="url(#nf-forge)" />
        <path d="M144 330V124h58l108 136V124h58v206h-58L202 194v136h-58Z" stroke="#fed7aa" strokeOpacity="0.75" strokeWidth="10" strokeLinejoin="round" />
      </g>
      <path d="M256 54l15 34 37 4-28 24 8 36-32-19-32 19 8-36-28-24 37-4 15-34Z" fill="#fbbf24" />
      <circle cx="406" cy="126" r="12" fill="#fb923c" />
      <circle cx="112" cy="176" r="9" fill="#f97316" />
      <path d="M395 201l28-18M103 273l-31 8M357 78l18-30M156 78l-18-30" stroke="#fb923c" strokeWidth="12" strokeLinecap="round" />
    </svg>
  );
}
