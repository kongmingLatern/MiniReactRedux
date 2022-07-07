const connect =
  (mapStateToProps, mapDispatchToProps) =>
    (WrappedComponent) => (props) => {
      return <WrappedComponent />
    }
export default connect  