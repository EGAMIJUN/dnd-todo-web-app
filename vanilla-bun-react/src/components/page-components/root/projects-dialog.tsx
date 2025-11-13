import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { CornerDownRight, SearchIcon } from "lucide-react";
import { useState, type FC } from "react";

const ProjectsDialog: FC = () => {
  const [projectSearch, setProjectSearch] = useState<string>("");
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [projects, setProjects] = useState<Array<{ projectName: string }>>([
    { projectName: "Namsung" },
    { projectName: "Yabuki" },
    { projectName: "Reefer" },
    { projectName: "Job Portal" },
    { projectName: "General" },
  ]);
  return (
    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
      <DialogTrigger asChild>
        <Button variant={"ghost"} className="font-medium text-xl">
          Projects
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="">
          <DialogTitle>Project List</DialogTitle>
        </DialogHeader>
        <DialogDescription aria-hidden hidden />
        <div className="flex flex-col">
          {projects
            .filter((p) =>
              p.projectName
                .trim()
                .toLowerCase()
                .includes(projectSearch.toLowerCase()),
            )
            .map((p, index) => (
              <div
                key={index}
                className="p-2 hover:bg-foreground/5 hover:cursor-pointer transition-all duration-300 rounded-md flex gap-2"
                onClick={() => setOpenDialog(false)}
              >
                <CornerDownRight />
                {p.projectName}
              </div>
            ))}
        </div>

        <DialogFooter>
          <InputGroup>
            <InputGroupInput
              placeholder="Search Projects..."
              onChange={(e) => setProjectSearch(e.target.value)}
            />
            <InputGroupAddon>
              <SearchIcon />
            </InputGroupAddon>
          </InputGroup>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectsDialog;
