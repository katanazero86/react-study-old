// 액션 타입 정의
// 문자열 앞에 모듈이름을 넣는다.

const INCREMENT = 'test/INCREMENT';
const DECREMENT = 'test/DECREMENT';

// **** 액션 생섬함수 정의
export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });


// **** 초기상태 정의
const initialState = {
    number: 0,
};

// **** 리듀서 작성
//  꼭 export default 를 해주어야합니다. 나중에 스토어를 만들 때, 이 함수를 필요
export default function counter(state = initialState, action) {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                number: state.number + 1,
            };
        case DECREMENT:
            return {
                ...state,
                number: state.number - 1,
            };
        default:
            return state;
    }
}