// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import NavbarComp from './NavbarComp';
// import Parent1 from './Parent1/Parent1';
// import Parent2 from './Parent2/Parent2';

// function Parent() {
//   return (
//     <Router>
//       <NavbarComp />
//       <div className="container mt-4">
//         <Routes>
//           <Route  path="/parent" element={<Parent1 /> }/>
//           <Route path="/parent2" element={<Parent2/>} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default Parent;
import React from 'react';

import { NavLink ,Outlet} from 'react-router-dom';

function Parent() {
  return (
    <nav className="navbar navbar-light bg-light justify-content-center">
      <div className="container-fluid  justify-content-center">
        <ul className="nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="first">Main</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="second">Profile</NavLink>
          </li>
        </ul>
       
      </div>
      <Outlet/>
    </nav>
  );
}

export default Parent;
