import classNames from "classnames";
import { InputHTMLAttributes } from "react";
import { FieldError, useFormContext, useFormState } from "react-hook-form";

export interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  inputId?: string;
  className?: string;
  wrapInput?: (input: React.ReactNode) => React.ReactNode;
  registerOptions?: Record<string, unknown>;
  showOptionalLabel?: boolean;
}

export const FormField: React.FC<FormFieldProps> = ({
  name,
  label,
  inputId,
  className,
  wrapInput,
  registerOptions,
  showOptionalLabel,
  ...inputProps
}) => {
  const { register, getFieldState } = useFormContext();

  const { error } = getFieldState(name);

  const finalProps = {
    className: classNames({
      input: inputProps.type !== "textarea",
      textarea: inputProps.type === "textarea",
      "input-bordered input-error": !!error,
    }),
    ...register(name, registerOptions),
    ...inputProps,
  };
  const inputEl =
    inputProps.type === "textarea" ? (
      <textarea {...finalProps} />
    ) : (
      <input {...finalProps} />
    );

  return (
    <div className={classNames("form-control", className)}>
      <label htmlFor={inputId} className="label">
        {label ? <span className="label-text">{label}</span> : null}
        {showOptionalLabel ? (
          <span className="label-text">(Optional)</span>
        ) : null}
      </label>

      {wrapInput ? (
        <label htmlFor={inputId} className="input-group">
          {wrapInput(inputEl)}
        </label>
      ) : (
        inputEl
      )}

      {error ? (
        <label htmlFor={inputId} className="label">
          <span className="label-text text-red-500">{formatErrors(error)}</span>
        </label>
      ) : null}
    </div>
  );
};

function formatErrors(fieldError: FieldError) {
  if (fieldError.message) return fieldError.message;

  return fieldError.message || "Invalid input";
}

export default FormField;
