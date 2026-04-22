import SectionHeading from "./SectionHeading";

type MessagePanelProps = {
  heading: string;
  name: string;
  role: string;
  imageSrc: string;
  imageAlt: string;
  message: string[];
};

export default function MessagePanel({
  heading,
  name,
  role,
  imageSrc,
  imageAlt,
  message,
}: MessagePanelProps) {
  return (
    <section className="relative overflow-hidden px-4 py-16 md:py-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-56" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading label="Message" title={heading} />

        <article className="mt-10 grid gap-8 rounded-3xl border border-primary/15 bg-white p-5 shadow-[0_14px_35px_rgba(26,26,26,0.08)] md:grid-cols-[320px_minmax(0,1fr)] md:gap-10 md:p-8">
          <aside>
            <div className="overflow-hidden rounded-2xl border border-primary/20 bg-primary/5">
              <img
                src={imageSrc}
                alt={imageAlt}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-4">
              <h2 className="text-xl font-bold text-dark">{name}</h2>
              <p className="mt-1 text-sm font-medium text-dark/75">{role}</p>
            </div>
          </aside>

          <div className="space-y-4 text-sm leading-relaxed text-dark/85 md:text-base">
            {message.map((paragraph, idx) => (
              <p key={`${name}-message-${idx}`}>{paragraph}</p>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
