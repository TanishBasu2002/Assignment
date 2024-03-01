import { VerticalTimeLine } from "@/components/ui/vertical-timeline";

export const Work = () => {
  return (
    <div className="py-24 items-center text-center">
      <h1 className="font-bold justify-center text-[60px] max-md:text-[30px]">
        HOW IT WORKS?
      </h1>
      <p className="text-sm">Step by Step Guide</p>
      <div className="px-16">
        <VerticalTimeLine />
      </div>
    </div>
  );
};
