import { useEffect,useState } from "react";
import Sidebar from "./Sidebar";
import {useNavigate} from 'react-router-dom';
import api from "./crud";
function Content(){
  const navigate = useNavigate();
  const [userId,setUserId] = useState('');
  useEffect(()=>{
      if(localStorage.getItem('userId')){
          setUserId(localStorage.getItem('userId'))
      }
  },[])
  return(<>
  <div className="px-6">
      
      <form className="space-y-8 divide-y divide-gray-200" action="#" method="POST" onSubmit={(e)=>{
        e.preventDefault();
        const db = new api(userId);
        db.addPlace({
          name:e.target.name.value,
          address:e.target.address.value,
          rooms:e.target.rooms.value
        }).then(()=>{
          navigate('/places')
        })
      }}>
      <div className="flex items-center justify-between">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl leading-7 text-gray-700 sm:text-3xl sm:truncate">Add new place</h2>
        </div>
        <div className="flex md:mt-0 md:ml-4">
          <input
            type="submit"
            className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            value="Save"
            onClick={(e)=>{
              e.target.value = 'Saving...'
            }}
          />
        </div>
      </div>
      <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
        <div>
          <div className="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                Place Name
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <div className="max-w-lg flex rounded-md shadow-sm">
                  <input
                    type="text"
                    id="name"
                    className="flex-1 block w-full focus:ring-indigo-500 focus:border-indigo-500 min-w-0 rounded-md sm:text-sm border-gray-300"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label htmlFor="about" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                Address
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <textarea
                  id="address"
                  rows={3}
                  className="max-w-lg shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md"
                  defaultValue={''}
                  required
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                Number of rooms
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <div className="max-w-lg flex rounded-md shadow-sm">
                  <input
                    type="number"
                    min={0}
                    id="rooms"
                    className="flex-1 block w-full focus:ring-indigo-500 focus:border-indigo-500 min-w-0 rounded-md sm:text-sm border-gray-300"
                    required
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
        </div>
    </form>
    </div>
  </>)
}
export default function Places() {
  return (<>
    <Sidebar MenuComponent={Content} menuNumber={1}/>
  </>)
}