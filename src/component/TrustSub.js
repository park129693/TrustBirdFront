import React from "react";
import { Container, Form } from "react-bootstrap";

//Trust Subscription
const TrustSub = () => {
  return (
    <Container>
      <div
        style={{
          fontSize: 24,
          padding: "auto",
          marginBottom: "32px",
          marginTop: "208px",
          color: " #3B72F2",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        신탁 신청
      </div>
      <Form>
        <Form.Group controlId="formBasicType">
          <Form.Label> 신탁 부동산 종류 </Form.Label>
          <Form.Control type="text" placeholder="신탁 부동산 종류" required />
        </Form.Group>

        <Form.Group controlId="formBasicPrice">
          <Form.Label> 신탁 부동산 가격 </Form.Label>
          <Form.Control type="text" placeholder="신탁 부동산 가격" required />
        </Form.Group>

        <Form.Group controlId="formBasicTrustProfit">
          <Form.Label> 원본의 수익 </Form.Label>
          <Form.Control type="text" placeholder="원본의 수익" />
        </Form.Group>

        <Form.Group controlId="formBasicNegligenceProfit">
          <Form.Label> 수익의 수익 </Form.Label>
          <Form.Control type="text" placeholder="수익의 수익" />
        </Form.Group>

        <Form.Group controlId="formBasicMonthly">
          <Form.Check type="checkbox" label="월세" required />
        </Form.Group>

        <Form.Group controlId="formBasicResevations">
          <Form.Check type="checkbox" label="전세" required />
        </Form.Group>

        <Form.Group controlId="formBasicPeriodStart">
          <Form.Label> 신탁 시작일 </Form.Label>
          <Form.Control type="date" />
        </Form.Group>

        <Form.Group controlId="formBasicPeriodStart">
          <Form.Label> 신탁 종류일 </Form.Label>
          <Form.Control type="date" />
        </Form.Group>

        <Form.Group controlId="formBasicEtc">
          <Form.Label> 기타사항 </Form.Label>
          <Form.Control type="textarea" />
        </Form.Group>

        <Form.Group controlId="formBasicAttachments">
          <Form.Label> 첨부파일 </Form.Label>
          <Form.Control type="image" />
        </Form.Group>
      </Form>
    </Container>
  );
};

export default TrustSub;
