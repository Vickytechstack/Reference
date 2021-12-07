import React from "react";
import {
  BrowserRouter,
  Link,
  Route,
  useParams,
  Routes,
} from "react-router-dom";

const Account = () => {
  const { account } = useParams();
  return <h2>ID: {account}</h2>;
};

const RouteParams = () => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <h2>Route params</h2>
        <ul>
          <Link to="/netflix">Netflix</Link>
        </ul>
        <ul>
          <Link to="/google">Google</Link>
        </ul>
        <ul>
          <Link to="/yahoo">Yahoo</Link>
        </ul>
        <ul>
          <Link to="/gmail">Gmail</Link>
        </ul>
        <Route path="/:account">
          <Account />
        </Route>
      </React.Fragment>
    </BrowserRouter>
  );
};

export default RouteParams;

// const Account = () => {
//     const { account } = useParams();
//     return <h2>ID: {account}</h2>;
//   };

//   const RouteParams = () => {
//     return (
//       <BrowserRouter>
//         <React.Fragment>
//           <h2>Route params</h2>
//           <ul>
//             <Link to="/netflix">Netflix</Link>
//           </ul>
//           <ul>
//             <Link to="/google">Google</Link>
//           </ul>
//           <ul>
//             <Link to="/yahoo">Yahoo</Link>
//           </ul>
//           <ul>
//             <Link to="/gmail">Gmail</Link>
//           </ul>
//           <Route path="/:account">
//             <Account />
//           </Route>
//         </React.Fragment>
//       </BrowserRouter>
//     );
//   };
