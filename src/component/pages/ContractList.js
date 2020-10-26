import React, { useEffect, useState } from "react";
import "../Navbar/Navbar.css";
import { useHistory } from "react-router-dom";
import "./Page.css";

//Contract List
const ContractList = () => {
  return (
    <Container>
      <div className="pageheader">계약서 목록</div>
      <Table bordered={true} style={{ marginBottom: "100px" }}>
        <thead>
          <tr>
            <th>NO.</th>
            <th>관리비 청구 기관</th>
            <th>관리비</th>
            <th>납부 여부</th>
            <th>영수증 보기</th>
          </tr>
        </thead>
        <tbody>
          {/* {maintenanceFeeList.map((elem) => {
            return (
              <tr>
                <td>{elem.claimingAgency}</td>
                <td>{elem.electronicPaymentNum}</td>
                <td>{elem.dueDate}</td>
                <td>{elem.amountDue}</td>
                <td>
                  <Link to="/maintenancefee" onClick={handleEvent}>
                    <Button>관리비 내역</Button>
                  </Link>
                </td>
              </tr>
            );
          })} */}
          {() => {
            for (var i = 0; i < maintenanceFeeList.length; i++) {
              return (
                <tr>
                  <td>{[i] + 1}</td>
                  <td>{maintenanceFeeList[i].claimingAgency}</td>
                  <td>{maintenanceFeeList[i].electronicPaymentNum}</td>
                  <td>{maintenanceFeeList[i].dueDate}</td>
                  <td>{maintenanceFeeList[i].amountDue}</td>
                  <td>
                    <Link to="/maintenancefee" onClick={handleEvent}>
                      <Button>관리비 내역</Button>
                    </Link>
                  </td>
                </tr>
              );
            }
          }}
        </tbody>
      </Table>

      <Pagination
        style={{ marginBottom: "50px", margin: "auto", width: "fit-content" }}
      >
        <Pagination.First />
        <Pagination.Prev
          onClick={(e) => {
            console.log(props);
          }}
        >
          <Link to={`${pageNo - 1}`}>
            <span aria-hidden="true">›</span>
          </Link>
        </Pagination.Prev>
        <Pagination.Next
          onClick={(e) => {
            console.log(props);
          }}
        >
          <Link to={`${pageNo + 1}`}>
            <span aria-hidden="true">›</span>
          </Link>
        </Pagination.Next>
        <Pagination.Last />
      </Pagination>
    </Container>
  );
  
};

//Contract List
export default ContractList;
