import React from "react";

const PageHeader = ({ children }) => {
  return (
    <div
      style={{
        maxWidth:"500px",
        fontSize: 24,
        padding: "auto",
        marginTop:"180px",
        marginBottom: "32px",
        color: " #3B72F2",
        fontWeight: "bold",
        textAlign: "center",
      }}
    >
      {children}
    </div>
  );
};

export default PageHeader;
