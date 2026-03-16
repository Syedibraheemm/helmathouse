import PageHeading from "@/components/PageHeading";

const sizeRows = [
  { size: "Small", cm: "55 - 56 cm", inch: "21.6 - 22.0 in" },
  { size: "Medium", cm: "57 - 58 cm", inch: "22.4 - 22.8 in" },
  { size: "Large", cm: "59 - 60 cm", inch: "23.2 - 23.6 in" },
  { size: "XL", cm: "61 - 62 cm", inch: "24.0 - 24.4 in" }
];

export const metadata = {
  title: "Size Guide | Helmet House",
  description: "Helmet sizing chart and measuring guide."
};

export default function SizeGuidePage() {
  return (
    <section className="py-20">
      <div className="section-wrap">
        <PageHeading
          title="Size Guide"
          subtitle="Measure around the widest part of your head, just above the eyebrows."
        />

        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-surface">
            <table className="w-full border-collapse text-left">
              <thead className="bg-white/[0.03]">
                <tr>
                  <th className="px-6 py-4 text-sm font-medium text-textSecondary">Size</th>
                  <th className="px-6 py-4 text-sm font-medium text-textSecondary">CM</th>
                  <th className="px-6 py-4 text-sm font-medium text-textSecondary">INCH</th>
                </tr>
              </thead>
              <tbody>
                {sizeRows.map((row) => (
                  <tr key={row.size} className="border-t border-white/10">
                    <td className="px-6 py-4 text-sm">{row.size}</td>
                    <td className="px-6 py-4 text-sm text-textSecondary">{row.cm}</td>
                    <td className="px-6 py-4 text-sm text-textSecondary">{row.inch}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-6">
            <h2 className="text-xl font-semibold">Head Measurement</h2>
            <p className="mt-3 text-sm text-textSecondary">
              Keep tape level and snug for accurate helmet fit.
            </p>
            <div className="relative mt-7 flex h-[220px] items-center justify-center">
              <div className="relative h-40 w-40 rounded-full border-2 border-white/20">
                <div className="absolute left-1/2 top-4 h-24 w-20 -translate-x-1/2 rounded-b-[40px] rounded-t-[35px] border border-white/20" />
                <div className="absolute left-1/2 top-9 h-1 w-[190px] -translate-x-1/2 rounded-full bg-glow/90 shadow-glow" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
