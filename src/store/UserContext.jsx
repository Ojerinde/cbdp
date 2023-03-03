// import React, { useCallback, useEffect, useState } from "react";
// const UserContext = React.createContext({
//   isLoggedIn: false,
//   updateIsLoggedIn() {},
// });
// const UserContextProvider = (children) => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   localStorage.setItem("user", JSON.stringify({ user: "Ojerinde Joel" }));
//   const user = localStorage.getItem("user");
//   const updateIsLoggedIn = useCallback((state) => {
//     setIsLoggedIn(state);
//   }, []);
//   useEffect(() => {}, []);

//   const data = {
//     isLoggedIn,
//     updateIsLoggedIn,
//   };
//   return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
// };
// export default UserContextProvider;
