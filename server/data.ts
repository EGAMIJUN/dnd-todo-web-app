import type z from "zod";
import type { taskResponseSchema } from "./src/validators/task/schema";
import type { picResponseSchema } from "./src/validators/pic/schema";

type Data = Array<z.infer<typeof taskResponseSchema>>;

let data: Data = [];

export const setData = (newData: Data) => {
  data = newData;
};
export const getData = () => {
  return data;
};

type PICList = Array<z.infer<typeof picResponseSchema>>;

let picList: PICList = [
  {
    id: 1,
    tableId: 1,
    seatNumber: 1,
    name: "Test1",
    image: "https://picsum.photos/200/300?grayscale",
  },
  {
    id: 2,
    tableId: 1,
    seatNumber: 2,
    name: "Test2",
    image: "https://picsum.photos/200/300?grayscale",
  },
  {
    id: 3,
    tableId: 1,
    seatNumber: 3,
    name: "Test3",
    image: "https://picsum.photos/200/300?grayscale",
  },
  {
    id: 4,
    tableId: 2,
    seatNumber: 1,
    name: "Test4",
    image: "https://picsum.photos/200/300?grayscale",
  },
  {
    id: 5,
    tableId: 2,
    seatNumber: 2,
    name: "Test5",
    image: "https://picsum.photos/200/300?grayscale",
  },
  {
    id: 6,
    tableId: 2,
    seatNumber: 3,
    name: "Test6",
    image: "https://picsum.photos/200/300?grayscale",
  },
  {
    id: 7,
    tableId: 3,
    seatNumber: 1,
    name: "Test7",
    image: "https://picsum.photos/200/300?grayscale",
  },
  {
    id: 8,
    tableId: 3,
    seatNumber: 2,
    name: "Test8",
    image: "https://picsum.photos/200/300?grayscale",
  },
  {
    id: 9,
    tableId: 3,
    seatNumber: 3,
    name: "Test9",
    image: "https://picsum.photos/200/300?grayscale",
  },
  {
    id: 10,
    tableId: 4,
    seatNumber: 1,
    name: "Test10",
    image: "https://picsum.photos/200/300?grayscale",
  },
  {
    id: 11,
    tableId: 4,
    seatNumber: 2,
    name: "Test11",
    image: "https://picsum.photos/200/300?grayscale",
  },
  {
    id: 12,
    tableId: 4,
    seatNumber: 3,
    name: "Test12",
    image: "https://picsum.photos/200/300?grayscale",
  },
];

export const setPicList = (newList: PICList) => {
  picList = newList;
};
export const getPicList = () => {
  return picList;
};
