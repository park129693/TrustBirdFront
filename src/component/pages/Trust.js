import React from "react";
import { Container, Row, Col, Form, Button, Table } from "react-bootstrap";
import "./Page.css"

//Trust Output
const Trust = () => {
  return (
    <div>
      <div className="pageheader">계약서</div>
      

    <Container style={{ maxWidth: "720px", padding:0 , }} >
      
    <table className="tablelayout">
        <tr className="tableborder">
            <td className="tableborder" style={{ width:"250px"}}>중개인 이름</td>
            <td className="tableborder" colspan="4" >
            </td></tr>
          <tr className="tableborder">
            <td className="tableborder" style={{ width:"250px"}}>중개인 전화번호</td>
            <td  className="tableborder"colspan="4" >
            </td></tr>
        <tr className="tableborder">
            <td className="tableborder" style={{ width:"250px"}}>중개인 주소</td>
            <td className="tableborder" colspan="4" >
            </td></tr>
          <tr className="tableborder">
            <td className="tableborder" style={{ width:"250px"}}>신탁부동산 종류</td>
            <td  className="tableborder"colspan="4" >
            </td></tr>
          <tr className="tableborder">
            <td className="tableborder" style={{ width:"250px"}}>신탁부동산 가격</td>
            <td  className="tableborder"colspan="4" >
            </td></tr>
          <tr className="tableborder">
            <td className="tableborder" style={{ width:"250px"}}>임대형태</td>
            <td className="tableborder" colspan="4" >
            </td></tr>
          <tr className="tableborder">
            <td className="tableborder" style={{ width:"250px"}}>신탁기간</td>
            <td className="tableborder" colspan="4" >
            </td></tr>
            </table>
    

      <Form.Label>특약사항</Form.Label>
      <table className="tablelayout">
        <tr className="tableborder">
            <td className="tableborder" colspan="4" >
            </td></tr>
            </ table>
            
      <Form.Label>첨부파일</Form.Label>
      <table className="tablelayout">
        <tr className="tableborder">
            <td className="tableborder" colspan="4" >
            </td></tr>
            </ table>


      
      <div style={{float:"right"}}>
      <Button
        variant="primary"
        type="submit"
        className="button2"
        style={{marginRight:"16px"}}
      >
        수정하기
      </Button>
      <Button
        variant="primary"
        type="submit"
        className="button2"
      >
        확인
      </Button>
      </div>
    </Container>
    </div>
  );
};

export default Trust;
