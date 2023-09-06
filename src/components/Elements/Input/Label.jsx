/* eslint-disable no-unused-vars */
import { Children } from "react";

/* eslint-disable react/prop-types */
const Label = (props) => {
    const { htmlFor, Children } = props;
    return (
     <label 
     htmlFor={htmlFor} 
     className="block text-slate-700 text-sm font-bold mb-2"
     >
        {Children}
     </label>
    )
}

export default Label;