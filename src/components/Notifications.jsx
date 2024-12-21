const data = [
    {
    name : "Lorem frzjngiz jrer jezertf jazejzz zdsqd",
    date : 12-12-2020
},
    {
    name : "Lorem frzjngiz jrer jezertf jazejzz zdsqd",
    date : 12-12-2020
},
    {
    name : "Lorem frzjngiz jrer jezertf jazejzz zdsqd",
    date : 12-12-2020
},
    {
    name : "Lorem frzjngiz jrer jezertf jazejzz zdsqd",
    date : 12-12-2020
},
]
export default function Notifications() {
  return (
    <div>
        <div>
            <span>Notification</span>
            <span>Date</span>
        </div>
        {data.map((e)=>{
            <div>
              <h1>{e.name}</h1>
              <span>{e.date}</span>
            </div>;
        })}
    </div>
  )
}
