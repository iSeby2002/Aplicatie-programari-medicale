import React from "react";

export const centerBoxSx: React.CSSProperties = {
    position: "relative",
    margin: "50px 0",
    left: "50%",
    transform: "translateX(-50%)",
    width: "70%",
    background: "white",
    borderRadius: "10px",
    boxShadow: "0px 0px 100px rgba(0, 0, 0, 0.8)",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflow: 'auto',
};