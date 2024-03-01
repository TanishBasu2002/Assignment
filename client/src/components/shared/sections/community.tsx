import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Community = () => {
  return (
    <div className="py-24 gap-y-10 space-y-10 bg-hero-pattern h-[862px]">
      <div className="text-center font-bold justify-center text-[60px] max-md:text-[30px]">
        <h1>YOUR TRUSTED PARTNER IN</h1>
        <h2>THE FUTURE OF HOUSING</h2>
        <p className="text-sm">
          Our partnerships with governments and local banks ensure that our
          housing prices are affordable enough for our target market.
        </p>
        <div className="space-x-9 pt-5 text-[25px] justify-between py-2 items-center p-2 gap-2 w-full">
          <Button className="ui_button">
            Join Our Community Today <ArrowRight className="text-[10px]" />
          </Button>
        </div>
      </div>
    </div>
  );
};
