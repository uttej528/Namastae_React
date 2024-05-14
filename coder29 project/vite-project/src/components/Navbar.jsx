

const Navbar = () => {
  return (
    <nav className="flex justify-evenly items-center shadow-md py-3 mb-10">
    <h2 className="font-extrabold text-2xl">Project1</h2>
      <div>
        <input type="search" placeholder="Search Here..." className="outline-none border-2 px-3 py-1 rounded-md w-[40vw] hover:border-purple-500"></input>
      <button className="px-3 py-1 text-white bg-gray-500 rounded-md ml-2 hover:bg-purple-500">Search</button>
      </div>
      <ul className="flex gap-5 text-xl font-bold">
        <li>Home</li>
        <li>Cart</li>
      </ul>
    </nav>
  );
}

export default Navbar;
