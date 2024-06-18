
import { sum } from "../sum";

test("Sum of two numbers",()=>{

    const result=sum(3,7);

    expect(result).toBe(10);
});