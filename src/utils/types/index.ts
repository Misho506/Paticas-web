import { ReactNode } from "react";

type BannerType = {
  image: string;
  title: string;
  description: string;
  goToLink: string;
}
type SubCategory = {
  img: string;
  title: string;
  places: Array<string>;
  link: string;
  itinerary: string;
  description: string;
}

type ReviewType = {
  userName: string;
  details: string;
  date: Date;
  from: string;
}

type BlogsType = {
  picture: string;
  title: string;
  date: string;
  readingTime: string;
  description: string;
}

type PostCarrouselProps = {
  postList: Array<ReactNode>;
}

type SubCategoryCardProps = {
  img: string;
  title: string;
  places: Array<string>;
  link: string;
  itinerary: string;
  description: string;
  showExtraInfo?: boolean;
}


export type {
  BannerType,
  SubCategory,
  ReviewType,
  BlogsType,
  PostCarrouselProps,
  SubCategoryCardProps
}