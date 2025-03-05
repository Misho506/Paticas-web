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
  includes: Array<string>;
  itinerary: Array<ItineraryType>;
  prices: Array<PriceType>;
  childsPrice: number;
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

type StoredDataType = {
  selectedCategory: CategoryType;
  selectedTour: TourType;
  booking: BookingTourType;
}

type StepType = {
  number: number;
  label: string;
  active: boolean;
}

type Person = {
  name: string;
  lastName: string;
  passportID: string;
}

type BookingTourType = {
  people: Array<Person>;
  date: Date;
  price: number;
}


type FormError = {
  name: string;
  error: string;
  id: string;
}

type Founder = {
  name: string;
  title: string;
  bio: string;
  imageSrc: string;
}

type CompanyValues = {
  title: string;
  description: string;
  icon: ReactNode;
  img: string;
}

type Stat = {
  icon: string;
  number: string;
  description: string;
}

export type {
  BannerType,
  TourType,
  ReviewType,
  BlogsType,
  PostCarrouselProps,
  TourCardProps,
  CategoryType,
  StoredDataType,
  StepType,
  BookingTourType,
  Person,
  FormError,
  Founder,
  CompanyValues,
  Stat
}