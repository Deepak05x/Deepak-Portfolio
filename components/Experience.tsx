import React from "react";

import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";

const Experience = () => {
  return (
    <div className="py-20 w-full">
      <h1 className="heading text-white">
        My <span className="text-green-500">work experience</span>
      </h1>

      <div className="w-full mt-12 flex flex-col gap-8 items-center justify-center">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "rgb(4,7,29)",

              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",

              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            // remove bg-white dark:bg-slate-900
            className="flex-1 max-w-[60rem] text-black border-gray-700 hover:border-green-500 transition duration-700 "
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <div className="lg:ms-5">
                <h1 className="text-start text-white flex flex-col text-xl md:text-2xl font-bold">
                  {card.title}
                  <span className="text-green-500">{card.company}</span>
                </h1>
                <p className="text-start flex flex-col gap-2 text-sm text-white-100 mt-3 font-semibold">
                  {card.desc}
                  <span>{card.duration}</span>
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
