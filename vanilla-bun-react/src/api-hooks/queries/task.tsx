import { useQuery } from "@tanstack/react-query";
import API from "../helpers/api-methods";
import type { Task } from "@/types";

const useGetTasks = (projectId: number) => {
  return useQuery({
    queryKey: ["tasks", projectId],
    queryFn: async () => {
      const data = await API.get<Array<Task>>(
        "/task/?" + new URLSearchParams({ projectId: String(projectId) }),
      );
      return data;
    },
    staleTime: Infinity,
  });
};

export { useGetTasks };
