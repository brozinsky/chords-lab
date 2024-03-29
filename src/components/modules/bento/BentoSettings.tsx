import clsx from "clsx";

type TProps = {
  width?: string;
  height?: string;
};

const BentoSettings = ({ width, height }: TProps) => {
  const classes =
    "relative px-4 py-4 rounded-xl bg-transparent border-2 border-neutral-400 text-light flex flex-col items-center justify-center gap-2";
  return (
    <section id="BentoTitle" className={clsx(classes, width, height)}>
     <div>Language</div>
     <div>Settings</div>
    </section>
  );
};

export default BentoSettings;
