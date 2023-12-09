import Aurelia from "aurelia";
import { RouterConfiguration } from "@aurelia/router";
import { MyApp } from "./my-app";

Aurelia.register(
  RouterConfiguration.customize({
    title: "${componentTitles}${appTitleSeparator}Edenbridge",
    useUrlFragmentHash: false
  })
)
  .app(MyApp)
  .start();
