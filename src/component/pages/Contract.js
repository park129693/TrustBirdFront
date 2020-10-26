
import React from "react";
import { Container,  Button, Form } from "react-bootstrap";
import "./Page.css";
import PostFixInput from "./PostFixInput";

//Contract Output
const Contract = () => {
  return (
    <div>
      <div className="pageheader">계약서</div>

    <Container style={{ maxWidth: "720px", padding:0 , }} >
    <div>
        <table className="tablelayout" >
          <tr className="tableborder">
            <td className="tableborder" style={{ width:"180px"}}>소재지</td>
            <td className="tableborder" style={{}} colspan="4" >
            </td>
          </tr>
          <tr className="tableborder">
            <td className="tableborder" style={{ width:"175px"}}>토지</td>
            <td placeholder="지목"  className="tableborder" style={{ width:"135px"}}>지목</td>
            <td className="tableborder">          </td>
            <td className="tableborder" style={{ width:"135px"}}>면적</td>
            <td className="tableborder" style={{ width:"135px"}}>       </td>
          </tr>
          <tr className="tableborder">
            <td className="tableborder" >건물</td>
            <td placeholder="용도"></td>
            <td className="tableborder">          </td>
            <td className="tableborder" >면적</td>
            <td className="tableborder" >       </td>
          </tr>
          <tr  className="tableborder" >
            <td className="tableborder" >임대할 부분</td>
            <td className="tableborder" colspan="4" >
            </td></tr>
          <tr className="tableborder" className="tableborder">
            <td className="tableborder" >임대형태</td>
            <td className="tableborder" colspan="4" >
            </td></tr>
          <tr className="tableborder">
            <td className="tableborder" >보증금</td>
            <td  className="tableborder"colspan="4" >
            </td></tr>
          <tr className="tableborder">
            <td className="tableborder" >계약금</td>
            <td className="tableborder" colspan="4" >
            </td></tr>
          <tr className="tableborder">
            <td className="tableborder" >중도금</td>
            <td  className="tableborder"colspan="4" >
            </td></tr>
          <tr className="tableborder">
            <td className="tableborder" >잔금</td>
            <td className="tableborder" colspan="4" >
            </td></tr>
          <tr className="tableborder">
            <td className="tableborder" >차임</td>
            <td className="tableborder" colspan="4" >
            </td></tr>

        </table>
      </div>

      <Form.Label>특약사항</Form.Label>
      <table className="tablelayout">
        <tr className="tableborder">
            <td className="tableborder" colspan="4" >
            </td></tr>
            </ table>

      <table className="tablelayout">
        <tr className="tableborder">
            <td className="tableborder" style={{ width:"180px"}}>임차인</td>
            <td className="tableborder" colspan="4" >
            </td></tr>
          <tr className="tableborder">
            <td className="tableborder" style={{ width:"180px"}}>주소</td>
            <td  className="tableborder"colspan="4" >
            </td></tr>
          <tr className="tableborder">
            <td className="tableborder" style={{ width:"180px"}}>전화번호</td>
            <td className="tableborder" colspan="4" >
            </td></tr>
          <tr className="tableborder">
            <td className="tableborder" style={{ width:"180px"}}>주민등록번호</td>
            <td className="tableborder" colspan="4" >
            </td></tr>
            </table>
<table className="tablelayout">
            <tr className="tableborder">
            <td className="tableborder" style={{ width:"180px"}}>임대인</td>
            <td className="tableborder" colspan="4" >
            </td></tr>
          <tr className="tableborder">
            <td className="tableborder" style={{ width:"180px"}}>주소</td>
            <td  className="tableborder"colspan="4" >
            </td></tr>
          <tr className="tableborder">
            <td className="tableborder" style={{ width:"180px"}}>전화번호</td>
            <td className="tableborder" colspan="4" >
            </td></tr>
          <tr className="tableborder">
            <td className="tableborder" style={{ width:"180px"}}>주민등록번호</td>
            <td className="tableborder" colspan="4" >
            </td></tr>
            </table>

            <table className="tablelayout">
            <tr className="tableborder">
            <td className="tableborder" style={{ width:"180px"}}>중개인</td>
            <td className="tableborder" colspan="4" >
            </td></tr>
          <tr className="tableborder">
            <td className="tableborder" style={{ width:"180px"}}>주소</td>
            <td  className="tableborder"colspan="4" >
            </td></tr>
          <tr className="tableborder">
            <td className="tableborder" style={{ width:"180px"}}>전화번호</td>
            <td className="tableborder" colspan="4" >
            </td></tr>
          <tr className="tableborder">
            <td className="tableborder" style={{ width:"180px"}}>주민등록번호</td>
            <td className="tableborder" colspan="4" >
            </td></tr>
            </table>

      
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

export default Contract;
