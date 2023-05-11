import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Adnan Shaikh",
    email: "adnan@gmail.com",
  },
});

export default UserContext;
