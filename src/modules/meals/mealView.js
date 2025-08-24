import React from "react";
import { useQuery } from "@tanstack/react-query";
import { spoonacularRecepie } from "src/http/api/meals";
import { Zap } from "lucide-react";

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
    imageType: "jpg",
    title: "Best Potato Cheese Soup in a bread bowl",
    readyInMinutes: 45,
    servings: 8,
    sourceUrl: "https://www.foodista.com/recipe/VWFNYL5F/best-potato-cheese-soup-in-a-bread-bowl",
    vegetarian: false,
    vegan: false,
    glutenFree: true,
    dairyFree: false,
    veryHealthy: false,
    cheap: false,
    veryPopular: false,
    sustainable: false,
    lowFodmap: false,
    weightWatcherSmartPoints: 27,
    gaps: "no",
    preparationMinutes: null,
    cookingMinutes: null,
    aggregateLikes: 3,
    healthScore: 20,
    creditsText: "foodista.com",
    license: null,
    sourceName: "foodista.com",
    pricePerServing: 211.27,
    extendedIngredients: [
      {
        id: 4053,
        aisle: "Oil, Vinegar, Salad Dressing",
        image: "olive-oil.jpg",
        consistency: "LIQUID",
        name: "olive oil",
        nameClean: "olive oil",
        original: "2 Tbs Olive oil",
        originalName: "Olive oil",
        amount: 2,
        unit: "Tbs",
        meta: [],
        measures: {
          us: {
            amount: 2,
            unitShort: "Tbs",
            unitLong: "Tbs",
          },
          metric: {
            amount: 2,
            unitShort: "Tbs",
            unitLong: "Tbs",
          },
        },
      },
      {
        id: 11294,
        aisle: "Produce",
        image: "sweet-onion.png",
        consistency: "SOLID",
        name: "onion",
        nameClean: "onion",
        original: "1 large sweet onion – diced",
        originalName: "sweet onion – diced",
        amount: 1,
        unit: "large",
        meta: ["diced", "sweet"],
        measures: {
          us: {
            amount: 1,
            unitShort: "large",
            unitLong: "large",
          },
          metric: {
            amount: 1,
            unitShort: "large",
            unitLong: "large",
          },
        },
      },
      {
        id: 11215,
        aisle: "Produce",
        image: "garlic.png",
        consistency: "SOLID",
        name: "garlic",
        nameClean: "garlic",
        original: "2 tsp garlic – minced ( about 4 cloves)",
        originalName: "tsp garlic – minced ( about",
        amount: 4,
        unit: "cloves",
        meta: ["minced"],
        measures: {
          us: {
            amount: 4,
            unitShort: "cloves",
            unitLong: "cloves",
          },
          metric: {
            amount: 4,
            unitShort: "cloves",
            unitLong: "cloves",
          },
        },
      },
      {
        id: 6172,
        aisle: "Canned and Jarred",
        image: "chicken-broth.png",
        consistency: "LIQUID",
        name: "chicken stock",
        nameClean: "chicken stock",
        original: "1 quart Chicken Stock (if boxed, use one large box).",
        originalName: "Chicken Stock (if boxed, use one large box)",
        amount: 1,
        unit: "quart",
        meta: ["(if boxed, use one large box)"],
        measures: {
          us: {
            amount: 1,
            unitShort: "qt",
            unitLong: "quart",
          },
          metric: {
            amount: 946.353,
            unitShort: "ml",
            unitLong: "milliliters",
          },
        },
      },
      {
        id: 14412,
        aisle: "Beverages",
        image: "water.png",
        consistency: "LIQUID",
        name: "water",
        nameClean: "water",
        original: "1 quart of water",
        originalName: "water",
        amount: 1,
        unit: "quart",
        meta: [],
        measures: {
          us: {
            amount: 1,
            unitShort: "qt",
            unitLong: "quart",
          },
          metric: {
            amount: 946.353,
            unitShort: "ml",
            unitLong: "milliliters",
          },
        },
      },
      {
        id: 2047,
        aisle: "Spices and Seasonings",
        image: "salt.jpg",
        consistency: "SOLID",
        name: "salt",
        nameClean: "salt",
        original: "2 tsp salt",
        originalName: "salt",
        amount: 2,
        unit: "tsp",
        meta: [],
        measures: {
          us: {
            amount: 2,
            unitShort: "tsps",
            unitLong: "teaspoons",
          },
          metric: {
            amount: 2,
            unitShort: "tsps",
            unitLong: "teaspoons",
          },
        },
      },
      {
        id: 11353,
        aisle: "Produce",
        image: "russet-or-idaho-potatoes.png",
        consistency: "SOLID",
        name: "potatoes",
        nameClean: "potatoes",
        original: "5-6 large potatoes – cut into 1 ½ inch cubes(if Russets or baking potatoes, peel. If Red or Yukon Gold – no need to peel).",
        originalName: "potatoes – cut into 1 ½ inch cubes(if Russets or baking potatoes, peel. If Red or Yukon Gold – no need to peel)",
        amount: 5,
        unit: "large",
        meta: ["red", "cut into 1 ½ inch cubes(if russets or baking potatoes, peel. if  or yukon gold - no need to peel)."],
        measures: {
          us: {
            amount: 5,
            unitShort: "large",
            unitLong: "larges",
          },
          metric: {
            amount: 5,
            unitShort: "large",
            unitLong: "larges",
          },
        },
      },
      {
        id: 11124,
        aisle: "Produce",
        image: "sliced-carrot.png",
        consistency: "SOLID",
        name: "carrots",
        nameClean: "carrots",
        original: "3 large carrots - peeled and cut into ½ inch pieces",
        originalName: "carrots - peeled and cut into ½ inch pieces",
        amount: 3,
        unit: "large",
        meta: ["peeled", "cut into ½ inch pieces"],
        measures: {
          us: {
            amount: 3,
            unitShort: "large",
            unitLong: "larges",
          },
          metric: {
            amount: 3,
            unitShort: "large",
            unitLong: "larges",
          },
        },
      },
      {
        id: 1011077,
        aisle: "Milk, Eggs, Other Dairy",
        image: "milk.png",
        consistency: "LIQUID",
        name: "milk",
        nameClean: "milk",
        original: "1/3 Gallon of whole milk",
        originalName: "whole milk",
        amount: 0.33333334,
        unit: "Gallon",
        meta: ["whole"],
        measures: {
          us: {
            amount: 0.333,
            unitShort: "Gallon",
            unitLong: "Gallons",
          },
          metric: {
            amount: 0.333,
            unitShort: "Gallon",
            unitLong: "Gallons",
          },
        },
      },
      {
        id: 1053,
        aisle: "Milk, Eggs, Other Dairy",
        image: "fluid-cream.jpg",
        consistency: "LIQUID",
        name: "heavy cream",
        nameClean: "heavy cream",
        original: "½ pint Heavy Cream",
        originalName: "Heavy Cream",
        amount: 0.5,
        unit: "pint",
        meta: [],
        measures: {
          us: {
            amount: 0.5,
            unitShort: "pts",
            unitLong: "pints",
          },
          metric: {
            amount: 0.5,
            unitShort: "pts",
            unitLong: "pints",
          },
        },
      },
      {
        id: 1001,
        aisle: "Milk, Eggs, Other Dairy",
        image: "butter-sliced.jpg",
        consistency: "SOLID",
        name: "butter",
        nameClean: "butter",
        original: "½ stick of butter",
        originalName: "butter",
        amount: 0.5,
        unit: "stick",
        meta: [],
        measures: {
          us: {
            amount: 0.5,
            unitShort: "stick",
            unitLong: "sticks",
          },
          metric: {
            amount: 0.5,
            unitShort: "stick",
            unitLong: "sticks",
          },
        },
      },
      {
        id: 1186,
        aisle: "Cheese",
        image: "cream-cheese.jpg",
        consistency: "SOLID",
        name: "block veleveeta cheese",
        nameClean: "block veleveeta cheese",
        original: "½ block Veleveeta Cheese – cubed.",
        originalName: "block Veleveeta Cheese – cubed",
        amount: 0.5,
        unit: "",
        meta: ["cubed"],
        measures: {
          us: {
            amount: 0.5,
            unitShort: "",
            unitLong: "",
          },
          metric: {
            amount: 0.5,
            unitShort: "",
            unitLong: "",
          },
        },
      },
      {
        id: 1031009,
        aisle: "Cheese",
        image: "cheddar-cheese.png",
        consistency: "SOLID",
        name: "sharp cheedar cheese",
        nameClean: "sharp cheedar cheese",
        original: "2 cups Sharp Cheedar Cheese – shredded",
        originalName: "Sharp Cheedar Cheese – shredded",
        amount: 2,
        unit: "cups",
        meta: ["shredded"],
        measures: {
          us: {
            amount: 2,
            unitShort: "cups",
            unitLong: "cups",
          },
          metric: {
            amount: 226,
            unitShort: "g",
            unitLong: "grams",
          },
        },
      },
      {
        id: 1102047,
        aisle: "Spices and Seasonings",
        image: "salt-and-pepper.jpg",
        consistency: "SOLID",
        name: "salt and pepper",
        nameClean: "salt and pepper",
        original: "Salt and pepper to taste",
        originalName: "Salt and pepper to taste",
        amount: 8,
        unit: "servings",
        meta: ["to taste"],
        measures: {
          us: {
            amount: 8,
            unitShort: "servings",
            unitLong: "servings",
          },
          metric: {
            amount: 8,
            unitShort: "servings",
            unitLong: "servings",
          },
        },
      },
      {
        id: 10123,
        aisle: "Meat",
        image: "raw-bacon.png",
        consistency: "SOLID",
        name: "garnish - bacon crumbles",
        nameClean: "garnish - bacon crumbles",
        original: "Garnish – bacon crumbles, chives, sour cream, shredded cheese.",
        originalName: "Garnish – bacon crumbles, chives, sour cream, shredded cheese",
        amount: 8,
        unit: "servings",
        meta: ["shredded", "sour"],
        measures: {
          us: {
            amount: 8,
            unitShort: "servings",
            unitLong: "servings",
          },
          metric: {
            amount: 8,
            unitShort: "servings",
            unitLong: "servings",
          },
        },
      },
      {
        id: -1,
        aisle: "?",
        image: null,
        consistency: "SOLID",
        name: "parmesean",
        nameClean: "parmesean",
        original: "1 C Parmesean – grated",
        originalName: "Parmesean – grated",
        amount: 1,
        unit: "C",
        meta: ["grated"],
        measures: {
          us: {
            amount: 1,
            unitShort: "cup",
            unitLong: "cup",
          },
          metric: {
            amount: 1,
            unitShort: "cup",
            unitLong: "cup",
          },
        },
      },
      {
        id: -1,
        aisle: "?",
        image: null,
        consistency: "SOLID",
        name: "parmesean",
        nameClean: "parmesean",
        original: "1 C Parmesean – grated",
        originalName: "Parmesean – grated",
        amount: 1,
        unit: "C",
        meta: ["grated"],
        measures: {
          us: {
            amount: 1,
            unitShort: "cup",
            unitLong: "cup",
          },
          metric: {
            amount: 1,
            unitShort: "cup",
            unitLong: "cup",
          },
        },
      },
    ],
    summary:
      'Best Potato Cheese Soup in a bread bowl could be just the <b>gluten free</b> recipe you\'ve been looking for. One portion of this dish contains about <b>26g of protein</b>, <b>45g of fat</b>, and a total of <b>750 calories</b>. For <b>$2.11 per serving</b>, this recipe <b>covers 29%</b> of your daily requirements of vitamins and minerals. This recipe serves 8. Head to the store and pick up block veleveeta cheese, onion, garnish - bacon crumbles, and a few other things to make it today. It works well as a rather cheap main course. Only a few people made this recipe, and 3 would say it hit the spot. It will be a hit at your <b>Autumn</b> event. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. It is brought to you by Foodista. Taking all factors into account, this recipe <b>earns a spoonacular score of 61%</b>, which is pretty good. Similar recipes are <a href="https://spoonacular.com/recipes/one-bowl-cheese-bread-582301">One Bowl Cheese Bread</a>, <a href="https://spoonacular.com/recipes/beer-cheese-in-a-bread-bowl-recipe-147570">Beer Cheese in a Bread Bowl Recipe</a>, and <a href="https://spoonacular.com/recipes/creamy-ranch-and-cheese-bread-bowl-dip-creamy-ranch-and-cheese-bread-bowl-dip-520657">Creamy Ranch and Cheese Bread Bowl Dip Creamy Ranch and Cheese Bread Bowl Dip</a>.',
    cuisines: [],
    dishTypes: ["lunch", "soup", "main course", "main dish", "dinner"],
    diets: ["gluten free"],
    occasions: ["fall", "winter"],
    instructions:
      "In a large heavy stock pot, heat 2 tbs of olive oil. When hot, add onions and cook over medium heat until translucent  2-3 mins. Add garlic and cook for another 1 minute. Add Chicken stock, water and salt to pot. Add potatoes and carrots to stock pot and bring to a boil. Boil until potatoes are fork tender.\nTurn burner off and allow to cool until able to remove about  of the potatoes with a slotted spoon to a food processor or blender. Process until potatoes turn into a paste and then add back to the stock pot.\nPlace stock pot back on the burner and on medium heat, add milk, cream, butter and Velveeta cheese and heat until butter and Velveeta is melted. Do not bring to a boil  adjust heat to low as temperature nears boiling. Stir frequently with wooden spoon and scrape bottom of stock pot frequently to prevent sticking.\nAdd sharp cheddar one handful at a time, stirring each time. Add parmesean. Add salt and pepper to taste (will vary greatly depending on types of cheese you use  so add a little, taste, repeat).\nServe in bread bowl, soup bowl or mug. Garnish with bacon crumbles, chives, sour cream and shredded cheese.",
    analyzedInstructions: [
      {
        name: "",
        steps: [
          {
            number: 1,
            step: "In a large heavy stock pot, heat 2 tbs of olive oil. When hot, add onions and cook over medium heat until translucent  2-3 mins.",
            ingredients: [
              {
                id: 4053,
                name: "olive oil",
                localizedName: "olive oil",
                image: "olive-oil.jpg",
              },
              {
                id: 11282,
                name: "onion",
                localizedName: "onion",
                image: "brown-onion.png",
              },
              {
                id: 1006615,
                name: "stock",
                localizedName: "stock",
                image: "chicken-broth.png",
              },
            ],
            equipment: [
              {
                id: 404752,
                name: "pot",
                localizedName: "pot",
                image: "https://spoonacular.com/cdn/equipment_100x100/stock-pot.jpg",
              },
            ],
            length: {
              number: 3,
              unit: "minutes",
            },
          },
          {
            number: 2,
            step: "Add garlic and cook for another 1 minute.",
            ingredients: [
              {
                id: 11215,
                name: "garlic",
                localizedName: "garlic",
                image: "garlic.png",
              },
            ],
            equipment: [],
            length: {
              number: 1,
              unit: "minutes",
            },
          },
          {
            number: 3,
            step: "Add Chicken stock, water and salt to pot.",
            ingredients: [
              {
                id: 6172,
                name: "chicken stock",
                localizedName: "chicken stock",
                image: "chicken-broth.png",
              },
              {
                id: 14412,
                name: "water",
                localizedName: "water",
                image: "water.png",
              },
              {
                id: 2047,
                name: "salt",
                localizedName: "salt",
                image: "salt.jpg",
              },
            ],
            equipment: [
              {
                id: 404752,
                name: "pot",
                localizedName: "pot",
                image: "https://spoonacular.com/cdn/equipment_100x100/stock-pot.jpg",
              },
            ],
          },
          {
            number: 4,
            step: "Add potatoes and carrots to stock pot and bring to a boil. Boil until potatoes are fork tender.",
            ingredients: [
              {
                id: 11352,
                name: "potato",
                localizedName: "potato",
                image: "potatoes-yukon-gold.png",
              },
              {
                id: 11124,
                name: "carrot",
                localizedName: "carrot",
                image: "sliced-carrot.png",
              },
              {
                id: 1006615,
                name: "stock",
                localizedName: "stock",
                image: "chicken-broth.png",
              },
            ],
            equipment: [
              {
                id: 404752,
                name: "pot",
                localizedName: "pot",
                image: "https://spoonacular.com/cdn/equipment_100x100/stock-pot.jpg",
              },
            ],
          },
          {
            number: 5,
            step: "Turn burner off and allow to cool until able to remove about  of the potatoes with a slotted spoon to a food processor or blender. Process until potatoes turn into a paste and then add back to the stock pot.",
            ingredients: [
              {
                id: 11352,
                name: "potato",
                localizedName: "potato",
                image: "potatoes-yukon-gold.png",
              },
              {
                id: 1006615,
                name: "stock",
                localizedName: "stock",
                image: "chicken-broth.png",
              },
            ],
            equipment: [
              {
                id: 404771,
                name: "food processor",
                localizedName: "food processor",
                image: "https://spoonacular.com/cdn/equipment_100x100/food-processor.png",
              },
              {
                id: 404636,
                name: "slotted spoon",
                localizedName: "slotted spoon",
                image: "https://spoonacular.com/cdn/equipment_100x100/slotted-spoon.jpg",
              },
              {
                id: 404752,
                name: "pot",
                localizedName: "pot",
                image: "https://spoonacular.com/cdn/equipment_100x100/stock-pot.jpg",
              },
              {
                id: 404726,
                name: "blender",
                localizedName: "blender",
                image: "https://spoonacular.com/cdn/equipment_100x100/blender.png",
              },
            ],
          },
          {
            number: 6,
            step: "Place stock pot back on the burner and on medium heat, add milk, cream, butter and Velveeta cheese and heat until butter and Velveeta is melted. Do not bring to a boil  adjust heat to low as temperature nears boiling. Stir frequently with wooden spoon and scrape bottom of stock pot frequently to prevent sticking.",
            ingredients: [
              {
                id: 1192,
                name: "velveeta cheese",
                localizedName: "velveeta cheese",
                image: "cheddar-cheese.png",
              },
              {
                id: 1001,
                name: "butter",
                localizedName: "butter",
                image: "butter-sliced.jpg",
              },
              {
                id: 1053,
                name: "cream",
                localizedName: "cream",
                image: "fluid-cream.jpg",
              },
              {
                id: 1006615,
                name: "stock",
                localizedName: "stock",
                image: "chicken-broth.png",
              },
              {
                id: 1077,
                name: "milk",
                localizedName: "milk",
                image: "milk.png",
              },
            ],
            equipment: [
              {
                id: 404732,
                name: "wooden spoon",
                localizedName: "wooden spoon",
                image: "https://spoonacular.com/cdn/equipment_100x100/wooden-spoon.jpg",
              },
              {
                id: 404752,
                name: "pot",
                localizedName: "pot",
                image: "https://spoonacular.com/cdn/equipment_100x100/stock-pot.jpg",
              },
            ],
          },
          {
            number: 7,
            step: "Add sharp cheddar one handful at a time, stirring each time.",
            ingredients: [
              {
                id: 1031009,
                name: "sharp cheddar cheese",
                localizedName: "sharp cheddar cheese",
                image: "cheddar-cheese.png",
              },
            ],
            equipment: [],
          },
          {
            number: 8,
            step: "Add parmesean.",
            ingredients: [],
            equipment: [],
          },
          {
            number: 9,
            step: "Add salt and pepper to taste (will vary greatly depending on types of cheese you use  so add a little, taste, repeat).",
            ingredients: [
              {
                id: 1102047,
                name: "salt and pepper",
                localizedName: "salt and pepper",
                image: "salt-and-pepper.jpg",
              },
              {
                id: 1041009,
                name: "cheese",
                localizedName: "cheese",
                image: "cheddar-cheese.png",
              },
            ],
            equipment: [],
          },
          {
            number: 10,
            step: "Serve in bread bowl, soup bowl or mug.",
            ingredients: [
              {
                id: 99169,
                name: "bread bowls",
                localizedName: "bread bowls",
                image: "https://spoonacular.com/cdn/ingredients_100x100/bread-bowl.png",
              },
              {
                id: 0,
                name: "soup",
                localizedName: "soup",
                image: "",
              },
            ],
            equipment: [
              {
                id: 404783,
                name: "bowl",
                localizedName: "bowl",
                image: "https://spoonacular.com/cdn/equipment_100x100/bowl.jpg",
              },
            ],
          },
          {
            number: 11,
            step: "Garnish with bacon crumbles, chives, sour cream and shredded cheese.",
            ingredients: [
              {
                id: 1011026,
                name: "shredded cheese",
                localizedName: "shredded cheese",
                image: "cheddar-cheese.png",
              },
              {
                id: 1056,
                name: "sour cream",
                localizedName: "sour cream",
                image: "sour-cream.jpg",
              },
              {
                id: 11156,
                name: "chives",
                localizedName: "chives",
                image: "fresh-chives.jpg",
              },
              {
                id: 10123,
                name: "bacon",
                localizedName: "bacon",
                image: "https://spoonacular.com/cdn/ingredients_100x100/raw-bacon.png",
              },
            ],
            equipment: [],
          },
        ],
      },
    ],
    spoonacularScore: 52.696044921875,
    spoonacularSourceUrl: "https://spoonacular.com/best-potato-cheese-soup-in-a-bread-bowl-634927",
  };
  console.log(recepie, 111);

  const CardComponent = ({ color, title, data, metric }) => {
    return (
      <div className={`flex flex-col gap-4 bg-${color}-200 py-2 rounded-2xl`}>
        <div className='flex items-center gap-4 px-2'>
          <div className={`flex justify-center items-center bg-black/10 h-10 w-10 rounded-full`}>
            <Zap className='h-4 w-4 top-50 left-50 text-white' strokeWidth={1.5} />
          </div>
          <p>{title}</p>
        </div>
        <p className='flex  items-center gap-4 px-2'>
          {data} {metric}
        </p>
      </div>
    );
  };

  return (
    <div className='relative overflow-hidden rounded-lg'>
      <span className='absolute inset-0 bg-black/30' />
      <Image src={dummy?.image} alt='Example local image' width={500} height={500} className='w-full object-fit' priority />
      <div className='absolute bottom-0 left-0 flex items-start justify-between gap-5 h-[70%] bg-white rounded-xl w-full p-5 z-99'>
        <div className='flex gap-5'>
          <CardComponent color='blue' title='Calories' data={recepie?.calories} metric='cal' />
        </div>
        <div>vegetarian</div>
      </div>
    </div>
  );
};

export default MealView;
