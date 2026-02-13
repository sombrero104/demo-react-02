import { useEffect } from "react";

const Even = () => {
    useEffect(() => {
        // useEffect의 콜백 함수에서 반환하는 함수를 '클린업', '정리함수'라고 부른다.
        // 이 정리함수는 useEffect가 끝날 때 실행이 된다.
        // 두번째 인수가 빈 배열이기 때문에 mount가 될 때 이 useEffect가 실행이 되고,
        // 끝날 때(즉, unmount 될 때) 아래 정리함수가 실행이 된다.
        return () => {
            console.log("unmount");
        };
    }, []);
    return <div>짝수입니다.</div>;
};

export default Even;