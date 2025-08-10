"use client";
import React from "react";
import PageGuard from "src/page-guards/pageGuard";
import { useQuery } from "@tanstack/react-query";
import { getSavedMeals } from "src/http/api/meals";
import CoreCard from "src/components/CoreCard/CoreCard";
import CoreHeading from "src/components/CoreHeading/CoreHeading";
import CoreText from "src/components/CoreText/CoreText";
import Image from "next/image";
import CoreTable from "src/components/CoreTable/CoreTable";
import CoreTableRow from "src/components/CoreTable/CoreTableRow";
const MealPlansPage = () => {
  const { data, loading } = useQuery({
    queryKey: ["meals"],
    queryFn: getSavedMeals,
  });
  const columns = [
    "",
    "Title",
    "Protein",
    "Carbs",
    "Fats",
    "Calories",
    "Source Url",
  ];

  return (
    <PageGuard roles={["trainer"]}>
      <CoreCard>
        <div className="p-5">
          <CoreHeading type="h1" className="font-semibold">
            Your Meal Plans
          </CoreHeading>
          <CoreTable
            loading={loading}
            columns={columns}
            data={data}
            className={{ header: "grid-cols-7" }}
          >
            {data?.map((meal) => (
              <CoreTableRow key={meal._id} className={"grid-cols-7"}>
                <div className="core-center">
                  <Image
                    src={meal.image}
                    alt="Example local image"
                    width={50}
                    height={50}
                    className="w-15 h-15 rounded-full object-cover"
                    priority
                  />
                </div>

                <CoreText className="core-overflow-text">
                  {meal?.title}
                </CoreText>
                <CoreText className="core-overflow-text core-center">
                  {meal?.protein || "N/A"}
                </CoreText>
                <CoreText className="core-overflow-text core-center">
                  {meal?.carbs || "N/A"}
                </CoreText>
                <CoreText className="core-overflow-text core-center">
                  {meal?.fat || "N/A"}
                </CoreText>
                <CoreText className="core-overflow-text core-center">
                  {meal?.calories || "N/A"}
                </CoreText>

                <a
                  href={meal.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="core-center underline"
                >
                  Link
                </a>
              </CoreTableRow>
            ))}
          </CoreTable>
        </div>
      </CoreCard>
    </PageGuard>
  );
};

export default MealPlansPage;
