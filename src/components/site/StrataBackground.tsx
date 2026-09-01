/**
 * Ambient geological environment: stratigraphic bands, a faint contour grid and
 * evolutionary branch lines. Purely decorative, fixed behind all content.
 */
export function StrataBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-background" />

      {/* strata bands */}
      <svg className="motion-strata-bands absolute inset-x-0 bottom-0 h-[62vh] w-full" preserveAspectRatio="none" viewBox="0 0 1200 600">
        <g opacity="0.5">
          <path d="M0 240 C 260 200 420 268 700 232 C 900 208 1060 250 1200 224 L1200 600 L0 600Z" fill="var(--ochre)" opacity="0.10" />
          <path d="M0 330 C 300 300 460 356 760 322 C 960 300 1080 336 1200 314 L1200 600 L0 600Z" fill="var(--amber-deep)" opacity="0.12" />
          <path d="M0 428 C 240 402 500 452 780 420 C 980 398 1100 430 1200 412 L1200 600 L0 600Z" fill="var(--olive)" opacity="0.12" />
          <path d="M0 522 C 300 500 520 540 820 516 C 1000 502 1120 526 1200 512 L1200 600 L0 600Z" fill="var(--strata)" opacity="0.14" />
        </g>
      </svg>

      {/* contour / survey grid */}
      <svg className="motion-survey-grid absolute inset-0 h-full w-full opacity-[0.14]">
        <defs>
          <pattern id="survey" width="72" height="72" patternUnits="userSpaceOnUse">
            <path d="M72 0H0V72" fill="none" stroke="var(--strata)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#survey)" />
      </svg>

      {/* evolutionary branching, top-right */}
      <svg className="motion-branching absolute -right-10 top-0 hidden h-[70vh] w-[42vw] opacity-[0.18] md:block" viewBox="0 0 400 600" fill="none">
        <g stroke="var(--strata)" strokeWidth="1">
          <path d="M40 580 C 40 420 120 400 140 300 C 158 210 220 190 250 110" />
          <path d="M140 300 C 170 280 230 288 268 240" />
          <path d="M110 380 C 150 366 196 372 238 330" />
          <path d="M182 214 C 214 200 248 206 280 176" />
          <path d="M60 480 C 100 470 132 476 166 442" />
        </g>
        <g fill="var(--ochre)">
          {[
            [250, 110],
            [268, 240],
            [238, 330],
            [280, 176],
            [166, 442],
          ].map(([cx, cy]) => (
            <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="3.5" />
          ))}
        </g>
      </svg>

      <div className="paper-grain absolute inset-0" />
    </div>
  );
}
