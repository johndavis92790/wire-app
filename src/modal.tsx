import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function ModalDiv(props: any) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.text.header}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>{props.text.body}</h5>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
