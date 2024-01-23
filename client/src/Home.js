import { useState, useEffect } from "react";
import TODO from "./TODO";
import Done from "./Done";
import DOING from "./DOING";
import {DragDropContext} from "react-beautiful-dnd"

const Home = ()=>{
    const getLocalStorage = () => {
        const list = localStorage.getItem('list');
      
        if (list) {
            const listOne = JSON.parse(list)
          return (listOne) // Parse the stored value to an object
        } else {
          return [];
        }
      };
   
      const handleDragDrop = (result)=>{
        const {source, destination, type} = result
    
        if(!destination){
            return;
        }
       if(source.droppableId === destination.droppableId && source.index === destination.index){
        return;
       }
       if(type == "group"){
        const reorderdStores = [...list];
        
        const sourceIndex = source.index;
        const destinationIndex = destination.index
        const [removedStore] = reorderdStores.splice(sourceIndex, 1)
        reorderdStores.splice(destinationIndex, 0, removedStore)
        return setList(reorderdStores);
       }
      }
      const [list, setList] = useState(getLocalStorage())
    return (
        <div className=" flex gap-4 justify-between  pl-8 pr-8 pt-[100px]">
            <DragDropContext
            onDragEnd={handleDragDrop}
            >
            <TODO list={list} setList={setList}/>
            <DOING/>
            <Done/>  
            </DragDropContext>
                     
        </div>
    )

}
export default Home;