import {useState, useEffect} from "react"
import List from "./Donelist"

const getLocalStorage = () => {
    const list = localStorage.getItem('done');
  
    if (list) {
        const listOne = JSON.parse(list)
      return (listOne) // Parse the stored value to an object
    } else {
      return [];
    }
  };
const TODO = ()=>{
    

    const [name, setName] = useState('')
    const [isEditing, setEditing] = useState(false)
    const [list, setList] = useState(getLocalStorage())
    const [editId, setEditId] = useState(null)

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(!name){
            console.log("Please Enter A value")
        }
        else if(name && isEditing){
           setList(
            list.map((item)=> {
                if(item.id === editId){
                    return {...item, title: name}
                }
                else{
                    return item
                }
            })
           )
           setName('')
           setEditing(false)
           setEditId(null)
        }
        else {
            const newItem = {
                id: new Date().getTime().toString(),
                title: name
            }
            setList([
                ...list,
                newItem
            ])
        setName('')
        }

    }
    const removeItem = (id)=> {
        setList(list.filter((card)=> card.id !== id))
    }

    const editItem = (id)=> {
        const ExisitingItem = list.find((card)=> card.id === id)

        if(ExisitingItem){
            setEditId(ExisitingItem.id)
        }
        setEditing(true)
        setName(ExisitingItem.title)

    }
    useEffect (()=> {
        localStorage.setItem('done', JSON.stringify(list))
    }, [list])
    return (
        <section className="bg-[#F1F5F1] shadow-md rounded-lg  w-[40%] flex flex-col gap-8 p-8">
          <h1 className="font-serif text-center text-2xl">Done List</h1>
          <form
          onSubmit={handleSubmit}
          className="w-full flex justify-between"
          >
            <input 
            type="text"
            placeholder="Add To Do List Item"
            value={name}
            onChange={(e)=> setName(e.target.value)}
            className="p-1rem bg-[#edf2f8] rounded-[12px] shadow-lg  border-none outline-none w-full mr-4 p-2"
            />
            <button
            type="submit"
            className="bg-[#313bac] text-white pl-6 pr-6 pt-3 pb-3 rounded-[10px] cursor-pointer hover:bg-[#2430af] font-bold"
            >
                {
                    isEditing ? 'Edit' : 'Submit'
                }
            </button>
          </form>
          <div className="flex flex-col gap-4 justify-center">
          {
            list.length > 0 && 
            <List list={list} removeItem={removeItem} editItem ={editItem}/>
          }
          </div>
        
        </section>
    )
}
export default TODO