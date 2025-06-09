import gradient from "gradient-string";
import { PEEL_ONION } from "@/const.ts";

export default function showTitle() {
  const colors = ["#9d4edd", "#c77dff", "#e0aaff", "#ff85a1", "#ffb3c6"];
  console.log(gradient(colors).multiline(PEEL_ONION));
}
