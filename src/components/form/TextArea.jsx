export default function TextArea({ className, label, id, error, ...props }) {
  return (
    <div className={className}>
      {label && <label htmlFor={id}>label</label>}
      <textarea id={id} {...props} />
      <div className="control-error">{error && <p>{error}</p>}</div>
    </div>
  );
}
