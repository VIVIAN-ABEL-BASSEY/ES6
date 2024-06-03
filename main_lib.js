import test from "./lib";//importing from a default export, we dont need to put what we are exporting inside curly braces

import { sqr } from "./lib";//Line 3 and 4 importing from a named export, we need to put what we are exporting inside curly braces

import { sum } from "./lib";
import test, {sqr,sum} from "./lib";
import * as all from "./lib"



