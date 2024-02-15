import {Cheese} from "./Cheese.ts";
import {createContext} from "react";

// const cheeses: Cheese[] = [
//     new Cheese("babibel", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8w_C7rt4CEEHQ6tFHGf7hO0vC-TDyFbEaAegnzewmFg&s"),
//     new Cheese("bleu", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8w_C7rt4CEEHQ6tFHGf7hO0vC-TDyFbEaAegnzewmFg&s"),
//     new Cheese("gouda", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8w_C7rt4CEEHQ6tFHGf7hO0vC-TDyFbEaAegnzewmFg&s", [Roles.admin]),
//     new Cheese("emmental", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8w_C7rt4CEEHQ6tFHGf7hO0vC-TDyFbEaAegnzewmFg&s", [Roles.admin]),
// ];

type CheeseContextType = {
    cheeses: Cheese[];
    isSelected: boolean;
}

export const CheeseContext = createContext<CheeseContextType>({
    cheeses: [],
    isSelected: false,
});
