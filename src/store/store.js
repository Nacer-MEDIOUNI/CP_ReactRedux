import { createStore } from "redux";

import rootReducer from "../JS/Reducers/rootReducer";

const store = createStore(rootReducer);
export default store;
