import React from "react";
import { useQuery } from "@tanstack/react-query";
import { spoonacularRecepie } from "src/http/api/meals";
import { Zap, Maximize2, MoveUpRight, BookMarked } from "lucide-react";
import CoreText from "src/components/CoreText/CoreText";
import Image from "next/image";
const MealView = (props) => {
  const { recepie } = props;
  //   const { id, calories, carbs, fat, protein } = recepie;
  const { data, isLoading } = useQuery({
    queryKey: ["recepie", recepie?.id],
    queryFn: () => spoonacularRecepie(recepie?.id),
    enabled: false,
  });

  const dummy = {
    id: 634927,
    image: "https://img.spoonacular.com/recipes/634927-556x370.jpg",

    title: "Best Potato Cheese Soup in a bread bowl",

    sourceUrl:
      "https://www.foodista.com/recipe/VWFNYL5F/best-potato-cheese-soup-in-a-bread-bowl",
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
    spoonacularSourceUrl:
      "https://spoonacular.com/best-potato-cheese-soup-in-a-bread-bowl-634927",
  };
  console.log(recepie, 111);

  const NutritionComponent = ({ className, title, data }) => {
    return (
      <div
        className={`flex flex-col gap-4 p-4 rounded-2xl w-full h-full ${className}`}
      >
        <div className="flex flex-col items-center gap-4 px-2">
          <div className={`core-center bg-black/10 h-10 w-10 rounded-full`}>
            <Zap
              className="h-4 w-4 top-50 left-50 text-white"
              strokeWidth={1.5}
            />
          </div>
          <div className="flex flex-col">
            <CoreText className="font-semibold">{title}</CoreText>
            <CoreText className="flex items-center">{data}</CoreText>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="relative overflow-hidden rounded-lg">
      <span className="absolute inset-0 bg-black/30" />
      <Image
        src={dummy?.image}
        alt="Example local image"
        width={500}
        height={500}
        className="w-full object-fit"
        priority
      />
      <div className="absolute h-[50%] w-full flex justify-start pb-20 top-10 left-10">
        <span className="absolute left-0 top-5 bg-gray-200 p-2 text-gray-800 rounded-full cursor-pointer">
          <MoveUpRight className="h-4 w-4" strokeWidth={1.5} />
        </span>

        <span className="absolute left-12 top-5 bg-gray-200 p-2 text-gray-800 rounded-full cursor-pointer">
          <BookMarked className="h-4 w-4" strokeWidth={1.5} />
        </span>
        <h1 className="text-white mb-10"> {dummy.title}</h1>
      </div>

      <div className="absolute bottom-0 left-0 flex items-start gap-5 lg:h-[70%] h-full  bg-white rounded-xl w-full p-5 z-99">
        <div className="grid grid-cols-2 gap-4 w-[50%] lg:h-[50%] h-full">
          <NutritionComponent
            className="bg-blue-200"
            title="Calories"
            data={recepie?.calories}
          />
          <NutritionComponent
            className="bg-red-200"
            title="Fat"
            data={recepie?.fat}
          />
          <NutritionComponent
            className="bg-green-200"
            title="Protein"
            data={recepie?.protein}
          />
          <NutritionComponent
            className="bg-yellow-200"
            title="Carbs"
            data={recepie?.carbs}
          />
        </div>
        <div className="flex flex-col w-[50%] gap-4 lg:h-[50%] h-full">
          <CoreText
            className={`w-fit gap-4 flex justify-start px-10 ${
              dummy?.vegan ? "bg-green-300" : "bg-red-200"
            }  rounded-xl font-semibold`}
          >
            <div className={`core-center bg-black/10 h-10 w-10 rounded-full`}>
              <Zap
                className="h-4 w-4 top-50 left-50 text-white"
                strokeWidth={1.5}
              />
            </div>
            {`${dummy?.vegan ? "" : "Non"} Vegan`}
          </CoreText>

          <CoreText
            className={`w-full gap-4 flex justify-start px-10 ${
              dummy?.vegetarian ? "bg-green-300" : "bg-red-200"
            }  rounded-xl font-semibold`}
          >
            <div className={`core-center bg-black/10 h-10 w-10 rounded-full`}>
              <Zap
                className="h-4 w-4 top-50 left-50 text-white"
                strokeWidth={1.5}
              />
            </div>
            {`${dummy?.vegetarian ? "" : "Non"} Vegetarian`}
          </CoreText>

          <CoreText
            className={`w-full gap-4 flex justify-start px-10 ${
              dummy?.dairyFree ? "bg-green-300" : "bg-red-200"
            }  rounded-xl font-semibold`}
          >
            <div className={`core-center bg-black/10 h-10 w-10 rounded-full`}>
              <Zap
                className="h-4 w-4 top-50 left-50 text-white"
                strokeWidth={1.5}
              />
            </div>
            {`${dummy?.dairyFree ? "" : "Non"} Dairy Free`}
          </CoreText>

          <CoreText
            className={`w-full gap-4 flex justify-start px-10 ${
              dummy?.glutenFree ? "bg-green-300" : "bg-red-200"
            }  rounded-xl font-semibold`}
          >
            <div className={`core-center bg-black/10 h-10 w-10 rounded-full`}>
              <Zap
                className="h-4 w-4 top-50 left-50 text-white"
                strokeWidth={1.5}
              />
            </div>
            {`${dummy?.glutenFree ? "" : "Non"} Gluten Free`}
          </CoreText>
        </div>
      </div>
    </div>
  );
};

export default MealView;
