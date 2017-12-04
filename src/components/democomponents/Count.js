import React from 'react'
import { connect } from 'react-redux'
// import { Button } from 'epm-ui'
import { addAction, subAction } from '../../redux/actions'

class Count extends React.Component {
     constructor(props){
        super(props)
     }

      render() {
        return (
            <div style={{padding:"15px"}}>
            <div style={{padding:"20px"}}>欢迎来到count页面</div>
                <h1>count:{ this.props.count }</h1>
                <button onClick={() => this.props.add(1)}>加1</button>
                <button onClick={() => this.props.sub(1)}>减1</button>
          </div>
        );
      }
}

const mapStateToProps = (state) => ({
    count: state.counterReducer.value
})

const mapDispatchToProps = (dispatch) => {
    return {
        add: (num) => {
            dispatch(addAction(num))
        },
        sub: (num) => {
            dispatch(subAction(num))
        }
    }
}

const ConnectCount = connect(
  mapStateToProps,
  mapDispatchToProps
)(Count)

export default ConnectCount
