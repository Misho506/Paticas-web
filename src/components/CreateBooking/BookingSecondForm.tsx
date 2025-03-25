import CustomInputWithErrorMessage from "../customInputWithErrorMessage/CustomInputWithErrorMessage";
import { ChangeEvent, FormEvent, useState } from "react";
import { PassengerInfo, BookingFormProps, FormError } from "../../utils/types";
import { z } from "zod";
import { useTour } from "../../context/TourContext";
import { useTranslation } from "react-i18next";

type inputType = {
  title: string,
  name: 'userName' | 'lastName' | 'passportID',
};

const BookingSecondForm = ({ setStep, actions }: BookingFormProps) => {
  const { i18n } = useTranslation();
  // Zod validation schema
  const passengerInfoValidation = z.object({
    userName: z.string({
      invalid_type_error: i18n.t("formErrors.userName.required"),
    }).min(1, { message: i18n.t("formErrors.userName.required") }),
    lastName: z.string({
      required_error: i18n.t("formErrors.lastName.required"),
    }).min(1, { message: i18n.t("formErrors.lastName.required") }),
    passportID: z.string({
      required_error: i18n.t("formErrors.passportId.required")
    }).min(1, { message: i18n.t("formErrors.passportId.required") })
  });

  const formFields: Array<inputType> = [
    {
      name: 'userName',
      title: i18n.t("name")
    },
    {
      name: 'lastName',
      title: i18n.t("lastName")
    },
    {
      name: 'passportID',
      title: i18n.t("passportId")
    },
  ];
  const { booking, setBooking } = useTour();
  const [kids, setKids] = useState<PassengerInfo[]>(
    [...Array(booking.kids.length)].map(() => ({
      userName: "",
      lastName: "",
      passportID: ""
    }))
  );
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

    kids.forEach((kid, index) => {
      const kidErrors = validatePassenger(kid, index);
      allErrors.push(...kidErrors);
    });
    return allErrors;
  };

  const updateFormValues = (e: ChangeEvent<HTMLInputElement>, id: string, position: number, isKid: boolean) => {
    const updatedList = isKid ? kids : passengers;
    const { name, value } = e.target;
    if (formErrors && formErrors.length > 0) {
      setFormErrors([...formErrors.filter((error) => error.id !== id)]);
    }
    const updatedData = updatedList.map((element, index) =>
      index === position
        ? { ...element, [name]: value }
        : element
    );
    isKid ? setKids(updatedData) : setPassengers(updatedData)
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
      setBooking({ ...booking, passengers, kids });
      setStep(prevStep => prevStep + 1);
    }
  };

  const createFormInputs = (field: inputType, index: number, passenger: PassengerInfo, isKid: boolean) => {
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
        onChange={(e) => updateFormValues(e, id, index, isKid)}
      />,
      true,
      errorForField?.error && <label className="text-red-600">{errorForField?.error}</label>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {passengers.map((passenger, index) => (
        <section key={index}>
          <h4 className="italic">{i18n.t('traveler')} {index === 0 ? i18n.t("principal") : "" + (index + 1)}</h4>
          {formFields.map((field) => createFormInputs(field, index, passenger, false))}
        </section>
      ))}
      {kids.map((passenger, index) => (
        <section key={index}>
          <h4 className="italic">{i18n.t('kid')} {index + 1}</h4>
          {formFields.map((field) => createFormInputs(field, index, passenger, true))}
        </section>
      ))}
      {actions}
    </form>
  )
};

export default BookingSecondForm;