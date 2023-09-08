/* eslint-disable react/prop-types */
const Button = (props) => {
    const {children, ClassName} = props;
    return (
      <button 
        className={`h-10 px-6 border rounded-md ${ClassName} text-white flex mx-auto mt-5 items-center justify-center hover:bg-blue-700 `} type='submit'
      >
        {children}
      </button>
      
    );
  };

  export default Button;