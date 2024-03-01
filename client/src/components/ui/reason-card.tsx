import box from "@/assets/box.svg";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";

export const ReasonCard = () => {
  return (
    <div className="px-2 gap-2 grid grid-cols-2 sm:grid-cols-4">
      <Card
        shadow="none"
        isPressable
        onPress={() => console.log("item pressed")}
        className="bg-transparent border-l-1 border-l-slate-600 rounded-md h-[400px]"
      >
        <CardHeader className="text-5xl font-medium text-[#071A45]">
          <h1>01</h1>
        </CardHeader>
        <CardBody className="overflow-visible p-4 text-[#071A45]">
          <h4 className="text-3xl gap-y-5">Search and Filters</h4>
          <img src={box} alt="" className="h-[16px] w-[16px]" />
        </CardBody>
        <CardFooter className="text-small text-slate-500">
          <p className="justify-start">
            Tailored Searches to meet your needs. Find what you’re looking for
            with precision.
          </p>
        </CardFooter>
      </Card>
      <Card
        shadow="none"
        isPressable
        onPress={() => console.log("item pressed")}
        className="bg-transparent border-l-1 border-l-slate-600 rounded-md h-[400px]"
      >
        <CardHeader className="text-5xl font-medium text-[#071A45]">
          02
        </CardHeader>
        <CardBody className="overflow-visible p-4 text-[#071A45]">
          <h4 className="text-3xl gap-y-5">Detailed Listings</h4>
          <img src={box} alt="" className="h-[16px] w-[16px]" />
        </CardBody>
        <CardFooter className="text-small text-slate-500">
          <p className="justify-start">
            Every Detail Matters. Sellers can list, and buyers can explore
            properties that meet their exact specifications.
          </p>
        </CardFooter>
      </Card>
      <Card
        shadow="none"
        isPressable
        onPress={() => console.log("item pressed")}
        className="bg-transparent border-l-1 border-l-slate-600 rounded-md h-[400px]"
      >
        <CardHeader className="text-5xl font-medium text-[#071A45]">
          03
        </CardHeader>
        <CardBody className="overflow-visible p-4 text-[#071A45]">
          <h4 className="text-3xl gap-y-5">Direct Messaging</h4>
          <img src={box} alt="" className="h-[16px] w-[16px]" />
        </CardBody>
        <CardFooter className="text-small text-slate-500">
          <p className="justify-start">
            Seamless Communication. Connect directly with sellers or buyers to
            ask questions, negotiate, and make decisions.
          </p>
        </CardFooter>
      </Card>
      <Card
        shadow="none"
        isPressable
        onPress={() => console.log("item pressed")}
        className="bg-transparent border-l-1 border-l-slate-600 rounded-md h-[400px]"
      >
        <CardHeader className="text-5xl font-medium text-[#071A45]">
          04
        </CardHeader>
        <CardBody className="overflow-visible p-4 text-[#071A45]">
          <h4 className="text-3xl gap-y-5">Secure Payments</h4>
          <img src={box} alt="" className="h-[16px] w-[16px]" />
        </CardBody>
        <CardFooter className="text-small text-slate-500">
          <p className="justify-start">
            Trust in Every Transaction. Our secure payment system ensures your
            peace fo mind.
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};
