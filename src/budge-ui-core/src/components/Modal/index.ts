import Modal from "./Modal";
import ModalFooter from "./Modal.Footer";
import ModalHeader from "./Modal.Header";
import { TModalComponent } from "./Modal.types";

const ModalTemp: any = Modal;

ModalTemp.Header = ModalHeader;
ModalTemp.Footer = ModalFooter;

const ModalMain = ModalTemp as TModalComponent;

export * from "./Modal.types";
export { ModalMain as Modal };
