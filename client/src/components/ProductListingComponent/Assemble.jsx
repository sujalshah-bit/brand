import ViewProduct from "./ViewProduct"
import SideBar from "./sideBar"
const Assemble = () => {
  return (
    <div className="w-[900px] m-auto cust-break:w-[1200px] flex gap-3  bg-rose-400">
        <SideBar/>
        <ViewProduct/>
       
    </div>
  )
}

export default Assemble