import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useGetPicList, useGetSeatTables } from "@/api-hooks/queries";
import { useContext, useEffect, useMemo, useState } from "react";
import { DataContext } from "@/context";
import SeatTable from "./seat-table";
import { useParams } from "@tanstack/react-router";

const SeatPlan = () => {
  const params = useParams({ from: "/$projectId/" });
  const { localPics, setLocalPics } = useContext(DataContext)!;
  const { data: seatTables, isSuccess: seatTablesSuccess } = useGetSeatTables(
    Number(params.projectId),
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle>Seat Arrangement </CardTitle>
        <CardDescription>Drag and drop a task to pic to assign</CardDescription>
      </CardHeader>
      <CardContent className="bg-background mx-6 py-6 grid grid-cols-2 gap-16">
        {seatTablesSuccess &&
          seatTables?.map((st, index) => {
            return <SeatTable key={index} data={st} />;
          })}
      </CardContent>
    </Card>
  );
};

export default SeatPlan;
