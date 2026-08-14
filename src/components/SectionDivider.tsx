/**
 * SectionDivider — A thin SVG geometric rule used to create architectural
 * separation between sections. Renders a 1px diagonal cross-rule in Muted Sage
 * at low opacity. Purely decorative, aria-hidden.
 */
export default function SectionDivider() {
  return (
    <div className="w-full h-10 overflow-hidden relative bg-[#171918]" aria-hidden="true">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 40"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Thin diagonal architectural rule — left to right */}
        <line
          x1="0"
          y1="40"
          x2="1440"
          y2="0"
          stroke="#8E9B8C"
          strokeWidth="0.75"
          strokeOpacity="0.2"
        />
        {/* Second crossing line for a subtle architectural mark */}
        <line
          x1="640"
          y1="0"
          x2="800"
          y2="40"
          stroke="#8E9B8C"
          strokeWidth="0.75"
          strokeOpacity="0.15"
        />
      </svg>
    </div>
  );
}
