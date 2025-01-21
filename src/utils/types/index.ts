import { ReactNode } from "react";

type BannerType = {
  image: string;
  title: string;
  description: string;
}

type PriceType = {
  price: number;
  numberOfPeople: number;
}

type ItineraryType = {
  title: string;
  description: string;
}

type TourType = {
  img: string;
  title: string;
  subTitle: string;
  places: Array<string>;
  daysAndNights: string;
  description: string;
  about: string;
  photos: Array<string>;
  activities: Array<string>;
  includes: Array<string>;
  itinerary: Array<ItineraryType>;
  prices: Array<PriceType>;
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

interface TourCardProps extends TourType {
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