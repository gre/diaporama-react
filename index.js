var Diaporama = require("diaporama");

function lib (React) {

  var PropTypes = React.PropTypes;

  function affectProps (obj, props) {
    for (var k in props) {
      if (k !== "onDiaporamaCreated") // blacklisting only for now. We might do whitelist instead ?
        obj[k] = props[k];
    }
    return obj;
  }

  var DiaporamaElement = React.createClass({
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
      var container = this.getDOMNode();
      var opts = affectProps({}, this.props);
      this.diaporama = Diaporama(this.getDOMNode(), opts);
      if (this.props.onDiaporamaCreated) this.props.onDiaporamaCreated(this.diaporama);
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
      return React.createElement("div", { ref: "container" });
    }
  });

  return DiaporamaElement;
}

module.exports = lib(require("react"));

module.exports.lib = lib;
