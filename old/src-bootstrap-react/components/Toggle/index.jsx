import Accordion from 'react-bootstrap/Accordion';

import React from "react";

const Toggle = props => (
    <Accordion alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Filtros</Accordion.Header>
        <Accordion.Body>
            {props.children}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
)

export default Toggle;