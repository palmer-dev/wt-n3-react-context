import './App.css'
import {Cheese} from "./models/Cheese/Cheese.ts";
import CheeseScreen from "./components/CheeseScreen.tsx";
import {Roles} from "./models/User/Roles.ts";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import {UserContextProvider} from "./models/User/UserContext.tsx";
import {CheeseContext} from "./models/Cheese/CheeseContext.tsx";
import {useState} from "react";

const cheeses: Cheese[] = [
    new Cheese("babibel", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8w_C7rt4CEEHQ6tFHGf7hO0vC-TDyFbEaAegnzewmFg&s"),
    new Cheese("bleu", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8w_C7rt4CEEHQ6tFHGf7hO0vC-TDyFbEaAegnzewmFg&s"),
    new Cheese("gouda", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8w_C7rt4CEEHQ6tFHGf7hO0vC-TDyFbEaAegnzewmFg&s", [Roles.admin]),
    new Cheese("emmental", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8w_C7rt4CEEHQ6tFHGf7hO0vC-TDyFbEaAegnzewmFg&s", [Roles.admin]),
];

function App() {

    const [isSelected, setIsSelected] = useState<boolean>(false);

    const value = {cheeses, isSelected};

    return (
        <>
            <UserContextProvider>
                <CheeseContext.Provider value={value}>
                    <Header/>
                    <CheeseScreen></CheeseScreen>
                </CheeseContext.Provider>
            </UserContextProvider>
            <Footer onClick={() => setIsSelected(!isSelected)}/>
        </>
    )
}

export default App
