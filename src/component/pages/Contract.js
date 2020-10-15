import React from "react";
import { Container, Table, Form } from "react-bootstrap";
import PageHeader from "./PageHeader";

//Contract Output
const Contract = () => {
  return (
    <Container>
      <PageHeader>계약서 보기</PageHeader>
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

export default Contract;
