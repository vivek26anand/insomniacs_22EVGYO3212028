import { useState } from "react";
import Sidebar from "./Sidebar";
function Content(){
  const [stats,setStats] = useState([
    { name: 'Total Students', stat: '4763' },
    { name: 'New Students', stat: '213' },
    { name: 'New Places', stat: '2' },
  ])
  return(<>
   <div className="px-6">
   <div>
      <h3 className="text-lg leading-6 font-medium text-gray-900">Last 30 days</h3>
      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
        {stats.map((item) => (
          <div key={item.name} className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
            <dt className="text-sm font-medium text-gray-500 truncate">{item.name}</dt>
            <dd className="mt-1 text-3xl font-semibold text-gray-900">{item.stat}</dd>
          </div>
        ))}
      </dl>
    </div>
   </div>
  </>)
}
export default function Dashboard() {
  return (<>
    <Sidebar MenuComponent={Content} menuNumber={0}/>
  </>)
}