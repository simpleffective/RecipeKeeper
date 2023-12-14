import { forwardRef, useImperativeHandle, useRef } from "react";

const Input = forwardRef(function Input({ label, id, error, ...props }, ref) {
  const inputRef = useRef();
  useImperativeHandle(ref, () => {
    return {
      focus() {
        inputRef.current.focus();
      },
      value() {
        return inputRef.current.value;
      },
      blur() {
        inputRef.current.blur();
      },
    };
  });
  return (
    <div>
      {label && <label htmlFor={id}>label</label>}
      <input id={id} {...props} ref={inputRef} />
      <div className="control-error">{error && <p>{error}</p>}</div>
    </div>
  );
});

export default Input;
