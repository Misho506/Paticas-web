import React, { createContext, useState, ReactNode, useContext, useEffect } from 'react';

import { BookingTourType, CategoryType, StoredDataType, TourType } from '../utils/types';
import { allTours } from "../utils/hardCodedData/categories/tours";
import { getCategoriesData } from '../utils/hardCodedData/categories';
import { useTranslation } from 'react-i18next';

interface TourContextType {
  selectedCategory: CategoryType;
  setSelectedCategory: (tour: CategoryType) => void;
  categories: CategoryType[];
  // Tours
  selectedTour: TourType;
  setSelectedTour: (tour: TourType) => void;
  tours: Array<TourType>;
  // Booking
  booking: BookingTourType;
  setBooking: (booking: BookingTourType) => void;
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
  daysAndNights: "",
  days: 0,
  about: "",
  photos: [""],
  activities: [""],
  includes: [""],
  itinerary: [{ title: "", description: "" }],
  prices: [{ price: 0, numberOfPeople: 0 }],
  childsPrice: 0
}

const bookingInitialValue = {
  passengers: [],
  kids: [],
  startDate: new Date(),
  endDate: new Date(),
  price: 0,
  pricePerPerson: 0,
  pricePerKid: 0,
  user: {
    userName: "",
    lastName: "",
    email: "",
    phone: "",
  }
}

export const TourProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { i18n } = useTranslation();
  // Initialize state with data from localStorage or default values
  // CATEGORY
  const categoriesData = getCategoriesData(i18n.t);
  const [categories] = useState(categoriesData);
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>(() => {
    const storedData = localStorage.getItem('storedData');
    if (storedData) {
      const parsedData: StoredDataType = JSON.parse(storedData);
      return parsedData.selectedCategory || categoryInitialValue;
    }
    return categoryInitialValue;
  });

  // TOUR
  const [tours] = useState(allTours(i18n.t));
  const [selectedTour, setSelectedTour] = useState<TourType>(() => {
    const storedData = localStorage.getItem('storedData');
    if (storedData) {
      const parsedData: StoredDataType = JSON.parse(storedData);
      return parsedData.selectedTour || tourInitialValue;
    }
    return tourInitialValue;
  });

  // Booking
  const [booking, setBooking] = useState<BookingTourType>(() => {
    const storedData = localStorage.getItem('storedData');
    if (storedData) {
      const parsedData: StoredDataType = JSON.parse(storedData);
      return parsedData.booking || bookingInitialValue;
    }
    return bookingInitialValue;
  });

  // Update localStorage whenever selected values change
  useEffect(() => {
    const dataToStore: StoredDataType = {
      selectedCategory,
      selectedTour,
      booking,
    };
    localStorage.setItem('storedData', JSON.stringify(dataToStore));
  }, [selectedCategory, selectedTour, booking]);

  return (
    <TourContext.Provider
      value={{
        selectedCategory,
        setSelectedCategory,
        categories,
        selectedTour,
        setSelectedTour,
        tours,
        booking,
        setBooking
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