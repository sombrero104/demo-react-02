import { useState } from "react";

// [State로 사용자 입력 관리하기]

// 간단한 회원가입 폼 
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개 

const Register = () => {
    const [name, setName] = useState("이름");
    const [birth, setBirth] = useState("");
    const [country, setCountry] = useState("");
    const [bio, setBio] = useState("");

    const onChangeName = (e) => {
        // console.log(e); // 이벤트 내의 e.target.value에 현재 입력된 값을 보관하고 있는 것을 확인할 수 있다. 
        setName(e.target.value);
    }

    const onChangeBirth = (e) => {
        setBirth(e.target.value);
    }

    const onChangeCountry = (e) => {
        setCountry(e.target.value);
    }

    const onChangeBio = (e) => {
        setBio(e.target.value);
    }

    return (
        <div>
            <div><input value={name} onChange={onChangeName} placeholder={"이름"} /> {name}</div>
            <div><input type="date" value={birth} onChange={onChangeBirth} /> {birth}</div>
            <div>
                <select value={country} onChange={onChangeCountry}>
                    <option value="">선택</option>
                    <option value="kr">한국</option>
                    <option value="us">미국</option>
                    <option value="uk">영국</option>
                </select> {country}
            </div>
            <div>
                <textarea value={bio} onChange={onChangeBio} /> {bio}
            </div>
        </div>
    );
}

export default Register;