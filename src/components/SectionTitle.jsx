const SectionTitle = ({ number, text }) => {
  return (
    <div className="relative">
      <h2 className="text-lg md:text-2xl font-mono space-x-2  mb-6  md:mb-10 before:w-20 before:h-[2px] before:bg-zinc-500 before:absolute before:left-[35%] md:before:left-[18%] before:top-4 before:z-0">
        <span className="text-zinc-300 text-sm">{number}.</span>
        <span className="text-zinc-50">{text}</span>
      </h2>
    </div>
  );
};

export default SectionTitle;
