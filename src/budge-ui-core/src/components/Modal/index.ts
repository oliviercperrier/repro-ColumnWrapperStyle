import Modal from "./Modal";
import ModalBase from "./Modal.Base";
import ModalFooter from "./Modal.Footer";
import ModalHeader from "./Modal.Header";
import { TModalComponent } from "./Modal.types";

const ModalTemp: any = Modal;

ModalTemp.Header = ModalHeader;
ModalTemp.Footer = ModalFooter;
ModalTemp.Base = ModalBase

const ModalMain = ModalTemp as TModalComponent;

export * from "./Modal.types"
export { ModalMain as Modal };