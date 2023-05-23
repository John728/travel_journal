import Header from "./componants/Header";
import TravelCard from "./componants/TravelCard";
import { data } from "./data";

export default function App() {

    let mapped_data = data.map(item => <TravelCard key={item.id} {...item}/>);

    return (
        <div>
            <Header/>
            <div className="TravelCards__container">
                {mapped_data}
            </div>
        </div>
    ); 
}