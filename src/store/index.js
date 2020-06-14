/**
 * Created by lunk on 2020/6/14.
 */
import { createStore } from "redux";
import reducer from "./reducer";

const store = createStore(reducer);

export  default store;