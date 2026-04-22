import SectionHeading from "../../components/shared/SectionHeading";

type UniformRow = {
  sno: string;
  boys: string;
  girls: string;
};

const uniformRows: UniformRow[] = [
  {
    sno: "1",
    boys: "Plain white shirt half sleeve /full sleeve",
    girls: "Plain white kurta/shirt.",
  },
  {
    sno: "2",
    boys: "White Trousers",
    girls: "Plain white salwar/pants.",
  },
  {
    sno: "3",
    boys: "White apron/coat.",
    girls: "White apron/coat.",
  },
  {
    sno: "4",
    boys: "Tie will be provided by the College",
    girls: "Plain white chunni.",
  },
  {
    sno: "5",
    boys: "Black shoe",
    girls: "Plain Blue Sweater",
  },
  {
    sno: "6",
    boys: "Black plain sweater/blazer in winter",
    girls: "Blouse /Blazer in winter",
  },
];

export default function CollegeUniform() {
  return (
    <section className="relative overflow-hidden px-4 py-16 md:py-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-56" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          label="College & Hostel"
          title="College Uniform"
          description="Uniform is a part of discipline, Students are expected to adhere to the code of uniform without violation."
        />

        <div className="mt-10 overflow-hidden rounded-2xl border border-dark/10 bg-white">
          <div className="overflow-x-auto">
            <table className="w-full min-w-190 border-collapse">
              <thead>
                <tr>
                  <th className="border-b border-dark/10 bg-primary/10 px-4 py-3 text-left text-xs font-bold uppercase tracking-[0.14em] text-dark">
                    S.No
                  </th>
                  <th className="border-b border-dark/10 bg-primary/10 px-4 py-3 text-left text-xs font-bold uppercase tracking-[0.14em] text-dark">
                    For Boys
                  </th>
                  <th className="border-b border-dark/10 bg-primary/10 px-4 py-3 text-left text-xs font-bold uppercase tracking-[0.14em] text-dark">
                    For Girls
                  </th>
                </tr>
              </thead>
              <tbody>
                {uniformRows.map((row) => (
                  <tr
                    key={row.sno}
                    className="align-top transition-colors duration-200 even:bg-light/50 hover:bg-primary/5"
                  >
                    <td className="border-b border-dark/10 px-4 py-4 text-sm font-semibold text-dark">
                      {row.sno}
                    </td>
                    <td className="border-b border-dark/10 px-4 py-4 text-sm text-dark/85">
                      {row.boys}
                    </td>
                    <td className="border-b border-dark/10 px-4 py-4 text-sm text-dark/85">
                      {row.girls}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
