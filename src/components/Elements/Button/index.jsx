const Button = (props) => {
    const {children, variant} = props;
    return (
      <button 
        className={`h-10 px-6 border rounded-md ${variant} text-white flex mx-auto mt-5 items-center justify-center hover:bg-blue-700 `} type='submit'
      >
        {children}
      </button>
      
    );
  };

  export default Button;