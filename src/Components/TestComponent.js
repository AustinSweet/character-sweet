import React, { Component } from 'react';
import { connect } from 'react-redux';
import { testAction } from '../Actions';

class TestComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div style={{color: "white"}}>
                <div>
                    { this.props.testField }
                </div>
                <div>
                    <button onClick={() =>
                    this.props.TEST('test')}></button>
                </div>
            </div>
        )
    }

}

const mapStateToProps = (state) => ({
    testField: state.testField
});

const mapDispatchToProps = {
    testAction,
};

const TestContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TestComponent);

export default TestContainer;