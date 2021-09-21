const Soon = (props) => {
  const soonImg = `${process.env.PUBLIC_URL}/assets/soon.png`;

  return (
    <div className="centered">
      <img src={soonImg} alt="قريباً" />
    </div>
  );
};
export default Soon;
