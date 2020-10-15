import React from "react";
const PageHeader = ({ children }) => {
  return (
    <div
      style={{
        fontSize: 24,
        padding: "auto",
        marginBottom: "32px",
        color: " #3B72F2",
        fontWeight: "bold",
        textAlign: "center",
        marginTop: "",
      }}
    >
      {children}
    </div>
  );
};

export default PageHeader;
