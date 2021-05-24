import {ReactNode} from "react";
import { useCan } from "../hooks/useCan";

interface CanProps {
  children: ReactNode;
  permissions?: string[];
  roles?: string[];
}
//component faz a verificação se o user tem as permissions validas
const Can = ({children,permissions, roles}:CanProps) => {
  const userCanSeeComponent = useCan({permissions, roles});

  if(!userCanSeeComponent){
    return null;
  }

  return (
    <>
      {children}
    </>
  )
}

export default Can
