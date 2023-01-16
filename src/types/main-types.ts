import { Dispatch, SetStateAction } from "react";

export type WineItemInterface = {
  id: String,
  name: String,
  type: String
}

export type MainContextInterface = {
  items: WineItemInterface[] | [],
  setItems: Dispatch<SetStateAction<WineItemInterface[] | []>>,
}