import React from "react";

export default function TotalCalculation({ calculationSummary}) {
  return (
    <div className="flex gap-3 md:gap-5 font-lexend">
      <div>
        <p className="font-medium text-sm md:text-base leading-5 md:leading-[26px] text-grayMain">
          Total Time = <br />
          {calculationSummary.totalTime ?? 0} minutes
        </p>
      </div>
      <div>
        <p className="font-medium text-sm md:text-base leading-5 md:leading-[26px] text-grayMain">
          Total Calories =
          <br />
          {calculationSummary.totalCalories ?? 0} calories
        </p>
      </div>
    </div>
  );
}
