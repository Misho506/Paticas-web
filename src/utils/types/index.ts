import { ChangeEvent, ReactNode } from "react";

interface PassengerInfo extends UserInfo {
  passportID: string;
}

type BannerType = {
  image: string;
  title: string;
  description: string;
};

type BlogType = {
  picture: string;
  title: string;
  date: string;
  readingTime: string;
  shortDescription: string;
  images: Array<string>;
  listOfTexts: Array<string>; //List of all the paragraph
};

type BookingFormProps = {
  setStep(step: (prev: number) => number): void;
  actions: ReactNode;
};

type BookingTourType = {
  passengers: Array<PassengerInfo>;
  kids: Array<PassengerInfo>;
  startDate: Date;
  endDate: Date;
  price: number;
  pricePerPerson: number;
  pricePerKid: number;
  user: UserInfo;
};

type CategoryType = {
  title: string;
  image: string;
  description: string;
  tours: Array<TourType>;
};

type CompanyValues = {
  title: string;
  description: string;
  icon: ReactNode;
  img: string;
};

type FormError = {
  id: string;
  error: string;
};

type FormField = {
  name: keyof UserInfo;
  type: string;
  title: string;
};

type FormFieldsType = {
  name: string;
  type: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  id: string;
  placeholder: string;
};

type Founder = {
  name: string;
  title: string;
  bio: string;
  imageSrc: string;
};

type ItineraryType = {
  title: string;
  description: string;
  hotelName?: string;
  hotelLink?: string;
  mealsIncluded?: string;
};

type PostCarrouselProps = {
  listLength: number;
  children: ReactNode;
};

type PriceType = {
  price: number;
  numberOfPeople: number;
};

type ReviewType = {
  userName: string;
  details: string;
  date: Date;
  from: string;
};

type Stat = {
  icon: string;
  number: string;
  description: string;
};

type StepType = {
  number: number;
  label: string;
};

type StoredDataTypeContextTour = {
  selectedCategory: CategoryType;
  categories: Array<CategoryType>;
  selectedTour: TourType;
  tours: Array<TourType>;
  booking: BookingTourType;
};

type StoredDataTypeContextBlog = {
  selectedBlog: BlogType;
  blogs: Array<BlogType>
};

type TourType = {
  img: string;
  title: string;
  places: Array<string>;
  daysAndNights: string;
  days: number;
  description: string;
  about: string;
  photos: Array<string>;
  includes: Array<string>;
  itinerary: Array<ItineraryType>;
  prices: Array<PriceType>;
  childsPrice: number;
};

type UserInfo = {
  userName: string;
  lastName: string;
  email?: string;
  phoneNumber?: string;
};

export type {
  BannerType,
  BlogType,
  BookingFormProps,
  BookingTourType,
  CategoryType,
  CompanyValues,
  FormError,
  FormField,
  FormFieldsType,
  Founder,
  ItineraryType,
  PassengerInfo,
  PostCarrouselProps,
  PriceType,
  ReviewType,
  Stat,
  StepType,
  StoredDataTypeContextTour,
  StoredDataTypeContextBlog,
  TourType,
  UserInfo
};
