import { useMemo, useState } from 'react';
import { StepType } from '../../utils/types';
import { useNavigate } from 'react-router';

import "./BookingTour.css";
import BookingFirstForm from '../../components/bookingFirstForm/BookingFirstForm';
import BookingSecondForm from '../../components/bookingSecontForm/BookingSecondForm';

const steps: Array<StepType> = [
  { number: 1, label: 'Contacto', active: true },
  { number: 2, label: 'Tour', active: false },
  { number: 3, label: 'Pago', active: false },
];

const BookingTour = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<number>(1);

  const actionButtons =
    <article className='flex justify-between'>
      <button
        disabled={step === 1}
        onClick={() => step > 1 ? setStep(step - 1) : navigate("/tour/detailed")}
        className="w-2/5 bg-[#1B2821] text-white py-3 px-6 rounded-full hover:bg-[#2c3f33] transition-colors duration-300"
      >
        Atrás
      </button>
      <button
        type="submit"
        className="w-2/5 bg-[#1B2821] text-white py-3 px-6 rounded-full hover:bg-[#2c3f33] transition-colors duration-300"
      >
        {step === 3 ? "Submit" : "Siguiente"}
      </button>
    </article>;

  const showForm = useMemo(() => {
    switch (step) {
      case 1:
        return <BookingFirstForm setStep={setStep} actions={actionButtons} />
      case 2:
        return <BookingSecondForm setStep={setStep} actions={actionButtons} />
      case 3:
        return <>HOLA THIRD FORM</>
      default:
        break;
    }
  }, [step]);


  return (
    <div className="max-w-2xl mx-auto p-6">
      {/* Progress Steps */}
      <nav aria-label="Progress steps" className="mb-8">
        <ol className="flex items-center justify-center gap-4">
          {steps.map((step) => (
            <li key={step.number} className="flex items-center">
              <div className={`
                flex items-center justify-center w-8 h-8 rounded-full 
                ${step.active ? 'bg-black text-white' : 'bg-zinc-200'}
                text-sm font-medium
              `}>
                {step.number}
              </div>
              <span className="ml-2 text-sm font-medium text-gray-600">
                {step.label}
              </span>
            </li>
          ))}
        </ol>
      </nav>
      <section>
        {showForm}
        {/* Three Form  - Payment*/}
        <form>
          {
            step === 3 &&
            <>
              DEVELOP IN PROGRESS
            </>
          }
        </form >
      </section >
    </div >
  );
};

export default BookingTour;
