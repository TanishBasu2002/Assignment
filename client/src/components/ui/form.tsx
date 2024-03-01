import { Input } from "@nextui-org/react";
import { Button } from "./button";
import { useState } from "react";
import axios from "axios";
export const Form = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      axios.post("http://localhost:4000/insert", {
        email: email,
      });
      alert("Responce Submitted");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="w-full flex flex-col gap-4">
        {" "}
        <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
          <Input
            type="email"
            variant="flat"
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <Button type="submit" className="ui_button">
          Submit
        </Button>
      </div>
    </form>
  );
};
