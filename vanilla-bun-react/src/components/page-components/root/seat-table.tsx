import EmptyComponent from "@/components/state-components/empty";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { PIC } from "@/types";
import { memo, type ComponentProps, type FC } from "react";
import DroppablePIC from "./droppable-pic";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import CreatePICForm from "./create-pic-form";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const SeatTable = memo(
  ({
    id,
    data,
  }: ComponentProps<"div"> & {
    id: string | number;
    data: Array<PIC>;
  }) => {
    return (
      <Card className={cn("h-fit shadow-xl")}>
        <CardHeader aria-hidden className="flex justify-between relative">
          {id}
          <CreatePICDialog />
        </CardHeader>
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

const CreatePICDialog: FC = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"ghost"}>
          <Plus />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create PIC</DialogTitle>
        </DialogHeader>
        <DialogDescription aria-hidden />
        <CreatePICForm />
        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SeatTable;
