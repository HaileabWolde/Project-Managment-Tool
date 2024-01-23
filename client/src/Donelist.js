import {Droppable, Draggable} from "react-beautiful-dnd"
import {FaEdit, FaTrash} from 'react-icons/fa'
const List = ({list, removeItem, editItem})=> {
    return (
        <Droppable  droppableId="ROOTTWO" type='groupTwo'>
            { (provided)=> (
                  <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="flex flex-col w-full">
                  {
                      list.map((card, index)=> (
                        <Draggable
                        draggableId={card.id} index={index} key={card.id}
                        >
                            {(provided)=> (
                                <div
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                ref={provided.innerRef}
                                className='flex w-full justify-between' key={card.id}>
                                <p>{card.title}</p>
                                <div className='flex justify-between items-center gap-2'>
                                    <button
                                    onClick={()=> editItem(card.id)} 
                                    ><FaEdit/></button>
                                    
                                    <button onClick={()=> removeItem(card.id)}><FaTrash/></button>
                                </div>
                                </div>
                            )
                            }
                        </Draggable>
                          
                      ))
                  }
             </div>
            )
            }
        </Droppable>
     
    )
}
export default List