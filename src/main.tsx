import { ViteReactSSG } from "vite-react-ssg";
import { routes } from "./App";
import "@fontsource-variable/manrope";
import "@fontsource-variable/bricolage-grotesque";
import "./index.css";

export const createRoot = ViteReactSSG({ routes });