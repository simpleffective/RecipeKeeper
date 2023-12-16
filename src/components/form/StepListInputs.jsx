import { useState } from "react";

export default function StepListInputs({
  array,
  setArray,
  name,
  placeholder,
  maxLength,
  rows,
  cols,
}) {
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
            <textarea
              name={name}
              placeholder={placeholder}
              value={value}
              maxLength={maxLength}
              rows={rows}
              cols={cols}
              onChange={(event) =>
                setArray(array.toSpliced(i, 1, event.target.value))
              }
              onFocus={handleFocus}
              onBlur={handleBlur}
              onInput={(event) => {
                event.target.style.height = "5px";
                event.target.style.height = event.target.scrollHeight + "px";
              }}
            />
          </li>
        );
      })}
      {dummyVisible && (
        <li>
          <textarea
            maxLength={maxLength}
            rows={rows}
            cols={cols}
            name={name}
            placeholder={placeholder}
            disabled
          />
        </li>
      )}
    </>
  );
}
