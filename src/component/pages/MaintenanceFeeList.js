import React, { useEffect, useState } from "react";
import { Container, Table, Pagination } from "react-bootstrap";

import "./Page.css"
//userEffect

//Maintenance Fee List

const MaintenanceFeeList = (props) => {
  let { pageNo } = useParams();

  pageNo = parseInt(pageNo);

  const [maintenanceFeeList, setMaintenanceFeeList] = useState("");

  useEffect(() => {
    fetch("/api/maintenancefeelist/list")
      .then((res) => res.json())
      .then((maintenanceFeeList) => {
        setMaintenanceFeeList(maintenanceFeeList);
      });
  });

  useEffect(() => {
    fetch("/api/user/maintenancefeelist")
      .then((res) => res.json())
      .then();
  });
  return (
    <Container>
      <div className="pageheader">관리비 내역 목록</div>
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
                </tr>
              );
            }
          }}
          {/* <tr>
            <td>1</td>
            <td>d</td>
            <td>d</td>
            <td>d</td>
            <td>
              <Link to="/maintenancefee"> view</Link>
            </td>
          </tr> */}
        </tbody>
      </Table>

      <Pagination
        style={{ marginBottom: "50px", margin: "auto", width: "fit-content" }}
      >
        <Pagination.First />
        <Pagination.Prev />
        <Pagination.Item>{1}</Pagination.Item>
        <Pagination.Ellipsis />

        <Pagination.Item>{10}</Pagination.Item>
        <Pagination.Item>{11}</Pagination.Item>
        <Pagination.Item active>{12}</Pagination.Item>
        <Pagination.Item>{13}</Pagination.Item>
        <Pagination.Item disabled>{14}</Pagination.Item>

        <Pagination.Ellipsis />
        <Pagination.Item>{20}</Pagination.Item>

        <Pagination.Next
          onClick={(e) => {
            console.log(props);
          }}
        >
          <Link to={`${pageNo + 1}`}>
            <span aria-hidden="true">›</span>
          </Link>
        </Pagination.Next>
      </Pagination>
    </Container>
  );
};

export default MaintenanceFeeList;
