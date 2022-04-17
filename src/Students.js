import { useEffect,useState } from "react";
import {LocationMarkerIcon} from '@heroicons/react/outline'
import Sidebar from "./Sidebar";
import api from "./crud";
function Content(){
    const people = [
        { name: 'Vivek Anand', title: 'Techno Pg (id: PL12DT67)', email: 'STU5467FHTFDH', role: 'Member' },
        // More people...
      ]
      const [students,setStudents] = useState([{
        name:"Loading...",
        address:"",
        id: ""
      }]);
      useEffect(()=>{
          if(localStorage.getItem('userId')){
              const db = new api(localStorage.getItem('userId'));
              db.getStudents().then(async (d)=>{
                  if(d.length !== 0){
                    const p = []
                    for await (const e of d){
                      p.push({
                        name: e.data.name,
                        place: e.data.place,
                        id: e.id,
                      })
                      setStudents(p)
                    }
                  } else {
                    setStudents([])
                  }
              })
          }
      },[])
  return(<>
   <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">Students</h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the students in all places
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <a
            href="/students/add-new"
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
          >
            Add Student
          </a>
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                      Name
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Current Place
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Student Id
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {students.map((person,index) => (
                    <tr key={index}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        {person.name}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.place}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.id}</td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                        <a href="#" className="text-indigo-600 hover:text-indigo-900">
                        Edit<span className="sr-only">, {person.name}</span>
                        </a>
                      </td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                        <a href="#" className="text-indigo-600 hover:text-indigo-900">
                        Reallocate<span className="sr-only">, {person.name}</span>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>)
}
export default function Places() {
  return (<>
    <Sidebar MenuComponent={Content} menuNumber={2}/>
  </>)
}