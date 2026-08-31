
import TodoListItem from "./TodoListItem";
import TodoListItemEmpty from "./TodoListItemEmpty";

export default function TodoList({todos,toggleTodo,deleteTodo,modifyTodo}:{todos:Todo[]; 
    toggleTodo:(id:number)=>void;
    deleteTodo:(id:number)=>void;
    modifyTodo:(id:number,title:string)=>void;
}) {
    return (
        <ul className="todo__list">
            {/* <!-- 할 일 목록이 없을 때 --> */}
            {todos.length ===0 && <TodoListItemEmpty/>}
            
            {/* <!-- 할 일 목록이 있을 때 --> */}
            {todos.length>0 && todos.map((todo) => <TodoListItem key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} modifyTodo={modifyTodo}></TodoListItem>)}
            {/* <!-- 할 일이 완료되면 .todo__item--complete 추가 --> */}
        </ul>
    )
}