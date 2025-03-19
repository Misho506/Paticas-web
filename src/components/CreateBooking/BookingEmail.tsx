import { useTour } from "../../context/TourContext";

const BookingEmail = () => {
  const { selectedTour, booking: { passengers, price, user: { userName, lastName, email }, date } } = useTour();
  const tourDate = new Date(date);
  return (
    <section>
      {/* Contact Step (Showing Reservation Information) */}
      <>
        <section className="mb-8">
          <h1 className="text-2xl font-bold mb-6">Información de la reservación</h1>
          <ul className="space-y-3">
            <li className="text-md">Nombre Completo: <span className="italic">{userName} {lastName}</span></li>
            <li className="text-md">Email: <span className="italic">{email}</span></li>
            <li className="text-md">Fecha: <span className="italic">{tourDate.getDate()}/{tourDate.getMonth()}/{tourDate.getFullYear()}</span></li>
            <li className="text-md">Pasajeros: <span className="italic">#{passengers.length}</span></li>
            <li className="text-md">Precio: <span className="italic">{price}</span></li>
          </ul>
        </section>
        <hr />
        {/* Passenger Details */}
        <section className="space-y-6 mb-8">
          {passengers.map((passenger, index) => (
            <article key={index} className="space-y-3">
              <h2 className="text-2xl font-bold list-disc" >Pasajero {index + 1}</h2>
              <ul>
                <li>Nombre: <span className="italic">{passenger.userName} {passenger.lastName}</span></li>
                <li>Pasaporte: <span className="italic">{passenger.passportID}</span></li>
              </ul>
            </article>
          ))}
        </section>
        <hr />
        {/* Tour Details */}
        <section className="space-y-6 mb-8">
          <article className="space-y-3">
            <h2 className="text-2xl font-bold list-disc" >{selectedTour.title}</h2>
            <ul>
              {selectedTour.itinerary.map((item, index) => (
                <li className="mb-4" key={index}>{item.title}: <br /><span className="italic">{item.description}</span></li>
              ))}
            </ul>
          </article>
        </section>
        <hr />
        {/* Confirmation Message */}
        <article className="mb-6">
          <p className="text-xs text-gray-600 italic">*Por favor confirmar la información de la reservación antes de enviar el correo</p>
        </article>
      </>
      <button className="w-2/5 bg-[#1B2821] text-white py-3 px-6 rounded-full m-auto flex justify-center ">
        Reservar
      </button>
    </section >
  )
}

export default BookingEmail;