interface BouncingButtonProps {
  buttonText: string;
  className?: string;
}

export default function BouncingButton({
  buttonText,
  className,
}: BouncingButtonProps) {
  return (
    <button className={`bg-blue p-4 rounded animate-bounce ${className}`}>
      <h2 className="text-white font-semibold">{buttonText}</h2>
    </button>
  );
}
