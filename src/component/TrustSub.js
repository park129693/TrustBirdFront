import React from "react";
import { Container, Form } from "react-bootstrap";
import PostFixInput from "./PostFixInput";
import PageHeader from "./PageHeader";

//Trust Subscription
const TrustSub = () => {
  return (
    <Container>
    <PageHeader>신탁 신청</PageHeader>
      <Form>
        <Form.Group controlId="formBasicType">
          <Form.Label> 신탁 부동산 종류 </Form.Label>
      <PostFixInput
        labelText="부동산종류"
        postfix=""
        type="text"
        placeholder="종류"
      />
        </Form.Group>

        <Form.Group controlId="formBasicPrice">
          <Form.Label> 신탁 부동산 가격 </Form.Label>
          
      <PostFixInput
        labelText="부동산가격"
        postfix="만원"
        type="text"
        placeholder="금액"
      />
        </Form.Group>

        <Form.Group controlId="formBasicTrustProfit">
          <Form.Label> 원본의 수익 </Form.Label>
                
            <PostFixInput
              labelText="원본의수익"
              postfix="만원"
              type="text"
              placeholder="금액"
            />
        </Form.Group>

        <Form.Group controlId="formBasicNegligenceProfit">
          <Form.Label> 수익의 수익 </Form.Label>
                
            <PostFixInput
              labelText="수익의수익"
              postfix="만원"
              type="text"
              placeholder="금액"
            />
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
