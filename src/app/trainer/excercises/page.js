"use client";
import React, { useState } from "react";
import PageGuard from "src/page-guards/pageGuard";
import { getExcercises } from "src/http/api/excercises";
import { useQuery } from "@tanstack/react-query";
import CoreText from "src/components/CoreText/CoreText";
import CoreHeading from "src/components/CoreHeading/CoreHeading";
import CoreCard from "src/components/CoreCard/CoreCard";
import CoreButton from "src/components/CoreButton/CoreButton";
import CoreModal from "src/components/CoreModal/CoreModal";
const ExcercisePage = () => {
  const { data } = useQuery({
    queryKey: ["excercises"],
    queryFn: getExcercises,
  });

  const [test, setTest] = useState(false);
  return (
    <PageGuard roles={["trainer"]}>
      <CoreModal isOpen={test} onClose={() => setTest(!test)}></CoreModal>
      <CoreCard>
        <div className='p-5'>
          <CoreHeading type='h1' className='font-semibold'>
            Saved excercises
          </CoreHeading>
          <CoreButton type='' onClick={() => setTest(!test)}>
            Outlined
          </CoreButton>
          <div className='flex flex-col gap-4'>
            {data?.map((excercise) => (
              <div key={excercise._id} className='flex items-center rounded-full overflow-hidden shadow-md xl:w-md w-full'>
                <div className='flex flex-col p-5'>
                  <CoreText className=''>{excercise.name}</CoreText>
                  <CoreText className=''>{excercise.notes}</CoreText>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CoreCard>
    </PageGuard>
  );
};

export default ExcercisePage;
