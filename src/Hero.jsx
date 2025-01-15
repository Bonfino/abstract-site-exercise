import { GoArrowRight } from "react-icons/go";

export default function Hero() {
  return (
    <section className="bg-[#dadbf1]">
      <div className="px-8 pt-20 pb-28 flex justify-center flex-col mx-36 items-center relative">
        <h1 className="text-7xl font-medium text-center mb-8">
          How can we help?
        </h1>
        <div className="relative w-3/5">
          <input
            className="border border-black p-4 rounded placeholder:text-lg shadow-md w-full pr-10"
            placeholder="Search"
          />
          <GoArrowRight className="absolute right-4 top-1/2 transform -translate-y-1/2 text-xl" />
        </div>
      </div>
    </section>
  );
}
