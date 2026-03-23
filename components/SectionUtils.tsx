
export function Section({ id, children }: { id: string, children?: React.ReactNode }) {
  return (
    <section id={id}>{children}</section>
  );
}
export function SectionHeading({ children }: { children?: React.ReactNode }) {
  return (
    <h2 className="font-bold text-2xl underline my-4">{children}</h2>
  );
}
export function SectionSubHeading({ children }: { children?: React.ReactNode }) {
  return (
    <h3 className="font-bold text-xl my-4">{children}</h3>
  );
}