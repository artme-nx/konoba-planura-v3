type RevealProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  y?: number;
  as?: keyof React.JSX.IntrinsicElements;
};

/**
 * Entrance animation — plain CSS `@keyframes` (see .reveal-on-mount in
 * globals.css), not GSAP ScrollTrigger and not an IntersectionObserver.
 *
 * Both scroll-linked alternatives were tried and rejected: ScrollTrigger
 * computes trigger start/end from layout at creation time, and this page's
 * async remote photography shifts that layout afterwards, leaving sections
 * stuck at opacity: 0. IntersectionObserver avoids that specific problem
 * but is still tied to real scroll/paint timing, which an automated
 * full-page screenshot tool can outrun, again capturing blank sections.
 *
 * A CSS animation runs automatically on paint regardless of JS, scroll
 * position, or how fast something scrolls past it, and finishes in under a
 * second — so it can never be "caught" mid-hidden the way both scroll-tied
 * approaches could. No JavaScript is required for content to end up fully
 * visible, and this needs no "use client" directive.
 */
export function Reveal({
  children,
  className,
  style,
  delay = 0,
  y = 24,
  as: Tag = "div",
}: RevealProps) {
  const Component = Tag as React.ElementType;
  return (
    <Component
      className={`reveal-on-mount ${className ?? ""}`}
      style={
        {
          ...style,
          "--reveal-delay": `${delay}s`,
          "--reveal-y": `${y}px`,
        } as React.CSSProperties
      }
    >
      {children}
    </Component>
  );
}
