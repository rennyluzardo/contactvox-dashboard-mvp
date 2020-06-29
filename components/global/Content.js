function Content(props) {
  return (
    <div className="content" style={{ display: props.display }}>
      {props.children}
    </div>
  );
}

export default Content;
