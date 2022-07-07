const connect =
  (mapStateToProps, mapDispatchToProps) =>
    (WrappedComponent) => (props) => {
      return <WrappedComponent {...props} />
    }
export default connect  