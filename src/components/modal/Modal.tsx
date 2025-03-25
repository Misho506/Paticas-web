import { CModal, CModalBody, CModalFooter, CModalHeader } from '@coreui/react'
import { useTranslation } from 'react-i18next'

import "./Modal.css"

type ModalProps = {
  open: boolean,
  onClose: (open: boolean) => void,
  title: string,
  message: string | React.ReactNode
}

const Modal = ({ open, onClose, title, message }: ModalProps) => {
  const { i18n } = useTranslation();
  return (
    <CModal
      visible={open}
      onClose={() => onClose(false)}
      aria-labelledby="LiveDemoExampleLabel"
    >
      <CModalHeader className="bg-dark-green">
        <h3 className="text-white" id="LiveDemoExampleLabel">{title}</h3>
      </CModalHeader>
      <CModalBody>{message}</CModalBody>
      <CModalFooter className="border-0">
        <button className="bg-white border-2 text-dark-green rounded-full py-1 px-8" onClick={() => onClose(false)}>
          {i18n.t('close')}
        </button>
      </CModalFooter>
    </CModal>
  );
}

export default Modal;