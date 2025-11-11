import type { PIC, Task } from "@/types";
import {
  createContext,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";

type ContextType = {
  localTasks?: Array<Task>;
  localPics?: Array<PIC>;
  setLocalTasks: Dispatch<SetStateAction<Array<Task> | undefined>>;
  setLocalPics: Dispatch<SetStateAction<Array<PIC> | undefined>>;
};
export const DataContext = createContext<ContextType | undefined>(undefined);

export const DataContextWrapper = ({ children }: { children?: ReactNode }) => {
  const [localTasks, setLocalTasks] = useState<Array<Task>>();
  const [localPics, setLocalPics] = useState<Array<PIC>>();

  return (
    <DataContext
      value={{
        localTasks,
        setLocalTasks,
        localPics,
        setLocalPics,
      }}
    >
      {children}
    </DataContext>
  );
};
