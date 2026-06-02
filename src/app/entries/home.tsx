import "@app/styles/home.css";
import { createElement } from "react";
import { createRoot } from "react-dom/client";
import { HomePage } from "@pages/home/ui/HomePage";

const app = document.getElementById("app");

if (app) {
  createRoot(app).render(createElement(HomePage));
}
