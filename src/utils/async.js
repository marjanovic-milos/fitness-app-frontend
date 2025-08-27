import { handleError } from "./handleError";

export const asyncHandler =
  (fn) =>
  async (...args) => {
    try {
      return await fn(...args);
    } catch (error) {
      handleError(error);
      console.error(error);
      throw error;
    }
  };
