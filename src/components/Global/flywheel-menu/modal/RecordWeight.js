import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { faWeight } from "@fortawesome/free-solid-svg-icons";
import { useToasts } from "react-toast-notifications";

const faIconColor = "#007bff";

const RecordWeight = props => {
  const { addToast } = useToasts();

  const recordWeightWithToast = async () => {
    const result = await props.handleRecordWeight();
    !result.payload.error
      ? addToast("Saved Successfully", {
          appearance: "success",
          autoDismiss: true
        })
      : addToast(`${result.payload.error}`, {
          appearance: "error",
          autoDismiss: true
        });
  };

  return (
    <>
      <Modal
        show={props.isEnabled}
        onHide={() => {
          return props.handleClose(), props.handleToggleClickProp();
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Record Weight</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group as={Row}>
              <Col sm="10">
                {" "}
                <Form.Control
                  placeholder="Enter your weight..."
                  type="text"
                  value={props.weight}
                  onChange={e => props.handleInputChange(e)}
                />
              </Col>
              <Col sm="2">
                {" "}
                <FontAwesomeIcon
                  size="2x"
                  icon={faWeight}
                  className="faComponent"
                  color={faIconColor}
                />{" "}
              </Col>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              return props.handleClose(), props.handleToggleClickProp();
            }}
          >
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              return (
                props.handleToggleClickProp(),
                props.handleClose(),
                recordWeightWithToast()
              );
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default RecordWeight;