import { useField, ErrorMessage } from "formik"
import classNames from "classnames"


export default function Textarea({ label, ...props }) {
    
    const [field, meta, helpers] = useField(props)
    return(
        <label>
            <div>{label}</div>
            <textarea className={classNames({
                "w-80 border  outline-none rounded":true,
                "focus:border-black": !meta.error || !meta.touched,
                "border-red-600": meta.error && meta.touched 
            })}
            {...field} {...props}/>
            <ErrorMessage name={field.name} component="small" className="text-xs block mt-2 text-red-600" />
        </label>
    )
}