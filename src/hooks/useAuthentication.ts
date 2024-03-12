import { useContext } from "react";
import { UserContext } from "../context/user/UserContext";

const useAuthentication = () => {
  const { user } = useContext(UserContext);
  return {
    isAuthenticated: user._id?.length > 0
  };
};

export default useAuthentication;
