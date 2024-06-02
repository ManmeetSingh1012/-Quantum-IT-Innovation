import React from 'react';


const Profile = ({ show, onClose ,user}) => {

   

  if (!show) return null;

  

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
      
      <div className="bg-white  rounded shadow-md ">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
   </svg>


   <h1 className="font-bold text-2xl mt-2">{user.name}</h1>
   <h1 className="font-normal text-base ">{user.email}</h1>
   <button onClick={onClose} className="bg-green-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-700">
            Logout
          </button>
        
      </div>
    </div>

    
  );
};

export default Profile;