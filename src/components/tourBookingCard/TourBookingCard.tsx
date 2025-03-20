import { useEffect, useState } from "react";
import { PiUsersBold } from "react-icons/pi";
import { LuCalendarClock } from "react-icons/lu";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'
import { useTranslation } from "react-i18next";

import "./TourBookingCard.css";
import { useTour } from "../../context/TourContext";
import { useNavigate } from "react-router";

const TourBookingCard = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const [date, setDate] = useState<Date>(new Date());
  const [people, setPeople] = useState(2);
  const { selectedTour, selectedCategory, setBooking } = useTour();
  const [pricePerPerson, setPricePerPerson] = useState<number>(selectedTour.prices[0].price);

  useEffect(() => {
    setPricePerPerson(selectedTour.prices.find(({ numberOfPeople }) => people <= (numberOfPeople + 1))?.price || 0);
  }, [people, selectedTour.prices]);

  const goToBooking = () => {
    setBooking({
      passengers: [...Array(people)].map(() => ({ userName: "", lastName: "", passportID: "" })),
      date,
      price: pricePerPerson * people,
      pricePerPerson: pricePerPerson,
      user: {
        userName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
      },
    });
    navigate("/tour/booking");
  }

  const addSymbolsToPrice = (num: string): string => {
    let updatedPrice: string = num.slice(0, num.length - 3) + "," + num.slice(num.length - 3);;
    return updatedPrice;
  }

  return (
    <div className="tour-booking-card-container">
      <h2 className="text-xl font-semibold text-gray-900 self-start">
        {selectedCategory.title}
      </h2>

      <section className="flex items-center gap-3 mb-3">
        <article className="flex-1 relative border rounded-full">
          <LuCalendarClock className="z-10 absolute h-5 w-5 top-2.5 left-3" />
          <DatePicker className="w-full rounded-full pl-9 pr-4 py-2 border border-black" selected={date} onChange={(date) => setDate(date as Date)} />
        </article>

        <article className="flex-none relative">
          <PiUsersBold className="z-10 absolute h-5 w-5 top-2.5 left-3" />
          <input
            type="number"
            className="rounded-full pl-9 pr-4 py-2 border border-black"
            placeholder="Number of people"
            min={2}
            max={6}
            value={people}
            onChange={(e) => setPeople(parseInt(e.target.value))}
          />
        </article>
      </section>

      <div className="box-shadow-gray p-4 rounded-3xl space-y-3 border-1 border-black">
        <h4 className="font-medium">
          {selectedTour.title}
        </h4>

        <h4 className="text-lg italic">
          {people} {i18n.t("adults")} X USD ${addSymbolsToPrice(JSON.stringify(pricePerPerson))}.00
        </h4>

        <div className="space-y-1">
          <h4 className="text-lg text-gray-600">
            Total ${addSymbolsToPrice(JSON.stringify(pricePerPerson * people))}.00
          </h4>
          <span className="text-xs">
            ${selectedTour.childsPrice} {i18n.t("childrensText")}
          </span>
          <span className="text-xs">
            ({i18n.t("noTaxes")})
          </span>
        </div>
      </div>

      {/* Book Now Button */}
      <button onClick={goToBooking} className="booking-button flex justify-self-center items-center my-5 px-3 py-2 mx-auto text-xl rounded-full border-1 border-black">
        {i18n.t("reserveNow")}
      </button>
    </div>
  );
};

export default TourBookingCard;