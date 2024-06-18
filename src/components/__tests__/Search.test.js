import { fireEvent, render,screen } from "@testing-library/react";
import MOCK_DATA from "./../mock/mockResListData.json";  
import Body from "../Body";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";

global.fetch=jest.fn(()=>{

    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA);
        }
    })

});

it("Should search Res List for burger text input",async()=>{
  
   await act(async()=>   
    render(
   <BrowserRouter>
     <Body/>
   </BrowserRouter>
   )
);

    const searchBtn=screen.getByRole("button",{name:"Search"});
    console.log(searchBtn);
    
    const searchInput=screen.getByTestId("searchInput");

    fireEvent.change(searchInput,{target:{value:"burger"}});

    fireEvent.click(searchBtn);

  const cards=screen.getAllByTestId("resCard");

    expect(cards.length).toBe(1);

    expect(searchBtn).toBeInTheDocument();
});