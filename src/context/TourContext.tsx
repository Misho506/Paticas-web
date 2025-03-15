import React, { createContext, useState, ReactNode, useContext, useEffect } from 'react';

import { CategoryType, StoredDataType, TourType } from '../utils/types';
import { allTours } from "../utils/hardCodedData/categories/tours";
import CategoriesData from '../utils/hardCodedData/categories';

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
  childsPrice: 0
}

export const TourProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Initialize state with data from localStorage or default values
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>(() => {
    const storedData = localStorage.getItem('storedData');
    if (storedData) {
      const parsedData: StoredDataType = JSON.parse(storedData);
      return parsedData.selectedCategory || categoryInitialValue;
    }
    return categoryInitialValue;
  });

  const [selectedTour, setSelectedTour] = useState<TourType>(() => {
    const storedData = localStorage.getItem('storedData');
    if (storedData) {
      const parsedData: StoredDataType = JSON.parse(storedData);
      return parsedData.selectedTour || tourInitialValue;
    }
    return tourInitialValue;
  });

  const [categories] = useState(CategoriesData);
  const [tours] = useState(allTours);

  // Update localStorage whenever selected values change
  useEffect(() => {
    const dataToStore: StoredDataType = {
      selectedCategory,
      selectedTour,
    };
    localStorage.setItem('storedData', JSON.stringify(dataToStore));
  }, [selectedCategory, selectedTour]);

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