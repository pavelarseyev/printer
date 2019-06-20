import "babel-polyfill";

import {binder, fwa} from "./libs/binder";
import { main } from "./modules/module";



binder({
    bounds: {
        "html": [main]
    },
    runTests: false
});
