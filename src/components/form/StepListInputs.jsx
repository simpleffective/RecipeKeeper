import { useState } from "react";

export default function StepListInputs({ array, setArray, name, placeholder }) {
  const [dummyVisible, setDummyVisible] = useState(false);
  return (
    <>
      {array.map((value, i) => {
        let handleFocus, handleBlur;
        if (i === array.length - 1) {
          handleFocus = () => setDummyVisible(true);
          handleBlur = (event) => {
            setDummyVisible(false);
            if (event.target.value && event.target.value.length > 0)
              setArray((ingridients) => [...ingridients, ""]);
          };
        }
        return (
          <li key={i}>
            <input
              name={name}
              placeholder={placeholder}
              value={value}
              onChange={(event) =>
                setArray((array) => array.toSpliced(i, 1, event.target.value))
              }
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </li>
        );
      })}
      {dummyVisible && (
        <li>
          <input name={name} placeholder={placeholder} disabled />
        </li>
      )}
    </>
  );
}
