import { useQuery } from "@tanstack/react-query";
import API from "./helpers/api-methods";

export const useGetTasks = () => {
  return useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const data = await API.get<{ data: string }>("/task");
      return data;
    },
  });
};
