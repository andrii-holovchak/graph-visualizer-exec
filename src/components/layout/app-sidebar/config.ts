import {
  ChartNoAxesGantt,
  Cuboid,
  FileText,
  LayoutTemplate,
  type LucideProps,
  Minimize,
  TriangleAlert,
  Unplug,
} from "lucide-react";
import { type FC } from "react";
import { ROUTES } from "@/constants/routes";

interface NavigationLink {
  url: string;
  title: string;
  icon: FC<LucideProps>;
}

export const NAVIGATION_LINKS: NavigationLink[] = [
  {
    title: "Lorem 0",
    url: ROUTES.BLOG,
    icon: LayoutTemplate,
  },
  {
    title: "Lorem 1",
    url: ROUTES.ABOUT,
    icon: TriangleAlert,
  },
  {
    title: "Lorem 2",
    url: ROUTES.CONTACT,
    icon: Cuboid,
  },
  {
    title: "Lorem 3",
    url: ROUTES.HOME,
    icon: Minimize,
  },
  {
    title: "Lorem 4",
    url: ROUTES.DASHBOARD,
    icon: Unplug,
  },
  {
    title: "Lorem 5",
    url: ROUTES.USER,
    icon: FileText,
  },
  {
    title: "Lorem 6",
    url: ROUTES.CHARTS,
    icon: ChartNoAxesGantt,
  },
];
