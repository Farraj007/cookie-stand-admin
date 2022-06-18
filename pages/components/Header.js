function Header({ setIsLoggedIn, UserName }) {
  function handleLogout() {
    // event.preventDefault();
    setIsLoggedIn(false);
  }

  return (
    <div className="bg-[#5B5790] h-14 w-full  place-items-center flex justify-around">
      <h1 className=" font-bold font-mono text-2xl not-italic hover:italic">
        Cookie Stand Admin
      </h1>
      <div className="flex justify-between w-1/5">
      
        <div> {UserName}</div>
        <button onClick={handleLogout}>Sign Out</button>
      </div>
    </div>
  );
}

export default Header;
