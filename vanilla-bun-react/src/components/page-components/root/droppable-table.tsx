import EmptyComponent from "@/components/state-components/empty";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { PIC } from "@/types";
import { useDroppable } from "@dnd-kit/core";
import { memo, type ComponentProps } from "react";
import DroppablePIC from "./droppable-pic";
import { Badge } from "@/components/ui/badge";

const DroppableTable = memo(
  ({
    id,
    data,
  }: ComponentProps<"div"> & {
    id: string | number;
    data: Array<PIC>;
  }) => {
    // const { isOver, setNodeRef } = useDroppable({
    //   id: `droppable-table-${id}`,
    // });

    return (
      <Card
        className={cn(
          // isOver ? "bg-primary/20" : "bg-secondary",
          "h-fit shadow-xl",
        )}
      >
        <CardHeader
          aria-hidden
          className="flex justify-between relative"
        ></CardHeader>
        <CardContent className="grid grid-cols-3 gap-4">
          {data.map((p) => (
            <div
              key={p.id}
              className="flex flex-col items-center gap-2 text-center"
            >
              <DroppablePIC id={`${p.tableId}${p.seatNumber}`} pic={p} />
              <Badge variant={"outline"}>{p.name}</Badge>
            </div>
          ))}
        </CardContent>
      </Card>
    );
  },
);

export default DroppableTable;
