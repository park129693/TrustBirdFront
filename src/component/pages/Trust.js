import React from "react";
import PageHeader from "./PageHeader";
import { Container, Table, Form } from "react-bootstrap";
import PostFixInput from "./PostFixInput";

//Trust Output
const Trust = () => {
  return (
    <Container>
      <PostFixInput
        labelText="소재지"
        postfix="만원"
        type="text"
        placeholder="주소"
      />
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
