import { useState, useEffect } from "react";
import TODO from "./TODO";
import Done from "./Done";
import DOING from "./DOING";
import {DragDropContext} from "react-beautiful-dnd"

const Home = ()=>{

    const getLocalStorageDoing = () => {
        const list = localStorage.getItem('doing');
      
        if (list) {
            const listOne = JSON.parse(list)
          return (listOne) // Parse the stored value to an object
        } else {
          return [];
        }
      };

    //this is for the to do list
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
       if(type == "groupOne"){
        const reorderdStores = [...listdoing];
        const sourceIndexONE = source.index;
        const destinationONE = destination.index
       
        const [removedStore] = reorderdStores.splice(sourceIndexONE, 1)
        reorderdStores.splice(destinationONE, 0, removedStore)
        return setListDoing(reorderdStores);
      }
      }
    

      const [list, setList] = useState(getLocalStorage())
      const [listdoing, setListDoing] = useState(getLocalStorageDoing())
    return (
        <div className=" flex gap-4 justify-between  pl-8 pr-8 pt-[100px]">
            <DragDropContext
            onDragEnd={handleDragDrop}
            >
            <TODO list={list} setList={setList}/>
            <DOING list={listdoing} setList={setListDoing}/>
            <Done/>  
            </DragDropContext>
                     
        </div>
    )

}
export default Home;