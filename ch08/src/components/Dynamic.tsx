import useInputEx from "../hooks/useInputEx";

export default function Dynamic() {
    const {
        value: name, error: nameError,
        onChange: handleNameChange, validate: validateName
    } = useInputEx<string>({
        initialValue: '',
        validateFn: (v) => {
            if (!v) return '이름은 필수 입니다';
            return undefined;
        }
    })

    const {
        value: email, error: emailError,
        onChange: handleEmailChange, validate: validateEmail
    } = useInputEx<string>({
        initialValue: '',
        validateFn: (v) => {
            if (!v.includes('@')) return '올바른 이메일을 입력하세요';
            return undefined;
        }
    })
    const {
        value: isAgreed, error: isAgreedError,
        onChange: handleAgreedChange, validate: validateAgreed
    } = useInputEx<boolean>({
        initialValue: false,
        validateFn: (v) => {
            if (!v) return '약관에 동의해야 합니다';
            return undefined;
        },
        type: 'checkbox'
    })
    const {
        value: gender, error: genderError,
        onChange: handleGenderChange, validate: validateGender
    } = useInputEx<string>({
        initialValue: 'male',
        validateFn: (v) => {
            if (!v) return '성별을 선택하세요';
            return '';
        },
        type: 'radio'
    })
    const {
        value: phone, error: phoneError,
        onChange: handlePhoneChange, validate: validatePhone
    } = useInputEx<string>({
        initialValue: '',
        validateFn: (v) => {
            if (!v.match(/^\d{11}$/)) return '전화번호는 11자리여야 합니다';
            return undefined;
        },
        type: 'radio'
    })
    const {
        value: lang, error: langError,
        onChange: handleLangChange, validate: validateLang
    } = useInputEx<string>({
        initialValue: '',
        validateFn: (v) => {
            if (!v) return '좋아하는 언어를 선택하세요';
            return '';
        },
        type: 'radio'
    })

    const {
        value: skills, error: skillsError,
        onChange: handleSkillsChange, validate: validateSkills } = useInputEx<string[]>(
            initialValue: [],
            validateFn: [v]=> {
        v.length === 0
            ? '하나 이상 선택해주세요' : undefined,
            type : 'checkbox'
    })
    

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateName() && validateEmail() && validatePhone() && validateAgreed() && validateGender() && validateLang() && validateSkills()) {
            console.log('폼제출', { name, email, isAgreed, gender, phone, lang, skills })
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">이름: </label>
                <input type="text" value={name} onChange={handleNameChange} id="name" />
                {nameError && <p>{emailError}</p>}
            </div>
            <div>
                <label htmlFor="email">이메일: </label>
                <input type="email" value={email} onChange={handleEmailChange} id="email" />
                {emailError && <p>{emailError}</p>}
            </div>
            <div>
                <label htmlFor="phone">전화번호 : </label>
                <input type="tel" value={phone} onChange={handlePhoneChange} id="phone" />
                {phoneError && <p>{phoneError}</p>}

            </div>
            <div>
                <label>
                    <input type="checkbox" checked={isAgreed} onChange={handleAgreedChange} />
                    동의합니다
                </label>
                {isAgreedError && <p>{genderError}</p>}
                {isAgreedError && <p>{langError}</p>}
            </div>
            <div>
                <h3>성별 : </h3>
                <label>
                    <input type="radio" name="gender" value='mael' checked={gender === 'male'} onChange={handleGenderChange} />
                    남성
                </label>
                <label>
                    <input type="radio" name="gender" value='female' checked={gender === 'female'} onChange={handleGenderChange} />
                    여성
                </label>
            </div>
            <div>
                <h3>언어 : </h3>
                <input type="radio" name="lang" value='html' checked={lang === 'html'} onChange={handleLangChange} id="lang" />html
                <input type="radio" name="lang" value='css' checked={lang === 'css'} onChange={handleLangChange} id="lang" />css
                <input type="radio" name="lang" value='JavaScript' checked={lang === 'JavaScript'} onChange={handleLangChange} id="lang" />JavaScript
            </div>
            <div>
                <h3>스킬 체크박스</h3>
                <label>
                    <input type="checkbox" value={'figma'} checked={skills.includes('figma')} onChange={handleSkillsChange} />figma
                </label>
                <label>
                    <input type="checkbox" value={'photoshop'} checked={skills.includes('photoshop')} onChange={handleSkillsChange} />photoshop
                </label>
                <label>
                    <input type="checkbox" value={'illust'} checked={skills.includes('illust')} onChange={handleSkillsChange} />illust
                </label>
                {skillsError && <p>{skillsError}</p>}
            </div>
            <button type="submit">전송</button>
        </form>
    )
}