import { useQuery } from "@tanstack/react-query";
import API from "../helpers/api-methods";
import type { PIC } from "@/types";

const useGetPicList = ({
  projectId,
  seatTableId,
}: {
  projectId?: number;
  seatTableId?: number;
}) => {
  const searchParams = new URLSearchParams({
    projectId: String(projectId),
    seatTableId: String(seatTableId),
  });
  if (!projectId) searchParams.delete("projectId");
  if (!seatTableId) searchParams.delete("seatTableId");

  return useQuery({
    queryKey: ["pic-list", projectId, seatTableId],
    queryFn: async () => {
      const data = await API.get<Array<PIC>>("/pic/?" + searchParams);
      return data;
    },
    staleTime: Infinity,
  });
};

export { useGetPicList };
