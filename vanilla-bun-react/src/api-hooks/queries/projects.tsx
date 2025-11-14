import { useQuery } from "@tanstack/react-query";
import API from "../helpers/api-methods";
import type { Project } from "@/types";

const useGetProjects = () => {
  return useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const data = await API.get<Array<Project>>("/projects/");
      return data;
    },
    staleTime: Infinity,
  });
};

export { useGetProjects };
