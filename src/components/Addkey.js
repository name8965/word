import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";

const Addkey = () => {
  const histroy = useHistory();

  return (
    <div
      style={{
        margin: "auto",
        width: "50px",
        height: "50px",
        backgroundColor: "#6100FF",
        borderRadius: "250px",
      }}
      onClick={() => {
        histroy.push("/addword");
      }}
    ></div>
  );
};

// const AddkeyStyled = styled.div`
//         margin: "auto";
//         width: "50px";
//         height: "50px";
//         background-Color :"#6100FF";
//         border-Radius: "250px",
// `;

export default Addkey;
