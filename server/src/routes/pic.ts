import { Hono } from "hono";
import { getPicList, setPicList } from "../../data";
import { createPicValidator, movePicValidator } from "../validators/pic";

const picRoutes = new Hono();

// get all pic
picRoutes.get("/", (c) => {
  return c.json({ picList: getPicList() });
});

// chain for id route
picRoutes.get("/:id", (c) => {
  return c.json({});
});

// chain for id route
picRoutes.post("/", createPicValidator, (c) => {
  const currentPicList = getPicList();
  const newData = c.req.valid("json");
  // add new pic to currentPicLis
  currentPicList.push({
    id: currentPicList.length + 1,
    name: newData.name,
    tableId: newData.tableId,
    seatNumber: newData.seatNumber,
    image: "something",
  });
  setPicList(currentPicList);
  return c.json({ message: "success" });
});

picRoutes.put("/", movePicValidator, (c) => {
  const data = c.req.valid("json");

  const targetPIC = getPicList().find((p) => p.id === data.targetPicId)!;

  const selectedPIC = getPicList().find((p) => p.id === data.selectedPicId)!;

  const updatedData = getPicList().map((pic) => {
    if (pic.id === data.targetPicId)
      // update target pic location to selected location
      return {
        ...selectedPIC,
        id: targetPIC?.id!,
        name: targetPIC?.name!,
      };
    if (pic.id === data.selectedPicId) {
      // update pic location to target pic previous location
      return {
        ...targetPIC,
        id: selectedPIC?.id!,
        name: selectedPIC?.name!,
      };
    }
    return pic;
  });

  setPicList(updatedData);

  return c.json({ message: "success" });
});

export { picRoutes };
