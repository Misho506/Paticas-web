import { ReactNode } from "react";

type BannerType = {
  image: string;
  title: string;
  description: string;
}
type SubCategoryType = {
  img: string;
  title: string;
  places: Array<string>;
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
  itinerary: string;
  description: string;
  showDescription?: boolean;
}

type TourType = {
  title: string;
  image: string;
  description: string;
  subCategories: Array<SubCategoryType>
}

export type {
  BannerType,
  SubCategoryType,
  ReviewType,
  BlogsType,
  PostCarrouselProps,
  SubCategoryCardProps,
  TourType
}