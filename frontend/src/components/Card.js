import { Link } from "react-router-dom"

const Card = ({ todo, deleteHandler }) => {

    return (
        <div >
        <div className="items">
            <h3>{todo.text}</h3>
           
        </div>

         <div className="del">
        
            <button  className="edi" onClick={()=>deleteHandler(todo)}>delete</button>
            <Link  className="edi"
                to={`/${todo._id}`} 
            >
            edit
            </Link></div>
        </div>
    )
}
export default Card 