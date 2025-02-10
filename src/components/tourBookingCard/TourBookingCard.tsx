import { useEffect, useState } from "react";
import { PiUsersBold } from "react-icons/pi";
import { LuCalendarClock } from "react-icons/lu";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'

import "./TourBookingCard.css";
import { useTour } from "../../context/TourContext";

const TourBookingCard = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [persons, setPersons] = useState(2);
  const { selectedTour } = useTour();
  const [pricePerPerson, setPricePerPerson] = useState<number>(selectedTour.prices[0].price);
  console.log(selectedTour.prices);
  useEffect(() => {
    let correctPrice = selectedTour.prices.find(({ numberOfPeople }) => persons <= (numberOfPeople + 1))
    console.log(correctPrice);
    setPricePerPerson(correctPrice?.price || 0);
  }, [persons, selectedTour.prices]);

  return (
    <div className="tour-booking-card-container">
      <h2 className="text-xl font-semibold text-gray-900 self-start">
        Tour:
        <br />
        Biodiversidad de Costa Rica
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
            placeholder="Number of persons"
            min={2}
            max={6}
            value={persons}
            onChange={(e) => setPersons(parseInt(e.target.value))}
          />
        </article>
      </section>

      <div className="box-shadow-gray p-4 rounded-3xl space-y-3 border-1 border-black">
        <h4 className="font-medium">
          Expedición Fotográfica: Vida Silvestre en Corcovado
        </h4>

        <h4 className="text-lg italic">
          2 adultos X USD ${pricePerPerson}
        </h4>

        <div className="space-y-1">
          <h4 className="text-lg text-gray-600">
            Total ${pricePerPerson * persons}
          </h4>
          <span className="text-xs">
            (No additional taxes or booking fees)
          </span>
        </div>
      </div>

      {/* Book Now Button */}
      <button className="booking-button flex justify-self-center items-center my-5 px-3 py-2 text-xl rounded-full border-1 border-black">
        Reservar ahora
      </button>
    </div>
  );
};

export default TourBookingCard;