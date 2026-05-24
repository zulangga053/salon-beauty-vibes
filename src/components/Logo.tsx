interface LogoProps {
  size?: number;
  className?: string;
  showCircle?: boolean;
}

export default function Logo({
  size = 48,
  className = "",
}: LogoProps) {
  return (
    <img
      src="/logo.svg"
      alt="Logo"
      width={size}
      height={size}
      className={`rounded-full object-cover ${className}`}
    />
  );
}
