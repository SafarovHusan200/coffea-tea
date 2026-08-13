export default function BrandIllustration({ variant = "cup", className = "" }) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-linear-to-b from-[#BE5B36]/10 to-[#BE5B36]/22" />
      <svg
        viewBox="0 0 400 400"
        className="absolute inset-0 h-full w-full"
        fill="none"
      >
        {variant === "cup" ? (
          <g>
            <ellipse cx="200" cy="292" rx="100" ry="14" fill="#211C15" opacity="0.08" />
            <path
              d="M148 182 L158 272 Q158 292 178 292 L222 292 Q242 292 242 272 L252 182 Z"
              fill="#F5F0E6"
              stroke="#211C15"
              strokeWidth="6"
              strokeLinejoin="round"
            />
            <ellipse cx="200" cy="182" rx="52" ry="13" fill="#EFE7D6" stroke="#211C15" strokeWidth="6" />
            <path
              d="M252 197 Q292 197 292 227 Q292 257 252 253"
              fill="none"
              stroke="#211C15"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <path
              d="M178 148 Q168 128 178 108 Q188 88 178 68"
              fill="none"
              stroke="#BE5B36"
              strokeWidth="5"
              strokeLinecap="round"
              opacity="0.6"
            />
            <path
              d="M200 155 Q190 135 200 115 Q210 95 200 75"
              fill="none"
              stroke="#BE5B36"
              strokeWidth="5"
              strokeLinecap="round"
              opacity="0.45"
            />
            <path
              d="M222 148 Q212 128 222 108 Q232 88 222 68"
              fill="none"
              stroke="#BE5B36"
              strokeWidth="5"
              strokeLinecap="round"
              opacity="0.6"
            />
            <g transform="translate(312 306) rotate(24)">
              <ellipse cx="0" cy="0" rx="17" ry="23" fill="#BE5B36" opacity="0.16" stroke="#BE5B36" strokeWidth="3" />
              <path d="M0 -20 Q6 0 0 20" stroke="#BE5B36" strokeWidth="3" fill="none" strokeLinecap="round" />
            </g>
          </g>
        ) : (
          <g>
            <ellipse cx="200" cy="300" rx="112" ry="16" fill="#211C15" opacity="0.08" />
            <rect
              x="130"
              y="150"
              width="140"
              height="140"
              rx="18"
              fill="#F5F0E6"
              stroke="#211C15"
              strokeWidth="6"
            />
            <circle cx="200" cy="220" r="46" fill="#EFE7D6" stroke="#211C15" strokeWidth="6" />
            <circle cx="200" cy="220" r="20" fill="none" stroke="#BE5B36" strokeWidth="5" opacity="0.6" />
            <path
              d="M130 190 L104 176"
              stroke="#211C15"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <path
              d="M270 190 L296 176"
              stroke="#211C15"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <g transform="translate(120 320) rotate(-18)">
              <ellipse cx="0" cy="0" rx="15" ry="20" fill="#BE5B36" opacity="0.16" stroke="#BE5B36" strokeWidth="3" />
              <path d="M0 -17 Q5 0 0 17" stroke="#BE5B36" strokeWidth="3" fill="none" strokeLinecap="round" />
            </g>
            <g transform="translate(276 328) rotate(14)">
              <ellipse cx="0" cy="0" rx="15" ry="20" fill="#5F7A57" opacity="0.16" stroke="#5F7A57" strokeWidth="3" />
              <path d="M0 -17 Q5 0 0 17" stroke="#5F7A57" strokeWidth="3" fill="none" strokeLinecap="round" />
            </g>
          </g>
        )}
      </svg>
    </div>
  );
}
