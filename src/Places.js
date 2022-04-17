import { useEffect,useState } from "react";
import {LocationMarkerIcon} from '@heroicons/react/outline'
import Sidebar from "./Sidebar";
import api from "./crud";
function Content(){
  const [places,setPlaces] = useState([{
    name:"Loading...",
    address:"",
    id: ""
  }]);
  useEffect(()=>{
      if(localStorage.getItem('userId')){
          const db = new api(localStorage.getItem('userId'));
          db.getPlaces().then(async (d)=>{
              if(d.length !== 0){
                const p = []
                for await (const e of d){
                  p.push({
                    name: e.data.name,
                    address: e.data.address,
                    id: e.id
                  })
                setPlaces(p)
                }
              } else {
                setPlaces([])
              }
          })
      }
  },[])
  return(<>
  <div className="px-6">
      <div className="flex items-center justify-between">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl leading-7 text-gray-700 sm:text-3xl sm:truncate">Places</h2>
        </div>
        <div className="flex md:mt-0 md:ml-4">
          <a
          href="/places/add-new"
            type="button"
            className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Add new place
          </a>
        </div>
      </div>
        
      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
        {places.map((place,index) => (<div key={index} className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6 flex items-center justify-around">
            <LocationMarkerIcon className="h-10 w-10 mr-8"/>
            <div className="w-full">
              <dd className="text-2xl font-semibold text-gray-900">
                {place.name}
              </dd>
              <dt className="text-sm font-medium text-gray-500 truncate">{place.address.slice(0,20)}...</dt>
              <dt className="text-sm font-medium text-gray-500 truncate">{place.id}</dt>
            </div>
            <div className="text-center">
              <button className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Edit</button>
              <button className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-3">View</button>
            </div>
          </div>))}
      </div>
    </div>
  </>)
}
export default function Places() {
  return (<>
    <Sidebar MenuComponent={Content} menuNumber={1}/>
  </>)
}