import React from "react";
import { Container, Table, Pagination } from "react-bootstrap";
import PageHeader from "./PageHeader";
//userEffect
//Maintenance Fee List

fetch("/api/user/maintenancefeelist");

const sampleData = [
  {
    id: 1,
    org: "a",
    last: "ln",
    name: "un",
  },
  {
    id: 2,
    org: "a",
    last: "ln",
    name: "un",
  },
];

const MaintenanceFeeList = () => {
  return (
    <Container>
      <PageHeader>관리비 내역 목록</PageHeader>
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
          {sampleData.map((elem) => {
            return (
              <tr>
                <td>{elem.id}</td>
                <td>{elem.org}</td>
                <td>{elem.last}</td>
                <td>{elem.name}</td>
              </tr>
            );
          })}
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
        <Pagination.Next />
        <Pagination.Last />
      </Pagination>
    </Container>
  );
};

export default MaintenanceFeeList;
