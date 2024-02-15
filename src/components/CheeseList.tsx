import {Cheese as CheeseObj} from "../models/Cheese/Cheese.ts";
import Cheese from "./Cheese.tsx";
import styled from "styled-components";
import {useContext} from "react";
import {CheeseContext} from "../models/Cheese/CheeseContext.tsx";

const StyledDiv = styled.div`
    display: flex;
    flex-flow: row wrap;
    gap: 10px
`;


function CheeseList() {
    const {cheeses} = useContext(CheeseContext);

    return (
        <StyledDiv>
            {cheeses.map((cheese: CheeseObj, index: number) => <Cheese key={cheese.name + "_" + index}
                                                                       cheese={cheese}/>)}
        </StyledDiv>
    );
}

export default CheeseList;

// const styles = {
//     container: {
//         display: "flex",
//         flexFlow: "row",
//         flexWrap: "wrap",
//         gap: 10
//     }
// }
