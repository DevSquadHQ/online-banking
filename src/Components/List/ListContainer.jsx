import "./ListContainer.css";

const ListContainer = (props) => {
  const { children } = props;
  return (
    <>
      <div className="list-container">{children}</div>
    </>
  );
};
export default ListContainer;
