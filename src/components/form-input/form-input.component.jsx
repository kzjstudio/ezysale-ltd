import "./form-input.component.styles.scss";

const FormInPut = ({ lable, ...otherprops }) => {
  return (
    <div className="group">
      <input className="form-input" {...otherprops} />
      {lable && (
        <lable
          className={`${otherprops.value ? "shrink" : ""} form-input-label `}
        >
          {lable}
        </lable>
      )}
    </div>
  );
};

export default FormInPut;
