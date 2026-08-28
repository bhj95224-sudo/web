import { useState } from "react";

export default function useInput(innitialValue = '') {
    const [valus, setValue] = useState(innitialValue);
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }
    return { valus, onChange }
}