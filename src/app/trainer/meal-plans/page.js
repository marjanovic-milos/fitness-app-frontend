"use client";
import React from "react";
import PageGuard from "src/page-guards/pageGuard";
import { useQuery } from "@tanstack/react-query";
import { getSavedMeals, deleteMeal } from "src/http/api/meals";
import CoreCard from "src/components/CoreCard/CoreCard";
import CoreHeading from "src/components/CoreHeading/CoreHeading";
import CoreText from "src/components/CoreText/CoreText";
import Image from "next/image";
import CoreTable from "src/components/CoreTable/CoreTable";
import CoreTableRow from "src/components/CoreTable/CoreTableRow";
import Link from "next/link";
import CoreSubnavigation from "src/components/CoreSubnavigation/CoreSubnavigation";
import { Link as LinkIcon } from "lucide-react";
import WildCard from "src/components/WildCard/WildCard";
const MealPlansPage = () => {
  // const { data, loading } = useQuery({
  //   queryKey: ["meals"],
  //   queryFn: getSavedMeals,
  // });
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
      <WildCard
        columns={columns}
        queryFn={getSavedMeals}
        deleteFn={deleteMeal}
        queryKey={"meals"}
      />
      {/* <CoreCard>
        <div className="p-5">
          <CoreSubnavigation heading="Your Meal Plans" button="Create New" />
          <div className="flex gap-6">
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
                      className="w-10 h-10 rounded-full object-cover"
                      priority
                    />
                  </div>

                  <CoreText>{meal?.title}</CoreText>
                  <CoreText>{meal?.protein || "N/A"}</CoreText>
                  <CoreText>{meal?.carbs || "N/A"}</CoreText>
                  <CoreText>{meal?.fat || "N/A"}</CoreText>
                  <CoreText>{meal?.calories || "N/A"}</CoreText>

                  <Link href={meal.sourceUrl} className="underline">
                    <LinkIcon className="w-4 h-4" strokeWidth={1.5} />
                  </Link>
                </CoreTableRow>
              ))}
            </CoreTable>
           
          </div>
        </div>
      </CoreCard> */}
    </PageGuard>
  );
};

export default MealPlansPage;
