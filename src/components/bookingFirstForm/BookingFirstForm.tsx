import { ChangeEvent, FormEvent, ReactNode, useState } from "react";
import PhoneInput from 'react-phone-number-input'
import { FormError } from "../../utils/types";
import CustomInputWithErrorMessage from "../customInputWithErrorMessage/CustomInputWithErrorMessage";
import 'react-phone-number-input/style.css'

type BookingFirstFormProps = {
  setStep(step: (prev: number) => number): void;
  actions: ReactNode;
}

const BookingFirstForm = ({ setStep, actions }: BookingFirstFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    phoneNumber: ''
  });
  const [formErrors, setFormErrors] = useState<Array<FormError> | null>(null);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validField = (formNameInput: any, id: string, name: string, error: string): FormError | undefined => {
    if (!formNameInput.trim()) {
      return {
        id,
        name,
        error
      }
    }
    if (name === "email" && !validateEmail(formNameInput)) {
      return {
        id,
        name,
        error: "El correo electrónico no es válido"
      }
    }
    return undefined;
  }

  const submitFirstForm = (e: FormEvent) => {
    e.preventDefault();
    const newErrors: Array<FormError> = validStepOne();
    if (newErrors.length > 0) {
      setFormErrors(newErrors.filter((error): error is FormError => error !== undefined));
    } else {
      setStep((prev: number) => prev + 1);
    }
  }

  const validStepOne = (): Array<FormError> => {
    const errors: Array<FormError | undefined> = [];
    errors.push(validField(formData.name, "1-1", "name", "El nombre es requerido") as FormError);
    errors.push(validField(formData.lastName, "1-2", "lastName", "El apellido es requerido") as FormError);
    errors.push(validField(formData.email, "1-3", "email", "El correo electrónico es requerido") as FormError);
    errors.push(validField(formData.phoneNumber, "1-4", "phoneNumber", "El número de teléfono es requerido") as FormError);
    return errors.filter((error): error is FormError => error !== undefined);
  }

  const updateFormValues = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (formErrors && formErrors.length > 0) {
      setFormErrors([...formErrors.filter((error) => error.name !== name)]);
    }
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form onSubmit={submitFirstForm} className="space-y-6">
      {/* First Form */}
      <>
        {CustomInputWithErrorMessage(
          "Nombre",
          <>
            <input
              type="text"
              id="name"
              name="name"
              className={`${formErrors?.find((error) => error.id === "1-1") ? "border-error" : "border border-gray-300"} w-full px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500`}
              value={formData.name}
              onChange={updateFormValues}
            />
          </>,
          true,
          <label className="text-red-600">{formErrors?.find((error) => error.id === "1-1")?.error}</label>
        )}
        {CustomInputWithErrorMessage(
          "Apellido",
          <>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className={`${formErrors?.find((error) => error.id === "1-2") ? "border-error" : "border border-gray-300"} w-full px-4 py-2 x rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
              value={formData.lastName}
              onChange={updateFormValues}
            />
          </>,
          true,
          <label className="text-red-600">{formErrors?.find((error) => error.id === "1-2")?.error}</label>
        )}
        {CustomInputWithErrorMessage(
          "Correo electrónico",
          <>
            <input
              type="email"
              id="email"
              name="email"
              className={`${formErrors?.find((error) => error.id === "1-3") ? "border-error" : "border border-gray-300"} w-full px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
              value={formData.email}
              onChange={updateFormValues}
            />
          </>,
          true,
          <label className="text-red-600">{formErrors?.find((error) => error.id === "1-3")?.error}</label>
        )}
        {CustomInputWithErrorMessage(
          "Número de teléfono",
          <>
            <PhoneInput
              defaultCountry="US"
              id="phoneNumber"
              className={`${formErrors?.find((error) => error.id === "1-4") ? "border-error" : "border border-gray-300"} flex-1 px-4 py-2 border-l-0 rounded-r-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
              value={formData.phoneNumber}
              onChange={(value) => updateFormValues({ target: { name: "phoneNumber", value }, preventDefault: () => { } } as unknown as ChangeEvent<HTMLInputElement>)}
            />
          </>,
          true,
          <label className="text-red-600">{formErrors?.find((error) => error.id === "1-4")?.error}</label>
        )
        }
      </>
      {actions}
    </form>
  )
};

export default BookingFirstForm;