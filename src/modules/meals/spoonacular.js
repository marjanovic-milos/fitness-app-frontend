import React, { useState } from "react";
import CoreCard from "../../components/CoreCard/CoreCard";
import CoreInput from "../../components/CoreInput/CoreInput";
import { useForm } from "react-hook-form";
import { searchSpoonacular } from "src/http/api/meals";
import { useMutation } from "@tanstack/react-query";
import { useAlert } from "src/context/alert";
import { CoreSlider } from "../../components/CoreSlider/CoreSlider";
import CoreButton from "src/components/CoreButton/CoreButton";
import { Maximize2 } from "lucide-react";
import CoreText from "src/components/CoreText/CoreText";
const Spoonacular = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [recepies, setRecepies] = useState();
  const { showAlert } = useAlert();

  const testMutation = useMutation({
    mutationKey: ["search-spoonacular"],
    mutationFn: searchSpoonacular,
    onSuccess: (data) => {
      setRecepies(data.data.data);
      showAlert("Success!");
    },
    onError: (err) => {
      console.error("❌ Error:", err);
      showAlert("Something went wrong!");
    },
  });

  const onSubmit = (formData) => {
    testMutation.mutate(formData);
  };

  const dummyData = [
    {
      id: 634927,
      title: "Best Potato Cheese Soup in a bread bowl",
      image: "https://img.spoonacular.com/recipes/634927-312x231.jpg",
      imageType: "jpg",
      calories: 750,
      protein: "26g",
      fat: "45g",
      carbs: "58g",
    },
    {
      id: 640509,
      title: "Cream Cheese Stuffed Chicken Breasts",
      image: "https://img.spoonacular.com/recipes/640509-312x231.jpg",
      imageType: "jpg",
      calories: 434,
      protein: "30g",
      fat: "32g",
      carbs: "6g",
    },
    {
      id: 643514,
      title: "Fresh Herb Omelette",
      image: "https://img.spoonacular.com/recipes/643514-312x231.jpg",
      imageType: "jpg",
      calories: 317,
      protein: "17g",
      fat: "26g",
      carbs: "4g",
    },
    {
      id: 651994,
      title: "Miniature Fruit Tarts",
      image: "https://img.spoonacular.com/recipes/651994-312x231.jpg",
      imageType: "jpg",
      calories: 482,
      protein: "15g",
      fat: "7g",
      carbs: "89g",
    },
    {
      id: 654571,
      title: "Panna Cotta with Raspberry and Orange Sauce",
      image: "https://img.spoonacular.com/recipes/654571-312x231.jpg",
      imageType: "jpg",
      calories: 396,
      protein: "8g",
      fat: "27g",
      carbs: "28g",
    },
    {
      id: 657972,
      title: "Raw Chocolate Energy Bars",
      image: "https://img.spoonacular.com/recipes/657972-312x231.jpg",
      imageType: "jpg",
      calories: 190,
      protein: "6g",
      fat: "10g",
      carbs: "20g",
    },
    {
      id: 658004,
      title: 'Raw Vegan Blueberry Chocolate Crust "Cheesecake',
      image: "https://img.spoonacular.com/recipes/658004-312x231.jpg",
      imageType: "jpg",
      calories: 557,
      protein: "9g",
      fat: "36g",
      carbs: "59g",
    },
    {
      id: 715397,
      title: "Cheesy Chicken and Rice Casserole",
      image: "https://img.spoonacular.com/recipes/715397-312x231.jpg",
      imageType: "jpg",
      calories: 464,
      protein: "31g",
      fat: "28g",
      carbs: "21g",
    },
    {
      id: 1459207,
      title: "Easy Sheet Pan Pancakes",
      image: "https://img.spoonacular.com/recipes/1459207-312x231.jpg",
      imageType: "jpg",
      calories: 218,
      protein: "6g",
      fat: "8g",
      carbs: "28g",
    },
    {
      id: 1697687,
      title: "Spinach Mushroom Omelette with Parmesan",
      image: "https://img.spoonacular.com/recipes/1697687-312x231.jpg",
      imageType: "jpg",
      calories: 237,
      protein: "17g",
      fat: "17g",
      carbs: "4g",
    },
  ];

  return (
    <div className='overflow-hidden w-full'>
      <form onSubmit={handleSubmit()}>
        <div className='flex gap-5 my-10'>
          <CoreInput
            name='minProtein'
            register={register}
            label='Min. Protein'
            type='number'
            required={{
              required: "Field minProtein is required.",
              pattern: {
                value: /^\d+$/,
                message: "This input is number only.",
              },
              min: {
                value: 1,
                message: "Value must be greater than 0.",
              },
            }}
            errors={errors}
          />
          <CoreInput
            name='maxProtein'
            register={register}
            label='Max. Protein'
            type='number'
            required={{
              required: "Field maxProtein is required.",
              pattern: {
                value: /^\d+$/,
                message: "This input is number only.",
              },
            }}
            errors={errors}
          />
        </div>

        <div className='flex gap-5 my-10'>
          <CoreInput
            name='minCarbs'
            register={register}
            label='Min. Protein'
            type='number'
            required={{
              required: "Field minCarbs is required.",
              pattern: {
                value: /^\d+$/,
                message: "This input is number only.",
              },
              min: {
                value: 1,
                message: "Value must be greater than 0.",
              },
            }}
            errors={errors}
          />
          <CoreInput
            name='maxCarbs'
            register={register}
            label='Max. Carbs'
            type='number'
            required={{
              required: "Field maxCarbs is required.",
              pattern: {
                value: /^\d+$/,
                message: "This input is number only.",
              },
              min: {
                value: 1,
                message: "Value must be greater than 0.",
              },
            }}
            errors={errors}
          />
        </div>
        <CoreButton type='submit' classes='w-[10rem]' variant='outline' disabled={testMutation.isPending}>
          {testMutation.isPending ? "Sending..." : "Send"}
        </CoreButton>
      </form>
      <div className='overflow-hidden my-10 w-full h-fit py-5 m-auto'>
        <CoreSlider>
          {dummyData?.map((recepie) => (
            <>
              <div className='relative w-full' key={recepie?.id}>
                <img src={recepie?.image} alt='' className='object-cover w-full h-auto max-h-[250px] rounded-lg' />
                <div className='absolute p-5 flex items-end inset-0 bg-gradient-to-r from-blue-800/60 to-transparent text-white text-xl font-thin w-full'>
                  {/* <p className='h-auto'>{recepie?.title}</p> */}
                  <span className='absolute top-5 left-10 text-sm rounded-sm bg-blue-400 p-2 '>{recepie?.calories} Calories</span>
                  <span className='absolute top-5 right-10 bg-gray-200 p-2 text-gray-800 rounded-full cursor-pointer'>
                    <Maximize2 className='h-5 w-5' strokeWidth={1.5} />
                  </span>
                </div>
              </div>
              <CoreText className='text-start'>{recepie?.title}</CoreText>
            </>
          ))}
        </CoreSlider>
      </div>
    </div>
  );
};

export default Spoonacular;
