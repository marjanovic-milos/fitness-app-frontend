import http from "..";
import { asyncHandler } from "src/utils/async";

export const getSavedMeals = asyncHandler(async ({ page, limit = 5 }) => {
  const res = await http.get(
    `/meals?page=${page}&limit=${limit}&fields=-ownerId,-created,-spoonacularId`,
    {
      skipAuth: false,
    }
  );

  return res.data;
});

export const getOneMeal = asyncHandler(async (id) => {
  const res = await http.get(`/meals/${id}`, {
    skipAuth: false,
  });
  return res.data.data;
});

export const deleteMeal = asyncHandler(async (id) => {
  const res = await http.delete(`/meals/${id}`, {
    skipAuth: false,
  });
  return res.data;
});

export const saveMeal = asyncHandler(async (data) => {
  const { image, spoonacularId, title, sourceUrl } = data;
  const request = await http.post(
    "/meals/addMeal",
    {
      image,
      spoonacularId,
      title,
      sourceUrl,
    },
    {
      skipAuth: true,
    }
  );
  return request;
});

export const updateMeal = asyncHandler(async (data) => {
  const request = await http.put(
    "/meals/addMeal",
    {
      data,
    },
    {
      skipAuth: true,
    }
  );
  return request;
});
