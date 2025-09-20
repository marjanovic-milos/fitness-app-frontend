import http from "..";
import moment from "moment";
import { asyncHandler } from "src/utils/async";
const ignorefileds = "fields=-ownerId,-userId";

export const getUserMemberships = asyncHandler(
  async ({ page = 1, limit = 5, sort, filter }) => {
    const url = `/memberships?userId=${
      filter?.userId
    }&page=${page}&limit=${limit}&sort=${
      sort ? sort : "-createdAt"
    }&${ignorefileds}`;

    const res = await http.get(url, {
      skipAuth: false,
    });

    return {
      ...res.data,
      data: res.data.data.map((item) => ({
        ...item,
        createdAt: moment(item?.createdAt).format("YYYY-MM-DD"),
        expiryDate: moment(item?.expiryDate).format("YYYY-MM-DD"),
        membership: "",
      })),
    };
  }
);

export const createMembership = asyncHandler(async (data) => {
  const request = await http.post(
    "/memberships",
    {
      ...data,
    },
    {
      skipAuth: false,
    }
  );
  return request;
});
