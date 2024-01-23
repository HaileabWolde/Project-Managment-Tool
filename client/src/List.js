import {FaEdit, FaTrash} from 'react-icons/fa'
import {Droppable, Draggable} from "react-beautiful-dnd"
import "./List.css"
const List = ({list, removeItem, editItem})=> {
    return (
        <Droppable droppableId="ROOT" type="group">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="flex flex-col w-full"
            >
              {list.map((card, index) => (
                <Draggable draggableId={card.id} index={index} key={card.id}>
                  {(provided) => (
                    <div
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                      className="flex w-full justify-between draggable-item"
                    >
                      <p>{card.title}</p>
                      <div className="flex justify-between items-center gap-2">
                        <button onClick={() => editItem(card.id)}>
                          <FaEdit />
                        </button>
                        <button onClick={() => removeItem(card.id)}>
                          <FaTrash />
                        </button>
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
    )
}
export default List