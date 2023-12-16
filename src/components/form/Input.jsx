import { forwardRef, useImperativeHandle, useRef } from "react";

const Input = forwardRef(function Input(
  { className, label, id, error, ...props },
  ref
) {
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
    <>
      {label && <label htmlFor={id}>{label}</label>}
      <input className={className} id={id} {...props} ref={inputRef} />
      <div className="control-error">{error && <p>{error}</p>}</div>
    </>
  );
});

export default Input;
