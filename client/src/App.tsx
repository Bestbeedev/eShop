
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from "./pages/Home";
import { useUserStore } from "./store/UserStore";
import { useEffect } from "react";


function App() {
  const {user}=useUserStore()
  useEffect(()=>{
    console.log(user?.role);
    
  },[user])
  return (
    <div className='overscroll-x-none'>
      <Home/>
    </div>
  )
}

export default App;
