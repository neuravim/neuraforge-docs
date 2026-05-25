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
        <linearGradient id="nf-mark" x1="104" y1="96" x2="408" y2="416" gradientUnits="userSpaceOnUse">
          <stop stopColor="#38bdf8" />
          <stop offset="0.48" stopColor="#8b5cf6" />
          <stop offset="1" stopColor="#f97316" />
        </linearGradient>
        <linearGradient id="nf-core" x1="196" y1="156" x2="316" y2="356" gradientUnits="userSpaceOnUse">
          <stop stopColor="#f8fafc" />
          <stop offset="1" stopColor="#cbd5e1" />
        </linearGradient>
      </defs>
      <rect width="512" height="512" rx="112" fill="#0f172a" />
      <path
        d="M256 72 414 164v184L256 440 98 348V164L256 72Z"
        fill="#111827"
        stroke="url(#nf-mark)"
        strokeWidth="28"
        strokeLinejoin="round"
      />
      <path
        d="M176 342V170h46l116 172h-48L222 240v102h-46Z"
        fill="url(#nf-core)"
      />
      <path
        d="M290 170h46v172h-46V170Z"
        fill="url(#nf-core)"
      />
      <path
        d="M120 164 256 244l136-80M256 244v156"
        stroke="url(#nf-mark)"
        strokeWidth="18"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.9"
      />
      <circle cx="256" cy="244" r="22" fill="#0f172a" stroke="#f8fafc" strokeWidth="10" />
    </svg>
  );
}
