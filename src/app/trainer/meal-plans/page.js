"use client";
import React from "react";
import PageGuard from "src/page-guards/pageGuard";
import { useQuery } from "@tanstack/react-query";
import { getSavedMeals } from "src/http/api/meals";
import CoreCard from "src/components/CoreCard/CoreCard";
import CoreHeading from "src/components/CoreHeading/CoreHeading";
import CoreText from "src/components/CoreText/CoreText";
import Image from "next/image";
const MealPlansPage = () => {
  const { data } = useQuery({
    queryKey: ["meals"],
    queryFn: getSavedMeals,
  });

  return (
    <PageGuard roles={["trainer"]}>
      <CoreCard>
        <div className="p-5">
          <CoreHeading type="h1" className="font-semibold">
            Your Meal Plans
          </CoreHeading>
          <div className="flex flex-col gap-4">
            {data?.map((meal) => (
              <div
                key={meal._id}
                className="flex items-center rounded-full overflow-hidden shadow-md xl:w-md w-full"
              >
                <Image
                  src={meal.image}
                  alt="Example local image"
                  width={100}
                  height={300}
                  priority
                />
                <div className="flex flex-col p-5">
                  <CoreText className="">{meal.title}</CoreText>
                  <a
                    href={meal.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Link
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CoreCard>
    </PageGuard>
  );
};

export default MealPlansPage;
