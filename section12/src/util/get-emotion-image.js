import emotion1 from '../assets/emotion1.png'; // 이미지 최적화. (브라우저에 캐싱. 새로고침할 경우 다시 이미지를 불러오지 않음.)
import emotion2 from '../assets/emotion2.png'; // 이미지 갯수가 너무 많을 경우에는 publid 폴더에 보관하는게 더 나을 수 있음.
import emotion3 from '../assets/emotion3.png';
import emotion4 from '../assets/emotion4.png';
import emotion5 from '../assets/emotion5.png';

export function getEmotionImage(emotionId) {
    switch (emotionId) {
        case 1: return emotion1;
        case 2: return emotion2;
        case 3: return emotion3;
        case 4: return emotion4;
        case 5: return emotion5;
        default: return null;
    }
}
