interface GeometricPatternProps {
  className?: string
  variant?: "primary" | "secondary" | "accent"
}

export function GeometricPattern({ className = "", variant = "primary" }: GeometricPatternProps) {
  const colors = {
    primary: "fill-primary",
    secondary: "fill-secondary",
    accent: "fill-accent",
  }

  return (
    <svg
      className={`w-16 h-16 ${colors[variant]} ${className}`}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="32" cy="32" r="30" className="fill-current opacity-20" />
      <path d="M32 8 L48 24 L32 40 L16 24 Z" className="fill-current opacity-60" />
      <path d="M32 16 L40 24 L32 32 L24 24 Z" className="fill-current opacity-80" />
      <circle cx="32" cy="32" r="6" className="fill-current" />
    </svg>
  )
}
