// import React, { useState } from "react";
// import {
//     BsChevronDoubleDown,
//     BsChevronUp,
//   } from "react-icons/bs";

// // interface ({
// //   open?: boolean;
// //   title: string;
// // })

// const Collapsible = ({ open, children, title }) => {
//   const [isOpen, setIsOpen] = useState(open);

//   const handleFilterOpening = () => {
//     setIsOpen((prev) => !prev);
//   };

//   return (
//     <>
//       <div>
//         <div>
//           <div className="d-flex">
//             <h6 className="font-weight-bold">{title}</h6>
//             <button type="button" className="btn" onClick={handleFilterOpening}>
//               {!isOpen ? (
//                 <BsChevronDoubleDown />
//               ) : (
//                 <BsChevronUp />
//               )}
//             </button>
//           </div>
//         </div>

//         {/* <div className="border-bottom"> */}
//           {/* <div>{isOpen && <div className="p-3">{children}</div>}</div> */}
//         {/* </div> */}
//       </div>
//       <div className="card">
//         <div>{isOpen && <div className="p-3">{children}</div>}</div>
//       </div>
//     </>
//   );
// };

// export default Collapsible;