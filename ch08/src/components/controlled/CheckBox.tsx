import { useState } from "react";

export default function CheckBox() {
    const [isChecked, setIsChecked] = useState(false);
    const handCheckBoxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(e.target.checked);
    }
    return (
        <form>
            <input type="checkbox" checked={isChecked} onChange={handCheckBoxChange} id="ch" />
            <label htmlFor="ch">아이템1 : {isChecked ? '선택됨':'미선택'}</label>
        </form>
    )
}