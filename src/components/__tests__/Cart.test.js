
import {render,fireEvent,screen} from "@testing-library/react"
import {act} from "react-dom/test-utils"
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mock/mockResMenu.json";
import appStore from "../../utils/appStore";
import { Provider } from "react-redux";
global.fetch=jest.fn(()=>
   Promise.resolve({
        json:()=>Promise.resolve(MOCK_DATA)
    })
);

it("should load Restaurant Menu Component",async()=>{

    await act(async()=>render(
     <Provider store={appStore}>
    <RestaurantMenu/>
    </Provider>
    ));

    const accordionHeader=screen.getByText("Recommended(19)");
    fireEvent.click(accordionHeader);
});