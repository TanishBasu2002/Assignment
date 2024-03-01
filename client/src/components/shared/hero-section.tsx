import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";
import { ArrowRight } from "lucide-react";
import hero from "../../assets/hero.svg";
import { Work } from "./sections/work";
import { Choosing } from "./sections/choosing";
import { Community } from "./sections/community";
export const Hero = () => {
  return (
    <ScrollArea className="pt-10">
      <div className="text-center font-bold justify-center text-[60px] max-md:text-[30px]">
        <h1>CONNECTING DREAMS TO REALITY</h1>
        <h2 className="text-[#2C8FB5]">YOUR PREMIER</h2>
        <h2>REAL ESTATE MARKETPLACE</h2>
        <p className="text-sm">Where every search ends with a home</p>
        <div className="space-x-9 pt-5 text-[25px] justify-between py-2 items-center p-2 gap-2 w-full">
          <Button className="ui_button">
            Find Your Home <ArrowRight className="text-[10px]" />
          </Button>
          <Button className="ui_button">
            List Your Property <ArrowRight className="text-[10px]" />
          </Button>
        </div>
        <img src={hero} alt="image" className="h-[815px] w-[1440px] pt-24" />
        <div className="space-y-24">
          <Work />
          <Choosing />
          <Community />
        </div>
      </div>
    </ScrollArea>
  );
};
