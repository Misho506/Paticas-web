import { ChangeEvent, FormEvent, ReactNode, useEffect, useState } from "react";
import { FormError, Person } from "../../utils/types";
import CustomInputWithErrorMessage from "../customInputWithErrorMessage/CustomInputWithErrorMessage";
import 'react-phone-number-input/style.css'
import { useTour } from "../../context/TourContext";

type inputType = {
  title: string,
  name: 'name' | 'lastName' | 'passportID',
  id: string
};

const inputs: Array<inputType> = [
  {
    title: "Nombre",
    name: "name",
    id: "-1"
  },
  {
    title: "Apellido",
    name: "lastName",
    id: "-2"
  },
  {
    title: "Número de Pasaporte",
    name: "passportID",
    id: "-3"
  },
];

type BookingSecondFormProps = {
  setStep(step: (prev: number) => number): void;
  actions: ReactNode;
}

const BookingSecondForm = ({ setStep, actions }: BookingSecondFormProps) => {
  const { booking } = useTour();
  const [formData, setFormData] = useState<Array<Person>>([{
    name: '',
    lastName: '',
    passportID: '',
  }]);
  const [formErrors, setFormErrors] = useState<Array<FormError> | null>(null);

  const updateFormValues = (e: ChangeEvent<HTMLInputElement>, position: number, id: string) => {
    const { name, value } = e.target;
    if (formErrors && formErrors.length > 0) {
      setFormErrors([...formErrors.filter((error) => error.id !== id)]);
    }
    const updatedData = formData.map((element, index) =>
      index === position
        ? { ...element, [name]: value }
        : element
    );
    setFormData(updatedData);
  };

  const submitForm = (e: FormEvent) => {
    e.preventDefault();
    const newErrors: Array<FormError> = validStepOne();
    if (newErrors.length > 0) {
      setFormErrors(newErrors.filter((error): error is FormError => error !== undefined));
    } else {
      setStep((prev: number) => prev + 1);
    }
  }

  useEffect(() => {
    setFormData(booking.people);
  }, [booking]);

  const validField = (formNameInput: any, id: string, name: string, error: string): FormError | undefined => {
    if (!formNameInput.trim()) {
      return {
        id,
        name,
        error
      }
    }
    return undefined;
  }

  const validStepOne = (): Array<FormError> => {
    const errors: Array<FormError | undefined> = [];
    formData.forEach((data, index) => {
      errors.push(validField(data.name, index + "-1", "name", "El nombre es requerido") as FormError);
      errors.push(validField(data.lastName, index + "-2", "lastName", "El apellido es requerido") as FormError);
      errors.push(validField(data.passportID, index + "-3", "passportID", "El numero de pasaporte es requerido") as FormError);
    });
    return errors.filter((error): error is FormError => error !== undefined);
  }

  return (
    <form onSubmit={submitForm} className="space-y-6">
      {
        formData.map((element, index) => (
          <section key={index}>
            <h4 className="italic">Viajero {index === 0 ? "Principal" : "#" + index + 1}</h4>
            {inputs.map((inputInfo) =>
              <div key={inputInfo.id + -1}>
                {CustomInputWithErrorMessage(
                  inputInfo.title,
                  <input
                    type="text"
                    id={index + '-' + inputInfo.name}
                    name={inputInfo.name}
                    className={`${formErrors?.find((error) => error.id === index + inputInfo.id) ? "border-error" : "border border-gray-300 mb-3"} w-full px-4 py-2  rounded-lg focus:ring-2 focus:ring-blue-500`}
                    value={element[inputInfo.name]}
                    onChange={(e) => updateFormValues(e, index, index + inputInfo.id)}
                  />,
                  true,
                  <label className="text-red-600 mb-3">{formErrors?.find((error) => error.id === index + inputInfo.id)?.error}</label>
                )}
              </div>
            )}
          </section>
        ))
      }
      {actions}
    </form>
  )
};

export default BookingSecondForm;