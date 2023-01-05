const Header = (props) => {
  const {darkMode, handleToggleDarkMode} = props

  const styles = {
    color: darkMode ? '#fff' : "#000",
    transition: "color .3s linear"
  }

  return (
    <div className="header">
      <h1 style={styles}>Notes</h1>
      <button onClick={handleToggleDarkMode} className="save-button">Toggle Mode</button>
    </div>
  );
};

export default Header;
