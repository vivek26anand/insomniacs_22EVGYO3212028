import { useEffect,useState } from "react";
import {LocationMarkerIcon} from '@heroicons/react/outline'
import {useNavigate} from 'react-router-dom';
import Sidebar from "./Sidebar";
import api from "./crud";
function Content(){
  const navigate = useNavigate();
  const [places,setPlaces] = useState([]);
  const [userId,setUserId] = useState('');
  useEffect(()=>{
      if(localStorage.getItem('userId')){
        setUserId(localStorage.getItem('userId'))
          const db = new api(localStorage.getItem('userId'));
          db.getPlaces().then(async (d)=>{
              if(d.length !== 0){
                const p = []
                for await (const e of d){
                  p.push({
                    name: e.data.name,
                    id: e.id
                  })
                }
                setPlaces(p)
              }
          })
      }
  },[])
  return(<>
  <div className="px-6">
      
      <form className="space-y-8 divide-y divide-gray-200" action="#" method="POST" onSubmit={(e)=>{
        e.preventDefault();
        const db = new api(userId);
        db.addStudent({
          name:e.target.name.value,
          address:e.target.address.value,
          phone:e.target.phone.value,
          place:e.target.location.value
        }).then(()=>{
          navigate('/students')
        })
      }}>
      <div className="flex items-center justify-between">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl leading-7 text-gray-700 sm:text-3xl sm:truncate">Add new Student</h2>
        </div>
        <div className="flex md:mt-0 md:ml-4">
          <input
            type="submit"
            className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            value="Save"
          />
        </div>
      </div>
      <div className="space-y-8 sm:space-y-5">
        <div>
          <div className="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
              <label className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                Name
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
              <label className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                Phone Number
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <div className="max-w-lg flex rounded-md shadow-sm">
                  <input
                    type="tel"
                    id="phone"
                    className="flex-1 block w-full focus:ring-indigo-500 focus:border-indigo-500 min-w-0 rounded-md sm:text-sm border-gray-300"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                Permanent Address
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
              Allocate to Place
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
              <select
                    id="location"
                    className="mt-1 block max-w-lg pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    defaultValue=""
                    required
                >
                  {places.map((p,index)=>(
                    <option key={index}>
                      {p.name} | {p.id}
                    </option>
                  ))}
                </select>
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
    <Sidebar MenuComponent={Content} menuNumber={2}/>
  </>)
}