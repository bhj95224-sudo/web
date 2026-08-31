import Checkbox from "./html/Checkbox";
import Button from "./html/Button";
import Input from "./html/Input";
import SvgClose from "./svg/SvgClose";
import SvgPencil from "./svg/SvgPencil";
import { useState } from "react";
export default function TodoListItem({ todo, toggleTodo, deleteTodo, modifyTodo }: {
    todo: Todo;
    toggleTodo: (id: number) => void;
    deleteTodo: (id: number) => void;
    modifyTodo: (id: number, title: string) => void;
}) {
    const [isModify, setIsModify] = useState(false);
    const [modifyTitle, setModifyTitle] = useState('');
    const modifyHandler = () => {
        setIsModify((modify) => !modify);
        setModifyTitle(modifyTitle === '' ? todo.title : modifyTitle);
        if (modifyTitle.trim()! == '' && modifyTitle !== todo.title) {
            modifyTodo(todo.id, modifyTitle)
        }
    }
    return (
        <>
            <li className={`todo__item ${todo.done && 'todo__item--complete'}`}>
                {
                    !isModify && (
                        <Checkbox parentClassName='todo__item--complete-group' type="checkbox" className="todo__checkbox" checked={todo.done} onClick={() => toggleTodo(todo.id)}>
                            {todo.title}
                        </Checkbox>
                    )
                }
                {/*할 일을 수정할 때만 노출 (.todo__checkbox-group은 비노출) */}
                {
                    isModify && (
                        <Input type="text" className="todo__modify-input" value={modifyTitle} onChange={(e) => setModifyTitle(e.target.value)} />
                    )
                }
                {/*     <input type="text" className="todo__modify-input" /> */}
                <div className="todo__button-group">
                    <Button className="todo__action-button" onClick={modifyHandler}>
                        <SvgPencil />
                    </Button>
                    <Button className="todo__action-button" onClick={() => deleteTodo
                        (todo.id)}>
                        <SvgClose />
                    </Button>
                </div>
            </li>
            {/* <li className="todo__item todo__item--complete">
                <Input type="text" className="todo__modify-input" />
                <div className="todo__button-group">
                    <Button className="todo__action-button">
                        <SvgPencil />
                    </Button>
                    <button className="todo__action-button">
                        <svg
                            width="15"
                            height="16"
                            viewBox="0 0 15 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M7.50002 9.81827L12.9548 15.2731L14.7731 13.4548L9.31829 8L14.7731 2.54518L12.9548 0.726901L7.50002 6.18173L2.04519 0.726902L0.226918 2.54518L5.68174 8L0.226919 13.4548L2.04519 15.2731L7.50002 9.81827ZM7.50002 9.81827L9.31829 8L7.50002 6.18173L5.68174 8L7.50002 9.81827Z"
                                fill="#4F4F4F"
                            />
                            <path
                                d="M7.50002 9.81827L9.31829 8L7.50002 6.18173L5.68174 8L7.50002 9.81827Z"
                                fill="#4F4F4F"
                            />
                        </svg>
                    </button>
                </div>
            </li> */}
        </>
    )
}