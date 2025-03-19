import PhoneInput from "react-phone-number-input";
import CustomInputWithErrorMessage from "../customInputWithErrorMessage/CustomInputWithErrorMessage";
import { ChangeEvent, FormEvent, useState } from "react";
import { UserInfo, FormField, BookingFormProps } from "../../utils/types";
import { z } from "zod";
import 'react-phone-number-input/style.css'
import { useTour } from "../../context/TourContext";

// Zod validation schema
const userInfoValidation = z.object({
  userName: z.string({
    required_error: "El nombre es requerido",
    invalid_type_error: "El nombre debe ser un texto",
  }).min(1, { message: "El nombre es requerido" }),
  lastName: z.string({
    required_error: "El apellido es requerido",
    invalid_type_error: "El apellido debe ser un texto",
  }).min(1, { message: "El apellido es requerido" }),
  email: z.string()
    .min(1, { message: "El correo es requerido" })
    .email({ message: "El correo es inválido" }),
  phoneNumber: z.string({
    required_error: "El número de celular es requerido"
  }).min(1, { message: "El número de celular es requerido" })
});

const formFields: Array<FormField> = [
  {
    name: 'userName',
    type: 'text',
    title: 'Nombre',
  },
  {
    name: 'lastName',
    type: 'text',
    title: 'Apellido',
  },
  {
    name: 'email',
    type: 'email',
    title: 'Correo electrónico',
  },
];

const initValues = {
  userName: null,
  lastName: null,
  email: null,
  phoneNumber: null
}

const BookingFirstForm = ({ setStep, actions }: BookingFormProps) => {
  const { booking, setBooking } = useTour();
  const [wasSubmitted, setWasSubmitted] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useState<UserInfo>({
    userName: '',
    lastName: '',
    email: '',
    phoneNumber: ''
  });
  const [errors, setErrors] = useState<Record<keyof UserInfo, string | null>>(initValues);

  const submitForm = (e: FormEvent) => {
    e.preventDefault();
    setWasSubmitted(true);
    if (validateForm()) {
      setBooking({ ...booking, user: userInfo });
      setStep(prev => prev + 1);
    }
  }

  const updateFormValues = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const fieldName = name as keyof UserInfo;
    setUserInfo({ ...userInfo, [fieldName]: value });
    if (wasSubmitted) {
      const fieldError = validateField(fieldName, value);
      setErrors({ ...errors, [fieldName]: fieldError });
    }
  }

  const createFormFields = (field: FormField, index: number) => {
    const { type, name, title } = field;
    const formField = userInfo[name];
    const fieldError = wasSubmitted ? errors[name] : null;
    const hasError = Boolean(fieldError);

    return (
      CustomInputWithErrorMessage(
        title,
        <input
          type={type}
          name={name}
          className={`${hasError ? "border-error" : "border border-gray-300"} w-full px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500`}
          value={formField}
          onChange={updateFormValues}
          placeholder={title}
          onBlur={() => {
            const fieldError = validateField(name, formField as string);
            setErrors({ ...errors, [name]: fieldError });
          }}
        />,
        true,
        hasError && <label className="text-red-600">{fieldError}</label>,
        index
      )
    )
  }

  const validateField = (name: keyof UserInfo, value: string) => {
    const fieldSchema = userInfoValidation.shape[name];
    const result = fieldSchema.safeParse(value);
    if (!result.success) {
      return result.error.errors[0]?.message || `${name} is invalid`;
    }
    return null;
  };

  const validateForm = () => {
    const result = userInfoValidation.safeParse(userInfo);
    if (!result.success) {
      const formattedErrors: Record<keyof UserInfo, string | null> = initValues;
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof UserInfo;
        formattedErrors[field] = err.message;
      });
      setErrors(formattedErrors);
      return false;
    }
    setErrors(initValues);
    return true;
  };

  const phoneNumberChange = (value: string) => {
    const phoneValue = value || "";
    setUserInfo({ ...userInfo, phoneNumber: phoneValue });
    if (wasSubmitted) {
      const fieldError = validateField("phoneNumber", phoneValue);
      setErrors({ ...errors, phoneNumber: fieldError });
    }
  }

  const onBlurPhoneInput = () => {
    const fieldError = validateField("phoneNumber", userInfo.phoneNumber as string);
    setErrors({ ...errors, phoneNumber: fieldError });
  }

  return (
    <form onSubmit={submitForm} className="space-y-6">
      {formFields.map((field, index) => createFormFields(field, index))}
      {
        CustomInputWithErrorMessage(
          "Número de teléfono",
          <PhoneInput
            defaultCountry="US"
            id="phoneNumber"
            className={`${wasSubmitted && errors.phoneNumber ? "border-error" : "border border-gray-300"} flex-1 px-4 py-2 border-l-0 rounded-r-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
            value={userInfo.phoneNumber}
            onChange={(value) => phoneNumberChange(value as string)}
            onBlur={onBlurPhoneInput}
          />,
          true,
          wasSubmitted && errors.phoneNumber && <label className="text-red-600">{errors.phoneNumber}</label>,
        )
      }
      {actions}
    </form>
  )
};

export default BookingFirstForm;