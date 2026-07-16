import { createContext } from "react";

export const ScrollCtx = createContext<{ scrolled: boolean }>({ scrolled: false });

