import { forwardRef ,useId } from "react";

// here ...porps will recieve the props that we havent declared in the Input component like : register (passed by hook form) ,it will take all the remainigs.
// ref : provide component node with ref to the parent component and parent can use to access the child component and can apply functionaliyt like focous etc (will be passd to ref).
const Input = forwardRef((
   {
   label="",
   placeholder,
    type = "text",
    className = "",
    ...props
   }, ref) => {


      const id = useId();

      return (
         <>

<div class="w-72">
  <div class="relative w-full min-w-[200px] h-10">
    <input
      class="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
      id={id} placeholder= {placeholder} type= {type} {...props} ref={ref} /><label
      class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
    </label>
  </div>
</div>  
      

      
      
         </>
      )



      

});

export default Input;

/*
<div class="focus-within:border-b-blue-500 relative mb-3 flex overflow-hidden border-b-2 transition">
      <label htmlFor= {id} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
      <input  class="w-full flex-1 appearance-none border-blue-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
       id={id} placeholder= {placeholder} type= {type} {...props} ref={ref} />
    </div>
*/