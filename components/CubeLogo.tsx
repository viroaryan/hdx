/**
 * Pure-CSS 3D cube logo "HDX" — the small colorful spinning cube in the hero
 * top bar. No JavaScript; animation is CSS-only and flattened under
 * prefers-reduced-motion.
 */
export default function CubeLogo() {
  return (
    <span className="cube-logo" aria-hidden="true">
      <span className="cube-logo__inner">
        <span className="cube-logo__face cube-logo__face--front">HDX</span>
        <span className="cube-logo__face cube-logo__face--back" />
        <span className="cube-logo__face cube-logo__face--right" />
        <span className="cube-logo__face cube-logo__face--left" />
        <span className="cube-logo__face cube-logo__face--top" />
        <span className="cube-logo__face cube-logo__face--bottom" />
      </span>
    </span>
  );
}
