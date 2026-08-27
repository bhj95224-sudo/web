import React, { useRef, useState } from "react"

export default function LoginForm() {
    const nameRef = useRef<HTMLInputElement>(null);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const chengeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value)
    }
    const chengeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }
    const chengePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }
    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (username.trim() === '') {
            nameRef.current?.focus();
            return;
        }
        if (email.trim() === '') {
            alert('이메일을 입력하세요');
            return;
        }
        if (password.trim() === '') {
            alert('비밀번호를 입력하세요');
            return;
        }
        alert(`네임 : ${username}\n 이메일 : ${email}\n 비밀번호 : ${password}`);
        setUsername('');
        setEmail('');
        setPassword('');
    }
    return (
        <form onSubmit={submitHandler}>
            <label htmlFor="username">UserName</label>
            <input type="text" id="username" name="username" ref={nameRef} value={username} onChange={chengeName}/>
            <label htmlFor="useremail">UserEmail</label>
            <input type="email" id="useremail" placeholder="이메일을 입력하세요" value={email} onChange={chengeEmail} />
            <label htmlFor="password">PassWord</label>
            <input type="password" id="password" name="password" placeholder="비밀번호를 입력하세요" value={password} onChange={chengePassword} />
            <button type="submit">LogIn</button>
        </form>
    )
}