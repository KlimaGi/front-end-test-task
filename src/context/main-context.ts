import { createContext } from "react";
import { MainContextInterface } from '../types/main-types';

// @ts-ignore
const MainContext = createContext<MainContextInterface>();

export default MainContext;