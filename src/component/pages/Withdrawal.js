import React from "react";
import PageHeader from "./PageHeader";
import { Container, Form, Button } from "react-bootstrap";
import PostFixInput from "./PostFixInput";
import "../Navbar/Navbar.css";

//Withdrawal
const Withdrawal = () => {
  return (
    <Container style={{ maxWidth: "500px" }}>
      <PageHeader>회원탈퇴</PageHeader>
      <div
        style={{
          width: "500px",
          margin: "auto",
          border: "solid",
          borderRadius: "10px",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <h5>계정 영구삭제</h5> <br />
        계졍을 영구적으로 삭제하려는 경우 저희에게 알려주세요. 삭제과정이
        시작되면 계정을 다시 활성화하거나 계정에 추가한 콘텐츠 또는 정보를
        가져올수 없습니다. 계정을 삭제하면 모두 삭제됩니다. 계정이 영구적으로
        삭제되기 전에 이 정보를 저장하려면 정보 사본을 다운로드 하세요.
      </div>
      <Container style={{ maxWidth: "500px" }}>
        <Button
          variant="primary"
          type="submit"
          style={{
            width: "100px",
            backgroundColor: "#3B72F2",
            outlineColor: "#3B72F2",
            marginTop: "16px",
            display: "inline-block",
            marginRight: "16px",
          }}
        >
          취소하기
        </Button>
        <Button
          variant="primary"
          type="submit"
          style={{
            width: "100px",
            backgroundColor: "#3B72F2",
            outlineColor: "#3B72F2",
            marginTop: "16px",
            marginLeft: "5spx",
            display: "inline-block",
          }}
        >
          탈퇴하기
        </Button>
      </Container>
    </Container>
  );
};

export default Withdrawal;
