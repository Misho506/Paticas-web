import React, { createContext, useState, ReactNode, useContext } from 'react';

import { CategoryType, TourType } from '../utils/types';
import CatrogiresData from "../utils/hardCodedData/categories";
import { allTours } from "../utils/hardCodedData/categories/tours";

interface TourContextType {
  selectedCategory: CategoryType;
  setSelectedCategory: (tour: CategoryType) => void;
  categories: CategoryType[];
  // Tours
  selectedTour: TourType;
  setSelectedTour: (tour: TourType) => void;
  tours: Array<TourType>;
}

const TourContext = createContext<TourContextType | undefined>(undefined);

const categoryInitialValue = {
  title: "",
  image: "",
  description: "",
  tours: [],
};
const tourInitialValue = {
  img: "",
  title: "",
  places: [],
  description: "",
  subTitle: "",
  daysAndNights: "",
  about: "",
  photos: [""],
  activities: [""],
  includes: [""],
  itinerary: [{ title: "", description: "" }],
  prices: [{ price: 0, numberOfPeople: 0 }],
}

export const TourProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>(categoryInitialValue);
  const [categories] = useState<CategoryType[]>(CatrogiresData);
  // Tours
  const [selectedTour, setSelectedTour] = useState<TourType>(tourInitialValue);
  const [tours] = useState<Array<TourType>>(allTours);

  return (
    <TourContext.Provider
      value={{
        selectedCategory,
        setSelectedCategory,
        categories,
        selectedTour,
        setSelectedTour,
        tours,
      }}>
      {children}
    </TourContext.Provider>
  );
};

export const useTour = () => {
  const context = useContext(TourContext);
  if (context === undefined) {
    throw new Error('useTour must be used within a TourProvider');
  }
  return context;
};