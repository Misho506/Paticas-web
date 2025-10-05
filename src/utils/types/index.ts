import { ChangeEvent, ReactNode } from "react";

type ID = string | number;

type BannerType = {
  image: string;
  title: string;
  description: string;
};

type BreadcrumbType = {
  title: string;
  id: string;
  url: string;
}

type BlogType = {
  id: ID;
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
  id: ID;
  title: string;
  shortTitle: string;
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
  id: ID;
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

type MessageFormField = {
  name: "userName" | "email" | "description";
  type: string;
  title: string;
};

interface PassengerInfo extends UserInfo {
  passportID: string;
}

type PathObject = {
  name: string;
  link: string;
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

type StoredDataTypeContextBlog = {
  selectedBlog: BlogType;
  blogs: Array<BlogType>;
};

type StoredDataTypeContextTour = {
  selectedCategory: CategoryType;
  categories: Array<CategoryType>;
  selectedTour: TourType;
  tours: Array<TourType>;
  booking: BookingTourType;
};

type TourType = {
  id: ID;
  img: string;
  title: string;
  shortTitle: string;
  places?: Array<string>;
  daysAndNights: string;
  days: number;
  description: string;
  about: string;
  photos: Array<string>;
  includes: Array<string>;
  itinerary: Array<ItineraryType>;
  prices: Array<PriceType>;
  childsPrice: number;
  peekLink: string;
  aproxHours?: string;
  suggestedTours?: Array<string>;
};

type UserInfo = {
  userName: string;
  lastName: string;
  email?: string;
  phoneNumber?: string;
};

export type {
  BannerType,
  BreadcrumbType,
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
  MessageFormField,
  PassengerInfo,
  PathObject,
  PostCarrouselProps,
  PriceType,
  ReviewType,
  Stat,
  StepType,
  StoredDataTypeContextBlog,
  StoredDataTypeContextTour,
  TourType,
  UserInfo,
};
