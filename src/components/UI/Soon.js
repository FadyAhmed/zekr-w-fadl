const Soon = (props) => {
  const soonImg = `${process.env.PUBLIC_URL}/assets/logo.png`;

  return (
    <div className="centered">
      <img src={soonImg} alt="قريباً" style={{ justifyContent: "center" }} />
    </div>
  );
};
export default Soon;
