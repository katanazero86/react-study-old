import React, {Component} from 'react';

// connect 함수를 사용하여, 스토어 연동
import {connect} from 'react-redux'
import {increment, decrement} from "../../store/test/testStore";

// class 기반으로 작성된 react 컴포넌트
class PersonComponent extends Component {

    constructor(props) {
        // this.setState()를 호출 금지!
        // this.stateName 을 직접 할당할 수 있는 유일한 곳
        console.log('constructor..');
        super(props);
        this.state = {
            nameState : '불꽃소방대',
        };
        this.changeNameState = this.changeNameState.bind(this); // 자동바인딩을 안하니.. 생성자에서 bind 를 해준다.
    }

    componentDidMount() {
        console.log('componentDidMount..');
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('shouldComponentUpdate..')
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate..')
        return null;
    }

    componentDidUpdate() {
        console.log('componentDidUpdate..');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount..');
    }

    changeNameState(value) {
        if(value) {
            this.setState((state)=> {
                return state.nameState = value;
            });
        } else {
            this.setState((state)=> {
                return state.nameState = '변경';
            });
        }
    }

    render() {
        return <div>
            <h2 style={{margin : 0, padding : '10px', fontSize : '13px'}}>Hello class base component, {this.state.nameState}</h2>
            <button onClick={() => {this.changeNameState()}}>변경!</button>
            <button onClick={() => {this.changeNameState('불꽃소방대')}}>불꽃소방대!</button>

            <div>스토어 숫자 : {this.props.number}</div>
            <button style={{borderRadius: '5px',
                border: '1px solid #37474f',
                color: '#37474f',
                backgroundColor : '#cfd8dc',
                verticalAlign: 'middle',
                cursor: 'pointer',
                padding: '8px',
                textAlign: 'center'}} onClick={this.props.increment}>증가</button>
            <button style={{borderRadius: '5px',
                border: '1px solid #37474f',
                color: '#37474f',
                backgroundColor : '#cfd8dc',
                verticalAlign: 'middle',
                cursor: 'pointer',
                padding: '8px',
                textAlign: 'center'}} onClick={this.props.decrement}>감소</button>
        </div>;
    }

}


// props 로 넣어줄 스토어 상태값
const mapStateToProps = state => ({
    number: state.counter.number,
});

// props 로 넣어줄 액션 생성함수
const mapDispatchToProps = (dispatch) => ({
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PersonComponent);
