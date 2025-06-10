export default function ArrowUpBox({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M42 0H8C3.58172 0 0 3.58172 0 8V42C0 46.4183 3.58172 50 8 50H42C46.4183 50 50 46.4183 50 42V8C50 3.58172 46.4183 0 42 0Z"
        fill="url(#paint0_linear_2091_128)"
      />
      <path
        d="M23.6284 14.0225L35.978 26.3721L37.3505 24.9996L25.0009 12.65L23.6284 14.0225Z"
        fill="white"
      />
      <path
        d="M25 12.6509L12.6504 25.0005L14.0229 26.373L26.3725 14.0234L25 12.6509Z"
        fill="white"
      />
      <path
        d="M24.0312 15.1298V36.1978H25.9692V15.1298H24.0312Z"
        fill="white"
      />
      <defs>
        <linearGradient
          id="paint0_linear_2091_128"
          x1="25"
          y1="0"
          x2="25"
          y2="50"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0086FF" />
          <stop offset="1" stopColor="#0086FF" />
        </linearGradient>
      </defs>
    </svg>
  );
}
