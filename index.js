'use strict';

var React = require('react');
var Diaporama = require('diaporama');
var PropTypes = React.PropTypes;

function affectProps (obj, props) {
    for (var k in props) {
        if (k !== "onDiaporamaCreated") // blacklisting only for now. We might do whitelist instead ?
            obj[k] = props[k];
    }
    return obj;
}

var DiaporamaElement = React.createClass({

    displayName: 'DiaporamaElement',

    propTypes: {
        data: PropTypes.object.isRequired,
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
        resolution: PropTypes.number,
        paused: PropTypes.bool,
        loop: PropTypes.bool,
        autoplay: PropTypes.bool,
        currentTime: PropTypes.number,
        playbackRate: PropTypes.number,
        onDiaporamaCreated: PropTypes.func // callback giving the diaporama instance. use-case: You can bind Events on the diaporama. See "diaporama" documentation.
    },

    componentDidMount: function () {
        var container = this.refs.container.getDOMNode();
        var opts = affectProps({}, this.props);
        this.diaporama = Diaporama(container, opts);
        if (this.props.onDiaporamaCreated) {
            this.props.onDiaporamaCreated(this.diaporama);
        }
    },

    componentWillUnmount: function () {
        this.diaporama.destroy();
    },

    componentWillReceiveProps: function (props) {
        affectProps(this.diaporama, props);
    },

    shouldComponentUpdate: function () {
        return false;
    },

    render: function () {
        return (<div ref='container' />);
    }
});

module.exports = DiaporamaElement;
