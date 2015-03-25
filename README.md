# Diaporama React bindings

Use diaporama as a react component

```jsx
{
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
}
```

