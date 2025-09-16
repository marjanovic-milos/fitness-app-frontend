import { Banknote, Users, Dumbbell, Apple, LayoutDashboard, Gauge } from "lucide-react";

export const TRAINER_URLS = [
  {
    url: "/trainer",
    icon: Gauge,
    label: "Dashboard",
  },
  {
    url: "/trainer/excercises",
    icon: Dumbbell,
    label: "Excercises",
  },
  {
    url: "/trainer/meal-plans",
    icon: Apple,
    label: "Meal Plans",
  },
  {
    url: "/trainer/users",
    icon: Users,
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
