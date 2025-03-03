import {Navbar} from "./Navbar/Navbar";
import {Friends} from "./Friends/Friends";

const Sidebar = ()=>{
  return (
      <aside>
          <Navbar/>
          <Friends />
      </aside>
  )
};

export default Sidebar;