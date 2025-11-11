import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { Task } from "@/types";
import { useDraggable } from "@dnd-kit/core";
import { memo, useEffect } from "react";
import DroppablePIC from "./droppable-pic";
import { id } from "zod/v4/locales";

const DraggableDroppablePIC = memo(
  ({
    pic,
    className,
  }: {
    pic: Task | { id: string; title: string };
    className?: string;
  }) => {
    const { setNodeRef, listeners, attributes, isDragging } = useDraggable({
      id: `draggable-seat-${pic.id}`,
      data: {
        task: pic,
      },
    });

    return (
      <div
        {...listeners}
        {...attributes}
        ref={setNodeRef}
        className={cn(
          "relative ",
          isDragging ? "opacity-40" : "opacity-100",
          className,
        )}
      >
        {/* <DroppablePIC disabled={isDragging}  /> */}
      </div>
    );
  },
);

export default DraggableDroppablePIC;
