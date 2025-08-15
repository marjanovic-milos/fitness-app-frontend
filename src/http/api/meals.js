import http from "..";
import { asyncHandler } from "src/utils/async";
const ignorefileds = "fields=-ownerId,-created,-spoonacularId";

export const getSavedMeals = asyncHandler(async ({ page, limit = 5, sort }) => {
  const res = await http.get(
    `/meals?page=${page}&limit=${limit}&${ignorefileds}&sort=${sort}`,
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
      skipAuth: false,
    }
  );
  return request;
});

export const updateMeal = asyncHandler(async (params) => {
  const { data, actionId } = params;

  const request = await http.put(
    `/meals/${actionId}`,
    {
      ...data,
    },
    {
      skipAuth: false,
    }
  );
  return request;
});
