function Header({setIsLoggedIn}) {

  function handleLogout() {
    // event.preventDefault();
    setIsLoggedIn(false);
  }

  return (
    <div className="bg-[#5B5790] h-14 w-full  place-items-center flex justify-around">
      <h1 className=" font-bold font-mono text-2xl not-italic hover:italic">Cookie Stand Admin</h1>
      <div>
        
        <div>
        <p></p>
        <button onClick={handleLogout}>Sign Out</button>
        </div>
       
      </div>
    </div>
  )
}

export default Header;