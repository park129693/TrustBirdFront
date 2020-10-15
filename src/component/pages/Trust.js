import React from "react";
import PageHeader from "./PageHeader";
import { Container, Table, Form } from "react-bootstrap";

//Trust Output
const Trust = () => {
  return (
    <Container style={{ marginTop: "180px" }}>
      <PageHeader>계약 신탁</PageHeader>
      <Table bordered={true}>
        <tbody>
          <tr>
            <td>Mark</td>
            <td>Otto</td>
          </tr>
          <tr>
            <td>Jacob</td>
            <td>Thornton</td>
          </tr>
          <tr>
            <td>Jacob</td>
            <td>Thornton</td>
          </tr>
          <tr>
            <td>Jacob</td>
            <td>Thornton</td>
          </tr>
          <tr>
            <td>Jacob</td>
            <td>Thornton</td>
          </tr>
          <tr>
            <td>Jacob</td>
            <td>Thornton</td>
          </tr>
          <tr>
            <td>Jacob</td>
            <td>Thornton</td>
          </tr>
          <tr>
            <td>Jacob</td>
            <td>Thornton</td>
          </tr>
        </tbody>
      </Table>
      <Form>
        <Form.Group>
          <Form.Label>기타 사항</Form.Label>
          <Form.Control type="textarea" />
        </Form.Group>

        <Form.Group>
          <Form.Label>첨부 파일</Form.Label>
          <Form.Control type="textarea" />
        </Form.Group>
      </Form>
    </Container>
  );
};

export default Trust;
