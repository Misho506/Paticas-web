import CustomInputWithErrorMessage from "../customInputWithErrorMessage/CustomInputWithErrorMessage";
import { ChangeEvent, FormEvent, useState } from "react";
import { PassengerInfo, BookingFormProps, FormError } from "../../utils/types";
import { z } from "zod";
import { useTour } from "../../context/TourContext";

type inputType = {
  title: string,
  name: 'userName' | 'lastName' | 'passportID',
};
// Zod validation schema
const passengerInfoValidation = z.object({
  userName: z.string({
    required_error: "El nombre es requerido",
    invalid_type_error: "El nombre debe ser un texto",
  }).min(1, { message: "El nombre es requerido" }),
  lastName: z.string({
    required_error: "El apellido es requerido",
    invalid_type_error: "El apellido debe ser un texto",
  }).min(1, { message: "El apellido es requerido" }),
  passportID: z.string({
    required_error: "El número de pasaporte es requerido"
  }).min(1, { message: "El número de pasaporte es requerido" })
});

const formFields: Array<inputType> = [
  {
    name: 'userName',
    title: 'Nombre',
  },
  {
    name: 'lastName',
    title: 'Apellido',
  },
  {
    name: 'passportID',
    title: 'Número de pasaporte',
  },
];


const BookingSecondForm = ({ setStep, actions }: BookingFormProps) => {
  const { booking, setBooking } = useTour();
  const [passengers, setPassengers] = useState<PassengerInfo[]>(
    [...Array(booking.passengers.length)].map(() => ({
      userName: "",
      lastName: "",
      passportID: ""
    }))
  );
  const [formErrors, setFormErrors] = useState<FormError[] | null>(null);

  // Validate a single passenger's data
  const validatePassenger = (passenger: PassengerInfo, index: number): FormError[] => {
    const result = passengerInfoValidation.safeParse(passenger);
    if (!result.success) {
      return Object.entries(result.error.formErrors.fieldErrors).flatMap(([field, errors]) => {
        if (errors) {
          return errors.map(error => ({
            id: `${field}-${index}`,
            error: error
          }));
        } else return [];
      });
    } else return [];
  };

  // Validate all passengers' data
  const validateForm = (): FormError[] => {
    const allErrors: FormError[] = [];

    passengers.forEach((passenger, index) => {
      const passengerErrors = validatePassenger(passenger, index);
      allErrors.push(...passengerErrors);
    });

    return allErrors;
  };

  const updateFormValues = (e: ChangeEvent<HTMLInputElement>, id: string, position: number) => {
    const { name, value } = e.target;
    if (formErrors && formErrors.length > 0) {
      setFormErrors([...formErrors.filter((error) => error.id !== id)]);
    }
    const updatedData = passengers.map((element, index) =>
      index === position
        ? { ...element, [name]: value }
        : element
    );
    setPassengers(updatedData);
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (validationErrors.length > 0) {
      setFormErrors(validationErrors);
      return;
    }
    setFormErrors(null);
    if (setStep) {
      setBooking({ ...booking, passengers: passengers });
      setStep(prevStep => prevStep + 1);
    }
  };

  const createFormInputs = (field: inputType, index: number, passenger: PassengerInfo) => {
    const { name, title } = field;
    const id = `${name}-${index}`;

    const errorForField = formErrors?.find((error) => error.id === id);
    const inputClassName = `${errorForField ? "border-error" : "border border-gray-300 mb-3"} w-full px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500`;

    return CustomInputWithErrorMessage(
      title,
      <input
        type="text"
        name={name}
        id={id}
        className={inputClassName}
        value={passenger[name as keyof PassengerInfo]}
        onChange={(e) => updateFormValues(e, id, index)}
      />,
      true,
      errorForField?.error && <label className="text-red-600">{errorForField?.error}</label>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {passengers.map((passenger, index) => (
        <section key={index}>
          <h4 className="italic">Viajero {index === 0 ? "Principal" : "" + (index + 1)}</h4>
          {formFields.map((field) => createFormInputs(field, index, passenger))}
        </section>
      ))}
      {actions}
    </form>
  )
};

export default BookingSecondForm;