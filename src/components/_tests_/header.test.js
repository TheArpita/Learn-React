import {render} from "@testing-library/react";
import { Provider } from "react-redux";
import HeaderComponent from "../HeaderItems";
import store from "../../Utils/store";

//provide router without browser
import {StaticRouter} from "react-router-dom/server";

test("Logo should load on rendering header", () => {
    //load header
    const header = render(
    <StaticRouter>
        <Provider store={store}>
            <HeaderComponent/>
        </Provider>
    </StaticRouter>
    );
    //check if logo is loaded
})