const Input = (props) => {
    const {type, placeholder} = props;
    return (
      <input 
        className={`h-10 px-6 border rounded-md ${variant} text-white flex mx-auto mt-10 items-center justify-center hover:bg-blue-700 `} type='submit'
      />
      
    );
  };

  export default Input;