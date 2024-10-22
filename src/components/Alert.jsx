// Start coding here
import SadIcon from "../assets/sad.svg";
import AlertIcon from "../assets/alert-triangle";
import InfoIcon from "../assets/info-alert";
import SuccessIcon from "../assets/success-icon";

function ErrorAlert() {
  return (
    <div className="container-box flex flex-row gap-1 rounded-md justify-start items-center w-[650px] h-[76px] p-5 m-2 text-black font-bold text-xl bg-[#F9C8C8]">
      <SadIcon />
      <h2>This is error alert box</h2>
    </div>
  );
}
function WarningAlert() {
  return (
    <div className="container-box flex flex-row gap-1 rounded-md justify-start items-center w-[650px] h-[76px] p-5 m-2 text-black font-bold text-xl bg-[#F9D9C8]">
      <AlertIcon />
      <h2>This is error alert box</h2>
    </div>
  );
}
function InfoAlert() {
  return (
    <div className="container-box flex flex-row gap-1 rounded-md justify-start items-center w-[650px] h-[76px] p-5 m-2 text-black font-bold text-xl bg-[#F9EBC8]">
      <InfoIcon />
      <h2>This is error alert box</h2>
    </div>
  );
}
function SuccessAlert() {
  return (
    <div className="container-box flex flex-row gap-1 rounded-md justify-start items-center w-[650px] h-[76px] p-5 m-2 text-black font-bold text-xl bg-[#CEF7CD]">
      <SuccessIcon />
      <h2>This is error alert box</h2>
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
