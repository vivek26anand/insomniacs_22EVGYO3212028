import { useEffect,useState } from "react";
import {DocumentReportIcon} from '@heroicons/react/outline'
import Sidebar from "./Sidebar";
function Content(){
  const [report,setReports] = useState([{
    name:"Students Report",
    date:"25/04/22",
    id: "R547NHGF"
  }]);
  return(<>
  <div className="px-6">
      <div className="flex items-center justify-between">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl leading-7 text-gray-700 sm:text-3xl sm:truncate">Reports</h2>
        </div>
        <div className="flex md:mt-0 md:ml-4">
          <button
            type="button"
            className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-indigo-500"
          >
            Generate New Report
          </button>
        </div>
      </div>
        
      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
        {report.map((report,index) => (<div key={index} className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6 flex items-center justify-around">
            <DocumentReportIcon className="h-10 w-10 mr-8"/>
            <div className="w-full">
              <dd className="text-2xl font-semibold text-gray-900">
                {report.name}
              </dd>
              <dt className="text-sm font-medium text-gray-500 truncate">{report.date}</dt>
              <dt className="text-sm font-medium text-gray-500 truncate">{report.id}</dt>
            </div>
            <div className="text-center">
              <button className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-indigo-500">View</button>
              <button className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-indigo-500 mt-3">Download</button>
            </div>
          </div>))}
      </div>
    </div>
  </>)
}
export default function Places() {
  return (<>
    <Sidebar MenuComponent={Content} menuNumber={3}/>
  </>)
}