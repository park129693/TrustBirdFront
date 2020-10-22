import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import PostFixInput from "./PostFixInput";
import "./Page.css"

//Trust Subscription
const TrustSub = () => {
  return (
    <Container style={{maxWidth:"800px"}}>
      <div className="pageheader">신탁 신청</div>
      <Form className="sign-form">
      <Form.Group controlId="formBasicTrustProfit">
          <Form.Label> 중개인 이름 </Form.Label>
          <PostFixInput
            labelText="중개인"
            postfix=""
            type="text"
            placeholder="성함"
          />
        </Form.Group>

        <Form.Group controlId="formBasicNegligenceProfit">
          <Form.Label> 중개인 전화번호 </Form.Label>
          <PostFixInput
            labelText="중개인번호"
            postfix=""
            type="text"
            placeholder="전화번호"
          />
        </Form.Group>
        
        <Form.Group controlId="formBasicNegligenceProfit">
          <Form.Label> 중개인 주소</Form.Label>
          <PostFixInput
            labelText="중개인번호"
            postfix=""
            type="text"
            placeholder="전화번호"
          />
        </Form.Group>

      
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

        <div>
             <Form.Label>전 · 월세</Form.Label><br/>
            <Form
              controlId="formBasicMonthly"
              style={{ display: "inline-block", marginRight: "32px" }}
            >
              <Form.Check type="checkbox" label="전세" required />
            </Form>
  
            <Form
              controlId="formBasicResevations"
              style={{ display: "inline-block" }}
            >
              <Form.Check type="checkbox" label="월세" required />
            </Form>
          </div>
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
        <Button
        variant="primary"
        type="submit"
        className="button3"
      >
        회원가입
      </Button>
      </Form>
    </Container>
  );
};

export default TrustSub;
