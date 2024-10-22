/** @jsxImportSource @emotion/react */
// Start coding here
import { css } from "@emotion/react";
import SadIcon from "../assets/sad.svg";
import AlertIcon from "../assets/alert-triangle";
import InfoIcon from "../assets/info-alert";
import SuccessIcon from "../assets/success-icon";

function ErrorAlert() {
  return (
    <div
      css={css`
        display: flex;
        justify-content: start;
        align-items: center;
        gap: 5px;
        width: 650px;
        height: 76px;
        padding: 20px;
        margin: 10px;
        border-radius: 10px;
        color: black;
        font-weight: 700;
        font-size: x-large;
        background-color: #f9c8c8;
      `}>
      <SadIcon />
      <h2>This is error alert box</h2>
    </div>
  );
}
function WarningAlert() {
  return (
    <div
      css={css`
        display: flex;
        justify-content: start;
        align-items: center;
        gap: 5px;
        width: 650px;
        height: 76px;
        padding: 20px;
        margin: 10px;
        border-radius: 10px;
        color: black;
        font-weight: 700;
        font-size: x-large;
        background-color: #f9d9c8;
      `}>
      <AlertIcon />
      <h2>This is warning alert box</h2>
    </div>
  );
}
function InfoAlert() {
  return (
    <div
      css={css`
        display: flex;
        justify-content: start;
        align-items: center;
        gap: 5px;
        width: 650px;
        height: 76px;
        padding: 20px;
        margin: 10px;
        border-radius: 10px;
        color: black;
        font-weight: 700;
        font-size: x-large;
        background-color: #f9ebc8;
      `}>
      <InfoIcon />
      <h2>This is info alert box</h2>
    </div>
  );
}
function SuccessAlert() {
  return (
    <div
      css={css`
        display: flex;
        justify-content: start;
        align-items: center;
        gap: 5px;
        width: 650px;
        height: 76px;
        padding: 20px;
        margin: 10px;
        border-radius: 10px;
        color: black;
        font-weight: 700;
        font-size: x-large;
        background-color: #cef7cd;
      `}>
      <SuccessIcon />
      <h2>This is success alert box</h2>
    </div>
  );
}

export default function Alert({ type }) {
  if (type === "error") {
    return <ErrorAlert />;
  } else if (type === "warning") {
    return <WarningAlert />;
  } else if (type === "info") {
    return <InfoAlert />;
  } else if (type === "success") {
    return <SuccessAlert />;
  }
}
