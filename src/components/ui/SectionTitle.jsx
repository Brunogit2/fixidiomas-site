export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = "left",
}) {
  const alignment =
    align === "center"
      ? "text-center mx-auto"
      : "text-left";

  return (
    <div className={`max-w-3xl ${alignment}`}>
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
          {eyebrow}
        </p>
      )}

      <h2 className="text-4xl font-bold tracking-tight text-slate-900">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-5 text-lg leading-8 text-slate-600">
          {subtitle}
        </p>
      )}
    </div>
  );
}