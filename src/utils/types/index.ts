import { ChangeEvent, ReactNode } from "react";

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
}

type BookingTourType = {
  passengers: Array<PassengerInfo>;
  date: Date;
  price: number;
  pricePerPerson: number;
  user: UserInfo;
}

type FormFieldsType = {
  name: string;
  type: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  id: string;
  placeholder: string;
}

type FormError = {
  id: string;
  error: string;
}

type UserInfo = {
  userName: string;
  lastName: string;
  email?: string;
  phoneNumber?: string;
};

interface PassengerInfo extends UserInfo {
  passportID: string;
}

type FormField = {
  name: keyof UserInfo;
  type: string;
  title: string;
};

type BookingFormProps = {
  setStep(step: (prev: number) => number): void;
  actions: ReactNode;
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
  FormFieldsType,
  FormError,
  UserInfo,
  FormField,
  BookingFormProps,
  PassengerInfo
}