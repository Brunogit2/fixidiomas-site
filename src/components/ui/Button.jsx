export default function Button({
  href,
  children,
  variant = "primary",
}) {
  const styles = {
    primary:
      "bg-red-800 text-white hover:bg-red-900",

    secondary:
      "border border-slate-300 bg-white text-slate-900 hover:bg-slate-100",

    light:
      "bg-white text-red-800 hover:bg-slate-100",
  };

  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-7 py-3 font-semibold transition-all duration-300 ${styles[variant]}`}
    >
      {children}
    </a>
  );
}