// Subtle animated glow orbs + grid for the dark/red theme.
export default function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(225,29,42,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(225,29,42,0.12) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      {/* Glow orbs */}
      <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-accent/20 blur-3xl animate-float" />
      <div
        className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-accent-dark/20 blur-3xl animate-float"
        style={{ animationDelay: '2s' }}
      />
      <div
        className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-accent/10 blur-3xl animate-float"
        style={{ animationDelay: '4s' }}
      />
    </div>
  )
}
