import _ from "lodash";
import "./style.css";

const container = document.getElementById("app1");

container.innerHTML = _.join(["Hello", "from", "app1"], " ");
