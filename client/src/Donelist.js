import {FaEdit, FaTrash} from 'react-icons/fa'
const List = ({list, removeItem, editItem})=> {
    return (
       <div className="flex flex-col w-full">
            {
                list.map((card)=> (
                    <div className='flex w-full justify-between' key={card.id}>
                        <p>{card.title}</p>
                        <div className='flex justify-between items-center gap-2'>
                            <button
                            onClick={()=> editItem(card.id)} 
                            ><FaEdit/></button>
                            
                            <button onClick={()=> removeItem(card.id)}><FaTrash/></button>
                        </div>
                        </div>
                ))
            }
       </div>
    )
}
export default List