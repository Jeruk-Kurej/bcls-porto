// Ten wave periods across the viewBox, so sliding the 200%-wide SVG by half its width loops seamlessly.
const PERIODS = 10;
const PERIOD_WIDTH = 320;
const WIDTH = PERIODS * PERIOD_WIDTH;

const wavePath = (baseline: number, amplitude: number) =>
  `M0 ${baseline} q${PERIOD_WIDTH / 4} ${-amplitude * 2} ${PERIOD_WIDTH / 2} 0` +
  ` t${PERIOD_WIDTH / 2} 0`.repeat(PERIODS * 2 - 1);

/** Decorative water surface drawn on the top edge of the footer. */
export const Waterline = () => {
  return (
    <div className="waterline" aria-hidden="true">
      <svg viewBox={`0 0 ${WIDTH} 28`} preserveAspectRatio="none">
        <path d={wavePath(9, 4)} fill="none" stroke="var(--color-tide)" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
      </svg>
      <svg viewBox={`0 0 ${WIDTH} 28`} preserveAspectRatio="none">
        <path d={`${wavePath(19, 5)} V28 H0 Z`} fill="var(--color-depth)" />
      </svg>
    </div>
  );
};
