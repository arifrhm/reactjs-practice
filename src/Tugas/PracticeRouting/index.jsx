// import React from "react";
// import { Navigation } from "./Navigation";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Home } from "./Home";
// import { Services } from "./Services";
// import { Client } from "./Client";
// import { Contact } from "./Contact";
// import { Post } from "./Post";

// export const Routing = () => {
//   return (
//     <div>
//       <BrowserRouter>
//       <Navigation/>
//         <Routes>
//           <Route path="/" element={<Home/>}/>
//           <Route path="/post/:postId" element={<Post/>} />
//           <Route path="/client" element={<Client/>}/>
//           <Route path="/services" element={<Services/>}>
//             <Route path="computer" element={'service computer'}/>
//             <Route path="handphone" element={'service handphone'}/>
//             <Route path="television" element={'service television'}/>
//           </Route>
//           <Route path="/contact" element={<Contact/>}/>
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// };