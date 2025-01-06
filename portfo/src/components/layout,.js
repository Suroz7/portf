import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
       
        <div className='nav_channel'>
        <div className='nav_about hover-3'> <Link to="/">Home</Link></div>
        <div className='nav_about hover-3'> <Link to="/About">About</Link></div>
        <div className='nav_credentials hover-3'> <Link to="/Credentials">Credentials</Link></div>
       <div className='nav_projects hover-3'> <Link to="/Projects">Projects</Link></div> 
       <div className='nav_contact hover-3'> <Link to="/Contact">Contact</Link></div>
        

      </div>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
