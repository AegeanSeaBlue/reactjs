import React from 'react';
import PropTypes from 'prop-types';

class Bundle extends React.Component {
    state = { mod: null }

    componentWillMount() {
        this.load(this.props);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.load !== this.props.load) {
            this.load(nextProps);
        }
    }

    load(props) {
        // 重置状态
        this.setState({
            mod: null
        });
        // 传入组件的组件
        props.load((mod) => {
            this.setState({
                mod: mod.default ? mod.default : mod
            });
        });
    }

    render() {
        return this.state.mod ? this.props.children(this.state.mod) : null;
    }
}

Bundle.propTypes = {
    load: PropTypes.func,
    children: PropTypes.func
};

export default Bundle;