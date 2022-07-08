import React, { useContext, useState, useMemo } from "react";
import { General } from "./ContextGeneral";

function Modal() {
  const { search, setSearch } = useContext(General);
  const [dialogState, setDialogState] = useState("");
  let handleAdvice = async () => {
    try {
      if (search) {
        let adviceData = await fetch(
          `https://api.adviceslip.com/advice/search/${search}`
        );
        var adviceObj = await adviceData.json();
        var advice = adviceObj.slips[0].advice;
        setSearch("");
      } else {
        let adviceData = await fetch(`https://api.adviceslip.com/advice`);
        var adviceObj = await adviceData.json();
        var advice = adviceObj.slip.advice;
        setSearch("");
      }
    } catch {
      alert("Word cant find");
    } finally {
      advice && setDialogState(advice);
    }
  };
  return (
    <>
      <input type="button" value={"Take Advice"} onClick={handleAdvice} />
      <dialog open={dialogState ? true : false}>
        <h1>{dialogState}</h1>
        <input
          type="button"
          onClick={() => setDialogState("")}
          value={"Take New Advice"}
        />
      </dialog>
    </>
  );
}

export default Modal;
