import { useState, useRef } from "react";

// [State로 사용자 입력 관리하기]

// [간단한 회원가입 폼]  
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개 

const Register = () => {
    // 이전(Register_bk.jsx)에는 여러개의 State로 나눠서 관리했던 
    // 4가지 데이터(name, birth, country, bio)를
    // 아래와 같이 객체 형태로 만들어서 하나의 State로 함께 관리할 수 있다. 
    const [input, setInput] = useState({
        name: "",
        birth: "",
        country: "",
        bio: ""
    });
    const countRef = useRef(0);

    // 통합 이벤트 핸들러. 이벤트가 일어나는 target에 해당하는 name에 value를 설정해줌. 
    const onChange = (e) => {

        countRef.current++;
        console.log(countRef.current);
        // onChange 가 호출될 때마다 카운트(수정한 횟수)가 늘어남.

        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div>
            <div><input name="name" value={input.name} onChange={onChange} placeholder={"이름"} /> {input.name}</div>
            <div><input name="birth" type="date" value={input.birth} onChange={onChange} /> {input.birth}</div>
            <div>
                <select name="country" value={input.country} onChange={onChange}>
                    <option value="">선택</option>
                    <option value="kr">한국</option>
                    <option value="us">미국</option>
                    <option value="uk">영국</option>
                </select> {input.country}
            </div>
            <div>
                <textarea name="bio" value={input.bio} onChange={onChange} /> {input.bio}
            </div>
        </div>
    );
}
    
export default Register;
