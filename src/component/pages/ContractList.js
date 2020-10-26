import React, { useEffect, useState } from "react";
import "../Navbar/Navbar.css";
import { useHistory } from "react-router-dom";
import "./Page.css";
import { Container } from "react-bootstrap";

//Contract List
const ContractList = () => {
  // return(
  //   <Container>
  //     <div className="pageheader">계약서 목록</div>;
  //     <Table bordered={true} style={{ marginBottom: "100px" }}>
  //     <thead>
  //         <tr>
  //           <th>NO.</th>
  //           <th>사용자</th>
  //           <th>계약 시점</th>
  //           <th>계약 종류일</th>
  //           <th>임대종류</th>
  //         </tr>
  //       </thead>
  //       <tbody>
  //         {()=>{
  //           for(var i = 0; i < Contract.length; i++) {
  //             return(
  //               <tr>
  //                 <td></td>
  //               </tr>>
  //             )
  //           }
  //         }}
  //       </tbody>
  //   </Container>
  // )
};

//Contract List
export default ContractList;
