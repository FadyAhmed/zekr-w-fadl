import classes from "./TextIcon.module.css";

const TextIcon = (props) => {
  return (
    <div className={classes.textIcon}>
      <div className={classes.icon}>{props.icon}</div>
      <div className={classes.label}>{props.label}</div>
    </div>
  );
};

export default TextIcon;
