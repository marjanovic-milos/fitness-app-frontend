import React from "react";
import { useQuery } from "@tanstack/react-query";
import { spoonacularRecepie } from "src/http/api/meals";
import { Zap, Ham, BookMarked, LeafyGreen, Salad, Vegan, Wheat, XCircle, Milk } from "lucide-react";
import CoreText from "src/components/CoreText/CoreText";
import Image from "next/image";
import CoreButton from "src/components/CoreButton/CoreButton";
import logo from "../../../public/spoonacular.svg";
const MealView = (props) => {
  const { recepie, onSave, onClose } = props;

  const { data, isLoading } = useQuery({
    queryKey: ["recepie", recepie?.id],
    queryFn: () => spoonacularRecepie(recepie?.id),
    enabled: false,
  });

  const dummy = {
    id: 634927,
    image: "https://img.spoonacular.com/recipes/634927-556x370.jpg",

    title: "Best Potato Cheese Soup in a bread bowl",

    sourceUrl: "https://www.foodista.com/recipe/VWFNYL5F/best-potato-cheese-soup-in-a-bread-bowl",
    vegetarian: false,
    vegan: false,
    glutenFree: true,
    dairyFree: false,

    summary:
      'Best Potato Cheese Soup in a bread bowl could be just the <b>gluten free</b> recipe you\'ve been looking for. One portion of this dish contains about <b>26g of protein</b>, <b>45g of fat</b>, and a total of <b>750 calories</b>. For <b>$2.11 per serving</b>, this recipe <b>covers 29%</b> of your daily requirements of vitamins and minerals. This recipe serves 8. Head to the store and pick up block veleveeta cheese, onion, garnish - bacon crumbles, and a few other things to make it today. It works well as a rather cheap main course. Only a few people made this recipe, and 3 would say it hit the spot. It will be a hit at your <b>Autumn</b> event. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. It is brought to you by Foodista. Taking all factors into account, this recipe <b>earns a spoonacular score of 61%</b>, which is pretty good. Similar recipes are <a href="https://spoonacular.com/recipes/one-bowl-cheese-bread-582301">One Bowl Cheese Bread</a>, <a href="https://spoonacular.com/recipes/beer-cheese-in-a-bread-bowl-recipe-147570">Beer Cheese in a Bread Bowl Recipe</a>, and <a href="https://spoonacular.com/recipes/creamy-ranch-and-cheese-bread-bowl-dip-creamy-ranch-and-cheese-bread-bowl-dip-520657">Creamy Ranch and Cheese Bread Bowl Dip Creamy Ranch and Cheese Bread Bowl Dip</a>.',
    cuisines: [],
    dishTypes: ["lunch", "soup", "main course", "main dish", "dinner"],
    diets: ["gluten free"],
    occasions: ["fall", "winter"],
    instructions:
      "In a large heavy stock pot, heat 2 tbs of olive oil. When hot, add onions and cook over medium heat until translucent  2-3 mins. Add garlic and cook for another 1 minute. Add Chicken stock, water and salt to pot. Add potatoes and carrots to stock pot and bring to a boil. Boil until potatoes are fork tender.\nTurn burner off and allow to cool until able to remove about  of the potatoes with a slotted spoon to a food processor or blender. Process until potatoes turn into a paste and then add back to the stock pot.\nPlace stock pot back on the burner and on medium heat, add milk, cream, butter and Velveeta cheese and heat until butter and Velveeta is melted. Do not bring to a boil  adjust heat to low as temperature nears boiling. Stir frequently with wooden spoon and scrape bottom of stock pot frequently to prevent sticking.\nAdd sharp cheddar one handful at a time, stirring each time. Add parmesean. Add salt and pepper to taste (will vary greatly depending on types of cheese you use  so add a little, taste, repeat).\nServe in bread bowl, soup bowl or mug. Garnish with bacon crumbles, chives, sour cream and shredded cheese.",

    spoonacularScore: 52.696044921875,
    spoonacularSourceUrl: "https://spoonacular.com/best-potato-cheese-soup-in-a-bread-bowl-634927",
  };

  const handleSave = () => {
    onSave({
      spoonacularId: dummy?.id,
      title: dummy?.title,
      image: dummy?.image,
      fat: Number(recepie?.fat.replace(/g$/, "")),
      carbs: Number(recepie?.carbs.replace(/g$/, "")),
      calories: recepie?.calories,
      protein: Number(recepie?.protein.replace(/g$/, "")),
      sourceUrl: dummy.sourceUrl,
    });
    onClose();
  };

  const NutritionComponent = ({ className, title, data, icon }) => {
    const Icon = icon;
    return (
      <div className={`flex flex-col justify-center gap-4 p-4 rounded-2xl w-full h-full ${className}`}>
        <div className='flex flex-col items-center gap-4 px-2'>
          <div className={`core-center bg-black/10 h-10 w-10 rounded-full`}>
            <Icon className='h-4 w-4 top-50 left-50 text-white' strokeWidth={1.5} />
          </div>
          <div className='flex flex-col '>
            <CoreText className='font-semibold !text-white'>{title}</CoreText>
            <CoreText className='flex items-center !text-white'>{data}</CoreText>
          </div>
        </div>
      </div>
    );
  };

  const DietComponent = ({ value, icon, title }) => {
    const Icon = icon;
    return (
      <span className={`flex items-center gap-2 bg-transperent border ${value ? "border-green-500" : "border-red-700"} w-fit h-8 rounded-full px-2`}>
        {value ? (
          <Icon className={`h-4 w-4 ${value ? "text-green-500" : "!text-red-700"} `} strokeWidth={1.5} />
        ) : (
          <XCircle className={` h-4 w-4 ${value ? "text-green-500" : "text-red-700"}  `} strokeWidth={1.5} />
        )}
        <p className={`text-xs text-white font-semibold `}>{`${value ? "" : "Not"} ${title}`}</p>
      </span>
    );
  };

  return (
    <div className='relative'>
      <span className='absolute inset-0 bg-black/30 rounded-xl' />
      <Image src={dummy?.image} alt='Example local image' width={500} height={500} className='w-full object-fit rounded-xl' priority />

      <Image src={logo} alt='Example local image' width={100} height={100} className='absolute top-5 left-5' priority />
      <div className='absolute h-[50%]  w-full flex xl:flex-row flex-col justify-between gap-4 pb-20 px-10 xl:top-10 top-0 left-0'>
        <h1 className='text-white font-thin mb-10 h-auto'> {dummy.title}</h1>
      </div>

      <div className='absolute bottom-0  left-0 flex items-start gap-5 h-[70%]  overflow-y-auto bg-white rounded-xl w-full p-5 z-99'>
        <div className='grid grid-cols-4 gap-4 w-[50%] h-[50%] '>
          <NutritionComponent className='bg-blue-400' title='Calories' data={recepie?.calories} icon={Zap} />
          <NutritionComponent className='bg-teal-400' title='Fat' data={recepie?.fat} icon={Wheat} />
          <NutritionComponent className='bg-green-400' title='Protein' data={recepie?.protein} icon={Ham} />
          <NutritionComponent className='bg-yellow-600' title='Carbs' data={recepie?.carbs} icon={LeafyGreen} />
        </div>
        <div className='flex flex-col gap-5 w-[50%] h-[50%]'>
          <div className='w-full'>
            <div className='flex items-center gap-2'>
              <DietComponent value={dummy.vegan} icon={Vegan} title='Vegan' />
              <DietComponent value={dummy.vegetarian} icon={Salad} title='Vegetarian' />
              <DietComponent value={dummy.glutenFree} icon={Wheat} title='Gluten Free' />
              <DietComponent value={dummy.dairyFree} icon={Milk} title='Dairy Free' />
            </div>
            <CoreText className='text-sm font-semibold line-clamp-8'>{dummy.instructions}</CoreText>
          </div>
          <div className='flex items-center'>
            <CoreButton onClick={handleSave} classes='w-25 !justify-between !bg-gray-900' icon={BookMarked}>
              Save
            </CoreButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealView;
