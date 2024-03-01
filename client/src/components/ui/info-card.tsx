import { Card, CardBody } from "@nextui-org/react";
import w1 from "@/assets/work1.svg";
import w2 from "@/assets/work2.svg";
import w3 from "@/assets/work3.svg";
import w4 from "@/assets/work4.svg";
export const InfoCard = () => {
  return (
    <div className="justify-between w-full">
      <Card
        isBlurred
        className="text-[#071A45] border-none bg-background/60  max-w-full"
        shadow="none"
      >
        <CardBody>
          <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
            <div className="relative col-span-6 md:col-span-4">
              <img
                alt="work"
                className="object-cover"
                height="300px"
                src={`${w1}`}
                width="300px"
              />
            </div>
            <div className="flex flex-col col-span-6 md:col-span-8">
              <div className="flex justify-between items-start">
                <div className="flex flex-col gap-0">
                  <h3 className="font-semibold text-4xl">
                    Discover Your Perfect Home
                  </h3>
                  <p className="text-small ">
                    Use our advanced filters to narrow down your search. Specify
                    everything from location to amenities, ensuring you find the
                    property that feels right.
                  </p>
                  <a href="#" className="text-sm font-medium mt-2">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
      <Card
        isBlurred
        className="text-[#071A45] pt-14 border-none bg-background/60  max-w-full"
        shadow="none"
      >
        <CardBody>
          <div className="grid grid-cols-6 md:grid-cols-12 md:gap-4 !items-start !justify-start">
            <div className="flex flex-col col-span-6 md:col-span-8">
              <div className="flex justify-between items-end pt-4">
                <div className="flex flex-col text-right">
                  <h3 className="font-semibold text-4xl">
                    Showcase Your Property
                  </h3>
                  <p className="text-small ">
                    List your property with ease. Fill in detailed forms to
                    highlight every feature, attracting the perfect buyer
                    directly.
                  </p>
                  <a href="#" className="text-large font-medium mt-2">
                    Link
                  </a>
                </div>
              </div>
            </div>
            <div className="relative col-span-6 md:col-span-4">
              <img
                alt="work"
                className="object-cover"
                height="300px"
                src={`${w2}`}
                width="300px"
              />
            </div>
          </div>
        </CardBody>
      </Card>
      <Card
        isBlurred
        className="text-[#071A45] border-none bg-background/60  max-w-full"
        shadow="none"
      >
        <CardBody>
          <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
            <div className="relative col-span-6 md:col-span-4">
              <img
                alt="work"
                className="object-cover"
                height="300px"
                src={`${w3}`}
                width="300px"
              />
            </div>
            <div className="flex flex-col col-span-6 md:col-span-8">
              <div className="flex justify-between items-start">
                <div className="flex flex-col gap-0">
                  <h3 className="font-semibold text-4xl">
                    Connect and Communicate
                  </h3>
                  <p className="text-small ">
                    Our platform facilitates direct communication between buyer
                    and seller, making negotiations transparent and
                    straightforward.
                  </p>
                  <a href="#" className="text-large font-medium mt-2">
                    Link
                  </a>
                </div>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
      <Card
        isBlurred
        className="text-[#071A45] pt-14 border-none bg-background/60  max-w-full"
        shadow="none"
      >
        <CardBody>
          <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 !items-start !justify-start">
            <div className="flex flex-col col-span-6 md:col-span-8">
              <div className="flex justify-end items-end pt-4 text-right">
                <div className="flex flex-col gap-0">
                  <h3 className="font-semibold text-4xl">
                    Seal the Deal Securely
                  </h3>
                  <p className="text-small ">
                    Advance payments made safe. Secure your agreement with
                    confidence, and step closer to your dream property.
                  </p>
                  <a href="#" className="text-large font-medium mt-2">
                    Link
                  </a>
                </div>
              </div>
            </div>
            <div className="relative col-span-6 md:col-span-4">
              <img
                alt="work"
                className="object-cover"
                height="300px"
                src={`${w4}`}
                width="300px"
              />
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};
