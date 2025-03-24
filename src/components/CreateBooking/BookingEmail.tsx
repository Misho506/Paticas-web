import { useTour } from "../../context/TourContext";
import { useTranslation } from "react-i18next";

const BookingEmail = () => {
  const { i18n } = useTranslation();
  const { selectedTour, booking: { kids, passengers, price, pricePerPerson, pricePerKid, user: { userName, lastName, email }, startDate, endDate } } = useTour();
  const startTourDate = new Date(startDate);
  const endTourDate = new Date(endDate);
  return (
    <section>
      {/* Contact Step (Showing Reservation Information) */}
      <>
        <section className="mb-8">
          <h1 className="text-2xl font-bold mb-6">{i18n.t("bookingInfo")}</h1>
          <ul className="space-y-3">
            <li className="text-md">{i18n.t("completeName")}: <span className="italic">{userName} {lastName}</span></li>
            <li className="text-md">{i18n.t("email")}: <span className="italic">{email}</span></li>
            <li className="text-md">{i18n.t("startDate")}: <span className="italic">{startTourDate.getDate()}/{startTourDate.getMonth()}/{startTourDate.getFullYear()}</span></li>
            <li className="text-md">{i18n.t("endDate")}: <span className="italic">{endTourDate.getDate()}/{endTourDate.getMonth()}/{endTourDate.getFullYear()}</span></li>
            <li className="text-md">{i18n.t("travelers")}: <span className="italic">{passengers.length + kids.length}</span></li> {/* TODO CHECK THIS!!! */}
            <li className="text-md">{i18n.t("tour")}: <span className="italic">{selectedTour.title}</span></li>
          </ul>
        </section>
        <hr />
        {/* Passenger Details */}
        <section className="space-y-6 mb-8">
          {passengers.map((passenger, index) => (
            <article key={index} className="space-y-3">
              <h2 className="text-2xl font-bold list-disc" >{i18n.t('traveler')} {index + 1}</h2>
              <ul>
                <li>{i18n.t("name")}: <span className="italic">{passenger.userName} {passenger.lastName}</span></li>
                <li>{i18n.t('passportId')}: <span className="italic">{passenger.passportID}</span></li>
              </ul>
            </article>
          ))}{kids.map((kid, index) => (
            <article key={index} className="space-y-3">
              <h2 className="text-2xl font-bold list-disc" >{i18n.t('kid')} {index + 1}</h2>
              <ul>
                <li>{i18n.t("name")}: <span className="italic">{kid.userName} {kid.lastName}</span></li>
                <li>{i18n.t('passportId')}: <span className="italic">{kid.passportID}</span></li>
              </ul>
            </article>
          ))}
        </section>
        <hr />
        <section className="mb-8">
          <h1 className="text-2xl font-bold mb-6">{i18n.t("investment")}</h1>
          <ul className="space-y-3">
            <li className="text-md">{i18n.t("pricePerPerson")}: <span className="italic">${pricePerPerson}.00</span></li>
            <li className="text-md">{i18n.t("pricePerKid")}: <span className="italic">${pricePerKid}.00</span></li>
            <li className="text-md">{i18n.t("totalPrice")}: <span className="italic">${price}.00</span></li>
          </ul>
        </section>
        <hr />

        {/* Confirmation Message */}
        <article className="mb-6">
          <p className="text-xs text-gray-600 italic">*{i18n.t("bookingNote")}</p>
        </article>
      </>
      <button className="w-2/5 bg-[#1B2821] text-white py-3 px-6 rounded-full m-auto flex justify-center ">
        {i18n.t("reserve")}
      </button>
    </section >
  )
}

export default BookingEmail;