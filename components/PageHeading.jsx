export default function PageHeading({ title, subtitle }) {
  return (
    <div className="mb-10">
      <div className="neon-line mb-5" />
      <h1 className="text-4xl font-bold sm:text-5xl">{title}</h1>
      {subtitle && <p className="mt-4 max-w-2xl text-textSecondary">{subtitle}</p>}
    </div>
  );
}
