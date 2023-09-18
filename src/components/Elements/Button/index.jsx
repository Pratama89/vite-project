/* eslint-disable react/prop-types */
const Button = (props) => {
    const {children, 
      ClassName, 
      onClick = () =>{}, 
      type = "button"
    } = props;
    
    return (
      <button 
        className={`h-10 px-6 border rounded-md ${ClassName} text-white flex mx-auto  items-center justify-center hover:bg-blue-700 `} type={type}
        onClick={() => onClick()}
      >
        {children}
      </button>
      
    );
  };

  export default Button;