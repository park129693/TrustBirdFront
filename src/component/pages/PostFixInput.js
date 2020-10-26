import React from "react";
import { Form } from "react-bootstrap";
import "./Page.css"

const PostFixInput = ({ type, placeholder, postfix, onChange, ...props }) => {
  return (
    <div style={{ position: "relative", }}>
      <Form.Control
        type={type}
        onChange={onChange} 
        placeholder={placeholder}
        required
        style={Object.assign({ paddingRight: 44,}, props.style ), {height:"42px"}  }
        {...props}
      />
      <span
      className="fixinput" style={{color:"#222222", }}
      >
        {postfix}
      </span>
    </div>
  );
};

export default PostFixInput;
