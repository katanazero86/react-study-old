import React, {Component} from 'react';

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
        </div>;

    }

}

export default PersonComponent
