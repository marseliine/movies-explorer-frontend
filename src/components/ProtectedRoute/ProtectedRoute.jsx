import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element: Component, ...props }) => {
  return (
    props.loggedIn
  )
}

export default ProtectedRoute;
