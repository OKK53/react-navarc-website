import classNames from "classnames";
import { useField, ErrorMessage } from "formik";

export default function Input({ label, ...props }) {
  const [field, meta, helpers] = useField(props);
  return (
    <label>
      <div>{label}</div>
      <input
        className={classNames({
          "w-80 h-110 border outline-none rounded": true,
          "focus:border-black": !meta.error || !meta.touched,
          "border-red-600": meta.error && meta.touched,
        })}
        {...field}
        {...props}
      />
      <ErrorMessage
        name={field.name}
        component="small"
        className="text-xs block mt-2 text-red-600"
      />
    </label>
  );
}

// errormes clasname e -> component="small" className="text-xs block mt-2 text-red-600"
