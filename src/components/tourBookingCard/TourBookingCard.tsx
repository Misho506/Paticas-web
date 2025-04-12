import { useEffect, useState } from "react";
import { PiUsersBold } from "react-icons/pi";
import { LuCalendarClock } from "react-icons/lu";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'
import { useTranslation } from "react-i18next";

import "./TourBookingCard.css";
import { useTour } from "../../context/TourContext";
import { useNavigate } from "react-router";
import Modal from "../modal/Modal";

// For the Whales Tour
const minDate = new Date(new Date().getFullYear(), 7, 25); // August 25
const maxDate = new Date(new Date().getFullYear(), 8, 23); // September 23

const TourBookingCard = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const [date, setDate] = useState<Date>(new Date());
  const [people, setPeople] = useState(2);
  const [kids, setKibs] = useState(0);
  const { selectedTour, setBooking } = useTour();
  const [pricePerPerson, setPricePerPerson] = useState<number>(selectedTour.prices[0].price);
  const [endDate, setEndDate] = useState<Date>(new Date());
  const [openModal, setOpenModal] = useState<boolean>(false);

  useEffect(() => {
    const newDate = new Date(date);
    newDate.setDate(date.getDate() + (selectedTour.days - 1));
    setEndDate(newDate);
  }, [date]);

  const goToBooking = () => {
    setBooking({
      passengers: [...Array(people)].map(() => ({ userName: "", lastName: "", passportID: "" })),
      kids: [...Array(kids)].map(() => ({ userName: "", lastName: "", passportID: "" })),
      startDate: date,
      endDate,
      price: pricePerPerson * people + selectedTour.childsPrice * kids,
      pricePerPerson: pricePerPerson,
      pricePerKid: selectedTour.childsPrice,
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

  const changeSelect = (value: number, isPeopleSelector: boolean) => {
    let totalOfPeople = isPeopleSelector ? value + kids : value + people;
    if (totalOfPeople <= 6) {
      isPeopleSelector ? setPeople(value) : setKibs(value);
    } else {
      setOpenModal(true);
    }
  }

  useEffect(() => {
    const foundPrice = selectedTour.prices.find(({ numberOfPeople }) => people === (numberOfPeople))?.price;
    if (foundPrice) setPricePerPerson(foundPrice);
  }, [people, selectedTour.prices]);

  const selector = (name: string, listOfPermitedNumbers: Array<number>) => {
    const isPeopleSelector = name === "people";
    return (<div className="inline-flex items-end mr-4">
      <h3 className="text-lg font-semibold text-gray-900 basis-1/3">{i18n.t(isPeopleSelector ? "adults" : "kids")}:</h3>
      <div className="relative">
        <select
          name={isPeopleSelector ? "people" : "kids"}
          id={isPeopleSelector ? "people" : "kids"}
          disabled={isPeopleSelector && people <= 1}
          value={isPeopleSelector ? people : kids}
          onChange={(event) => changeSelect(parseInt(event.target.value), isPeopleSelector)}
          className="ml-1 appearance-none bg-white border border-black border-gray-300 rounded-full py-2 px-10 w-32 text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300"
        >
          {listOfPermitedNumbers.map(num => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-600">
          <PiUsersBold className="z-10 absolute h-5 w-5 top-2.5 left-3" />
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <svg className="h-4 w-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>)
  }

  const email = <a
    href={`mailto:info@paticascr.com?subject=${encodeURIComponent(i18n.t("generalEmail.subject"))}&body=${encodeURIComponent(i18n.t("generalEmail.body"))}`}
    className="text-gray-600 text-m hover:text-gray-800 transition-colors"
  >
    info@paticascr.com
  </a>

  return (
    <div className="tour-booking-card-container">
      <Modal open={openModal} onClose={setOpenModal} message={<>Sorry! The maximum number of people for online booking is 6. For larger groups, please contact us at {email}</>} title="Hello!" />

      {/* Title of the selected Category */}
      {/* <h2 className="text-xl font-semibold text-gray-900 self-start">
        {selectedCategory.title}
      </h2> */}
      <section className="w-96 flex flex-col mx-auto items-center mb-3 justify-self-center">
        <div className="flex items-end space-x-3 mb-3">
          <h3 className="text-lg font-semibold text-gray-900 basis-1/3">
            {i18n.t("startDate")}:
          </h3>
          <article className="flex-1 relative border rounded-full basis-2/3">
            <LuCalendarClock className="z-10 absolute h-5 w-5 top-2.5 left-3" />
            {selectedTour.title === i18n.t("tours.turtlesAndWhales.title") ?
              <DatePicker minDate={minDate} maxDate={maxDate} className="w-full rounded-full pl-9 pr-4 py-2 border border-black" selected={date} onChange={(date) => setDate(date as Date)} />
              :
              <DatePicker className="w-full rounded-full pl-9 pr-4 py-2 border border-black" selected={date} onChange={(date) => setDate(date as Date)} />
            }
          </article>
        </div>
        <div className="flex items-end space-x-3">
          <h3 className="text-lg font-semibold text-gray-900 basis-1/3">
            {i18n.t("endDate")}:
          </h3>
          <article className="flex-1 relative border rounded-full basis-2/3">
            <LuCalendarClock className="z-10 absolute h-5 w-5 top-2.5 left-3" />
            <DatePicker disabled className="w-full rounded-full pl-9 pr-4 py-2 border border-black" selected={endDate} />
          </article>
        </div>
      </section>
      <section className="w-96 flex mx-auto mb-5 justify-self-center">
        {selector("people", [2, 3, 4, 5, 6])}
        {selector("kids", [0, 1, 2, 3, 4])}
      </section>

      <div className="box-shadow-gray p-4 rounded-3xl space-y-3 border-1 border-black">
        <h4 className="font-medium">
          {selectedTour.title}
        </h4>

        <h4 className="text-lg italic">
          {people} {i18n.t("adults")} X USD ${addSymbolsToPrice(JSON.stringify(pricePerPerson))}.00
        </h4>
        <h4 className="text-lg italic">
          {kids} {i18n.t("kids")} X USD ${selectedTour.childsPrice > 1000 ? addSymbolsToPrice(JSON.stringify(selectedTour.childsPrice)) : selectedTour.childsPrice}.00
        </h4>

        <div className="space-y-1">
          <h4 className="text-lg text-gray-600">
            Total ${addSymbolsToPrice(JSON.stringify((pricePerPerson * people) + (selectedTour.childsPrice * kids)))}.00
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