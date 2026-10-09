// Reusable low-opacity gym image background for dark sections.
// Place inside a section that has `relative isolate overflow-hidden bg-base-950`.
export default function SectionBg({ img, opacity = 'opacity-40' }) {
  return (
    <>
      <img
        src={img}
        alt=""
        aria-hidden="true"
        className={`absolute inset-0 z-0 h-full w-full object-cover ${opacity}`}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-base-950/75 via-base-950/55 to-base-950/80" />
    </>
  )
}
