/* eslint-disable react/prop-types */
const Input = (props) => {
    const {type, placeholder, name} = props;
    return (
        <input 
        type={type} 
        className='text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder: opacity-80 hover:ring-1 hover:ring-slate-700 mb-4' 
        placeholder={placeholder} 
        name={name}
      />
      
    );
  };

  export default Input;