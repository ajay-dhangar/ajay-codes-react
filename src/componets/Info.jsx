const Info = (props) => {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.age}</td>
      <td>{props.work}</td>
    </tr>
  );
};

export default Info;