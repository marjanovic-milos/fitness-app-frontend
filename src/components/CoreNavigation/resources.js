import { Banknote, User, Dumbbell, Soup, LayoutDashboard } from "lucide-react";

export const TRAINER_URLS = [
  {
    url: "/trainer",
    icon: LayoutDashboard,
    label: "Dashboard",
  },
  {
    url: "/trainer/excercises",
    icon: Dumbbell,
    label: "Excercises",
  },
  {
    url: "/trainer/meal-plans",
    icon: Soup,
    label: "Meal Plans",
  },
  {
    url: "/trainer/users",
    icon: User,
    label: "Users",
  },
  // {
  //   url: "/trainer/billing",
  //   icon: Banknote,
  //   label: "Billing",
  // },
];

export const CLIENT_URLS = [
  {
    url: "/client",
    icon: LayoutDashboard,
    label: "Dashboard",
  },
  // {
  //   url: "/client/billing",
  //   icon: Banknote,
  //   label: "Billing",
  // },
];
