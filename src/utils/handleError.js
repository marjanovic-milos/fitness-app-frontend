import { toast } from "react-hot-toast";

export function handleError(error) {
  let message = "Unexpected error occurred";

  if (error instanceof Error) {
    message = error.message;
  } else if (typeof error === "string") {
    message = error;
  }

  toast.error(message);
}
