import { useTour } from "../../context/TourContext";
import { useTranslation } from "react-i18next";

const BookingEmail = () => {
  const { i18n } = useTranslation();
  const { selectedTour, booking: { kids, passengers, price, pricePerPerson, pricePerKid, user: { userName, lastName, email, phoneNumber }, startDate, endDate } } = useTour();
  const startTourDate = new Date(startDate);
  const endTourDate = new Date(endDate);

  const subjectEmail = i18n.t('bookingEmail.subject', { tourTitle: selectedTour.title });

  const bodyEmail = `
  ${i18n.t('bookingEmail.greeting')}

    ${i18n.t('bookingEmail.intro', { tourTitle: selectedTour.title })}
    ${i18n.t('bookingEmail.mainContact', { fullName: userName + " " + lastName, phone: phoneNumber })}
    ${i18n.t('bookingEmail.participants', { count: kids.length + passengers.length })}
    
    ${i18n.t('bookingEmail.participantsDetails')}:
    ${[...passengers, ...kids].map((passenger) =>
    `      ${i18n.t('bookingEmail.participantLine', {
      fullName: passenger.userName + ' ' + passenger.lastName,
      passport: passenger.passportID
    })}`
  ).join("\n")
    }

    ${i18n.t('bookingEmail.childrenIncluded')}: ${kids.length > 0 ? i18n.t('bookingEmail.yes') : i18n.t('bookingEmail.no')}
    ${i18n.t('bookingEmail.pricePerPerson')}: $${pricePerPerson}
    ${kids.length > 0 ? i18n.t('bookingEmail.pricePerKid', { price: pricePerKid }) : ''}
    ${i18n.t('bookingEmail.totalPrice')}: $${price}
    \n
    ${i18n.t('bookingEmail.tourStartDate')}: ${startTourDate.getDate()}/${startTourDate.getMonth() + 1}/${startTourDate.getFullYear()}
    ${i18n.t('bookingEmail.tourEndDate')}: ${endTourDate.getDate()}/${endTourDate.getMonth() + 1}/${endTourDate.getFullYear()}
    \n
    ${i18n.t('bookingEmail.closingMessage')}
    ${i18n.t('bookingEmail.signature')}
    ${userName + " " + lastName}
  `;

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
        <a
          href={`mailto:info@paticascr.com?subject=${encodeURIComponent(subjectEmail)}&body=${encodeURIComponent(bodyEmail)}`}
          className="no-underline text-white text-xs hover:text-gray-800 transition-colors"
        >
          {i18n.t("reserve")}
        </a>
      </button>
    </section >
  )
}

export default BookingEmail;