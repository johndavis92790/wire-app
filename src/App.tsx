/* eslint-disable @typescript-eslint/no-unused-expressions */
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {
  InsulationTypes,
  AmbientTemps,
  Table31016,
  Table31015B1,
  Table31015C1,
  conductorData,
} from "./data/data";
import { Alert, Col, Form, Row } from "react-bootstrap";
import ModalDiv from "./modal";

interface AmbientTempObject {
  label: string;
  lowValue: number;
  highValue: number;
}

interface Conductor {
  material: string;
  rating: string;
}

interface Table31015C1Object {
  label: string;
  lowValue: number;
  highValue: number;
  percentage: number;
}

interface Table31016HeaderObject {
  ConductorMaterial: string;
  ConductorTempRating: string;
  Types: string[];
}

export function App() {
  const [modalShow, setModalShow] = useState(false);
  const [modalText, setModalText] = useState({});

  const [ampacity, setAmpacity] = useState(0);
  const [loadCurrent, setLoadCurrent] = useState(0);
  const [ambientTemp, setAmbientTemp] = useState(30);
  const [ambientTempObject, setAmbientTempObject] = useState({
    label: "26–30° C (78–86° F)",
    lowValue: 26,
    highValue: 30,
  } as AmbientTempObject);
  const [conductorSize, setConductorSize] = useState("");
  const [conductor, setConductor] = useState({} as Conductor);
  const [insulationType, setInsulationType] = useState("Select an Option");
  const [conductorCount, setConductorCount] = useState(
    {} as Table31015C1Object
  );
  const [fahrenheitOrCelsius, setFahrenheitOrCelsius] = useState("F");
  const [tempString, setTempString] = useState(
    "Fahrenheit temperature between 0 and 185"
  );

  // console.log("ampacity", ampacity);
  // console.log("loadCurrent", loadCurrent);
  // console.log("ambientTemp", ambientTemp);
  // console.log("ambientTempObject", ambientTempObject);
  // console.log("conductorSize", conductorSize);
  // console.log("conductor", conductor);
  // console.log("insulationType", insulationType);
  // console.log("conductorCount", conductorCount);

  useEffect(() => {
    if (fahrenheitOrCelsius === "F") {
      setTempString("Fahrenheit temperature between 0 and 185");
    } else {
      setTempString("Celsius temperature between 0 and 85");
    }
  }, [fahrenheitOrCelsius]);

  function renderOptions() {
    return (
      <>
        <Form.Group className="mb-4">
          <Form.Label>Load Current</Form.Label>
          <Form.Control
            onChange={(event) => {
              const value = (event.target as HTMLTextAreaElement).value;
              value !== "" && setLoadCurrent(parseInt(value));
            }}
          ></Form.Control>
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label>Ambient Temperature - Optional</Form.Label>
          <Row>
            <Col xs={3}>
              <Form.Select
                onChange={(event) => {
                  const value = (event.target as HTMLSelectElement).value;
                  setFahrenheitOrCelsius(value);
                }}
              >
                <option>F</option>
                <option>C</option>
              </Form.Select>
            </Col>
            <Col>
              <Form.Control
                onChange={(event) => {
                  const value = parseInt(event.target.value);
                  if (isNaN(value)) {
                    setAmbientTemp(30);
                    setAmbientTempObject({
                      label: "26–30° C (78–86° F)",
                      lowValue: 26,
                      highValue: 30,
                    });
                    return;
                  }
                  const celsiusTemp =
                    fahrenheitOrCelsius === "F"
                      ? fahrenheitToCelsius(value)
                      : value;
                  const ambientTempObj = findAmbientTempObject(celsiusTemp);
                  if (ambientTempObj) {
                    setAmbientTempObject(ambientTempObj);
                  }
                  setAmbientTemp(celsiusTemp);
                }}
              ></Form.Control>
            </Col>
          </Row>
          <Form.Text muted>{tempString}</Form.Text>
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label>Insulation Type</Form.Label>
          <Form.Select
            onChange={(event) => {
              const value = (event.target as HTMLSelectElement).value;
              setInsulationType(value);
            }}
          >
            <option>Select an Option</option>;
            {InsulationTypes.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label>Conductor Material and Temperature Rating</Form.Label>
          <Form.Select
            onChange={(event) => {
              const value = event.target.value;
              if (value === "Select an Option") {
                return;
              }
              const conductor = conductorData.find(
                (c) => `${c.material} - ${c.rating}` === value
              );
              if (!conductor) {
                return;
              }
              setConductor(conductor);
            }}
          >
            <option>Select an Option</option>
            {conductorData.map((c) => (
              <option
                key={`${c.material} - ${c.rating}`}
                value={`${c.material} - ${c.rating}`}
              >
                {`${c.material} - ${c.rating}`}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Conductor Count</Form.Label>
          <Form.Select
            onChange={(event) => {
              const value = (event.target as HTMLSelectElement).value;
              if (value !== "Select an Option") {
                const ambientTempObj = findTable31015C1Object(value);
                if (ambientTempObj) {
                  setConductorCount(ambientTempObj);
                }
              }
            }}
          >
            <option>Select an Option</option>;
            {Table31015C1.map((option) => (
              <option key={option.label}>{option.label}</option>
            ))}
          </Form.Select>
        </Form.Group>
      </>
    );
  }

  function handleCalculate() {
    let newAmpacity = 0;
    let newConductorSize = "";
    let modalHeader = "";
    let modalBody = "";

    // Check for missing inputs
    if (loadCurrent === 0) {
      modalHeader = "Missing Load Current";
      modalBody = "Please enter a load current.";
    } else if (insulationType === "Select an Option") {
      modalHeader = "Missing Insulation Type";
      modalBody = "Please select an insulation type.";
    } else if (!conductor.material || !conductor.rating) {
      modalHeader = "Missing Conductor";
      modalBody = "Please select a conductor material and temperature rating.";
    } else if (!conductorCount.percentage) {
      modalHeader = "Missing Conductor Count";
      modalBody = "Please select a conductor count.";
    } else {
      let newLoadCurrent = loadCurrent;

      // D7
      // Apply correction factor if ambient temperature is not 30°C
      if (ambientTemp !== 30) {
        const factor = calculateTable31015B1(conductor, ambientTempObject);
        if (typeof factor === "number") {
          newLoadCurrent = Math.round(newLoadCurrent / factor);
        }
      }

      // D8
      // Apply adjustment factor for conductor count
      if (conductorCount) {
        newLoadCurrent = Math.round(newLoadCurrent / conductorCount.percentage);
      }

      // P9
      // Find matching column in Table 310-16
      const headerArray = Table31016[0] as Table31016HeaderObject[];
      const matchingOption = headerArray.find(
        (option) =>
          option.ConductorMaterial === conductor.material &&
          option.Types.includes(insulationType) &&
          (option.ConductorTempRating === conductor.rating ||
            (option.ConductorTempRating === "75°C (167°F)" &&
              conductor.rating === "60°C (140°F)") ||
            (option.ConductorTempRating === "90°C (194°F)" &&
              (conductor.rating === "75°C (167°F)" ||
                conductor.rating === "60°C (140°F)")))
      );

      if (!matchingOption) {
        modalHeader = "No Matching Option Found";
        modalBody =
          "There is no matching option in Table 310-16 for the selected inputs.";
      } else {
        const column = headerArray.indexOf(matchingOption);

        // Find matching row in Table 310-16
        const array = Table31016 as any[];
        const matchingRow = array.find(
          (row) => row[column] !== null && row[column] >= newLoadCurrent
        );

        if (!matchingRow) {
          modalHeader = "No Matching Row Found";
          modalBody =
            "There is no matching row in Table 310-16 for the selected inputs.";
        } else {
          newAmpacity = matchingRow[column];
          newConductorSize = matchingRow[0];
          setAmpacity(newAmpacity);
          setConductorSize(newConductorSize);
          return;
        }
      }
    }

    // Show error message in modal
    setModalText({
      header: modalHeader,
      body: modalBody,
    });
    setModalShow(true);
  }

  function calculateTable31015B1(
    conductor: Conductor,
    ambientTemp: AmbientTempObject
  ) {
    const row = AmbientTemps.findIndex(
      (temp) => temp.label === ambientTemp.label
    );
    const column = conductorData.findIndex(
      (data) => data.rating === conductor.rating
    );
    const value = Table31015B1[row + 1][column + 1];
    if (value) return value;
  }

  function fahrenheitToCelsius(fahrenheit: number): number {
    return Math.round(((fahrenheit - 32) * 5) / 9);
  }

  function findAmbientTempObject(
    number: number
  ): AmbientTempObject | undefined {
    return AmbientTemps.find(
      (obj: AmbientTempObject) =>
        number >= obj.lowValue && number <= obj.highValue
    );
  }

  function findTable31015C1Object(label: string) {
    return Table31015C1.find((obj) => obj.label === label);
  }

  function renderStartOverButton() {
    return (
      <>
        <Button
          variant="danger"
          type="button"
          className="mx-3"
          onClick={() => {
            setAmpacity(0);
            setLoadCurrent(0);
            setAmbientTemp(0);
            setAmbientTempObject({
              label: "",
              lowValue: 0,
              highValue: 0,
            });
            setConductorSize("");
            setConductor({
              material: "",
              rating: "",
            });
            setConductorCount({
              label: "",
              lowValue: 0,
              highValue: 0,
              percentage: 0,
            });
            window.location.reload();
          }}
        >
          Start Over
        </Button>
        <Button
          variant="success"
          type="button"
          onClick={() => {
            handleCalculate();
          }}
        >
          Calculate
        </Button>
      </>
    );
  }

  function renderResults() {
    if (ampacity === 0) return;
    return (
      <Alert variant="success">
        <Alert.Heading>Ampacity - {ampacity}A</Alert.Heading>
        <hr />
        <Alert.Heading>Conductor Size - {conductorSize}</Alert.Heading>
      </Alert>
    );
  }

  return (
    <div className="App m-3">
      <ModalDiv
        show={modalShow}
        text={modalText}
        onHide={() => {
          setModalText({});
          setModalShow(false);
        }}
      />
      <Card style={{ width: "22rem" }}>
        <Card.Header as="h4">Wire App</Card.Header>
        <Card.Body>
          {renderOptions()}
          <br />
          {renderStartOverButton()}
          <br />
          <br />
          {renderResults()}
        </Card.Body>
      </Card>
    </div>
  );
}
