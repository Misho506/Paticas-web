import { ReactNode } from "react";

type BannerType = {
  image: string;
  title: string;
  description: string;
}
type TourType = {
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

type TourCardProps = {
  img: string;
  title: string;
  places: Array<string>;
  itinerary: string;
  description: string;
  showDescription?: boolean;
}

type CategoryType = {
  title: string;
  image: string;
  description: string;
  tours: Array<TourType>
}

export type {
  BannerType,
  TourType,
  ReviewType,
  BlogsType,
  PostCarrouselProps,
  TourCardProps,
  CategoryType
}