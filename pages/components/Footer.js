function Footer({counter}) {
  return (
    <div className="bg-[#5B5790] flex justify-around px-2 py-2 w-full mt-24">
      <p className="text-xl tracking-wide animate-pulse">{counter} Locations WorldWide</p> 
      <p>&copy;2022 Farraj All Copyrights are reserved</p>
    </div>
  )
}

export default Footer