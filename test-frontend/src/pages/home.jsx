import axios from "axios"
import { useEffect ,useState } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { removeUser } from "../redux/dataslice"
import Profile from "../../components/profile"


export default function Home() {


  const [error, setError] = useState("")

  const [users, setUsers] = useState([])
  const [user, setUser] = useState([])

  const [loading, setloading] = useState(false)

  const [show, setshow] = useState(false)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const status = useSelector((state) => state.persistedReducer.status)
  const acesstoken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjViZjUzMjVhYWExNmQ5ZjU0YjA0MGEiLCJlbWFpbCI6ImthcmFuQGdtYWlsLmNvbSIsInVzZXJuYW1lIjoia2FyYW4iLCJpYXQiOjE3MTczMDI1NzgsImV4cCI6MTcxOTg5NDU3OH0.ZO3_Rf5Le_XDiMhg393Xjjku7R5zd0rRqSf1JUzIO5I"

  const [showModal, setShowModal] = useState(false);

  console.log("status", status)

  const logout = () => {

    console.log("logout")
    dispatch(removeUser())
    navigate("/")
    
  

  }

  useEffect(() => {

    setloading(true)

    const fetchdata = async () => {
      try {
        await axios.get("http://localhost:4000/api/v1/user/getallusers",{headers : {Authorization : `Bearer ${acesstoken}`}}).
          then((response) => {
            console.log(response.data)
            setUsers(response.data)

          }).catch((error) => {
            setError(error.message)
          }).finally(() => {
            setloading(false)
          })
      } catch (error) {
        setError(error.message)
        console.log(error.message)
        setloading(false)

      }
    }


    const fetchuserdata = async () => {

     
      
        try {
          await axios.get("http://localhost:4000/api/v1/user/getuser",{headers : {Authorization : `Bearer ${acesstoken}`}}).
            then((response) => {
              console.log(response.data)
              setUser(response.data)
  
            }).catch((error) => {
              setError(error.message)
            }).finally(() => {
              setloading(false)
            })
        } catch (error) {
          setError(error.message)
          console.log(error.message)
          setloading(false)
  
        }
      }
     
    

    fetchdata()
    //fetchuserdata()

  }, [])

  if (loading) {

    return (
      <h1 class="text-xl  text-center mt- 5 font-semibold p-2 text-gray-900">Loading...</h1>
    )
  }


  else {
    return (



      <div className="w-full">




        <header className="bg-gray-800 text-white p-3 mb-5">
          <div className="container mx-auto flex justify-between items-center">
            {/* Logo or Title */}
            <div className="flex items-center">
              <svg
                className="w-8 h-8 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 7l6 6-6 6M21 7l-6 6 6 6"
                ></path>
              </svg>
              <span className="text-xl font-semibold">User Dashboard App</span>
            </div>
            {/* Profile Button */}
            <button  onClick= { ()=>{ 
              dispatch(removeUser())
              navigate("/")
             } }className="flex items-center bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded">
              <span className="mr-2">Logout</span>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5.121 17.804A8.992 8.992 0 0112 15c1.86 0 3.578.634 4.879 1.691M15 11a3 3 0 11-6 0 3 3 0 016 0zM19.778 19.778A8.962 8.962 0 0012 21c-2.21 0-4.21-.802-5.778-2.121"
                ></path>
              </svg>
            </button>
          </div>
        </header>


        <div class="relative overflow-x-auto shadow-md sm:rounded-lg mx-5">

          <h1 class="text-xl font-semibold p-2 text-gray-900">Users Data</h1>

          {error && <span className="mb-3 mt-3 text-sm text-center text-red-700">{`${error}`}</span>}

          {
            users?.length == 0 ? (
              <h1 class="text-xl font-semibold p-2 text-gray-900">No Users Data found</h1>
            ) : (
              <table class="w-full text-sm text-left rtl:text-right text-gray-500">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                  <tr>
                    <th scope="col" class="px-6 py-3">
                      Index
                    </th>

                    <th scope="col" class="px-6 py-3">
                      User Name
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Email
                    </th>
                    <th scope="col" class="px-6 py-3">
                      DOB
                    </th>

                    <th scope="col" class="px-6 py-3">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>

                  {
                    users.map((data, index) => {
                      return (
                        <tr index={index} class="bg-white border-b">
                          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            {index + 1}
                          </th>
                          <td class="px-6 py-4">
                            {data.username}
                          </td>
                          <td class="px-6 py-4">
                            {data.email}
                          </td>
                          <td class="px-6 py-4">
                            {data.dob.split("T")[0]}
                          </td>
                          <td class="px-6 py-4">
                            <a onClick={() => { alert("You are not elegible to delete data") }} class="font-medium text-blue-600 hover:underline">Delete</a>
                          </td>
                        </tr>

                      )
                    })
                  }



                </tbody>
              </table>
            )
          }

        </div>

      </div>


    )
  }


}