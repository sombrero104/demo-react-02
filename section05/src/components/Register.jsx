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
    // let count = 0;
    // useRef 사용 안하고 이렇게 변수로 사용할 경우,
    // onChange 가 호출될 때마다 count 변수를 초기화하는 이 부분도 계속 호출되기 때문에
    // 결과 값은 계속 1만 출력됨.
    // useState, useRef 같은 경우에는 값이 다시 리셋되지 않도록 내부적으로 설계되어 있음.

    const inputRef = useRef();

    // 통합 이벤트 핸들러. 이벤트가 일어나는 target에 해당하는 name에 value를 설정해줌. 
    const onChange = (e) => {

        countRef.current++;
        console.log(countRef.current);
        // onChange 가 호출될 때마다 카운트(수정한 횟수)가 늘어남.

        // count++;
        // console.log(count);

        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
    };

    const onSubmit = () => {
        if(input.name === "") { // 이름을 입력하지 않은 경우 focus.
            // console.log(inputRef.current);
            inputRef.current.focus();
        }
    };

    return (
        <div>
            <div><input ref={inputRef} name="name" value={input.name} onChange={onChange} placeholder={"이름"} /> {input.name}</div>
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

            <button onClick={onSubmit}>제출</button>
        </div>
    );
}
    
export default Register;
