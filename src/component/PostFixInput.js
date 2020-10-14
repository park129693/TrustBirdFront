import React from "react";
import { Form } from "react-bootstrap";

const PostFixInput = ({ type, placeholder, postfix, onChange, ...props }) => {
  return (
    <div style={{ position: "relative" }}>
      <Form.Control
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        required
        style={Object.assign({ paddingRight: 44 }, props.style) }
        {...props}
      />
      <span
        style={{
          top: 7,
          right: 9,
          position: "absolute",
          color: "#888888",
          cursor: "default",
        }}
      >
        {postfix}
      </span>
    </div>
  );
};

export default PostFixInput;
