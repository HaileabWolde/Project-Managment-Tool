import TODO from "./TODO";
import Done from "./Done";
import DOING from "./DOING";

const Home = ()=>{
    return (
        <div className=" flex gap-4 justify-between  pl-8 pr-8 pt-[100px]">
            <TODO/>
            <DOING/>
            <Done/>
            
        </div>
    )

}
export default Home;