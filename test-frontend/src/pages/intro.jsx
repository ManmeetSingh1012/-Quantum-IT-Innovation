import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Intro() {

  const data = useSelector((state) => state.persistedReducer.status)
  console.log("status", data)

  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-6">Welcome to User Dashboard App</h1>
        <div className="space-x-4">

          {
            data ? (<button onClick={() => { navigate("/dashboard") }} className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700">
              Dashboard</button>) : (

              <div>
                <button onClick={() => { navigate("/signup") }} className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700">
                  Sign Up
                </button>
                <button onClick={() => { navigate("/signin") }} className="bg-green-500 ml-5 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-700">
                  Sign In
                </button>
              </div>

            )
          }

        </div>
      </div>
    </div>
  );
}

export default Intro;
