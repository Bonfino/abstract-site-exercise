import "./Navbar.css";

export default function Navbar() {
  return (
    <header>
      <ul className="flex bg-black h-20 items-center px-8 justify-between">
        <div>
          <li className="hover:text-gray-400">
            <a href="">Abstract</a>
          </li>
          <li>
            <p>|</p>
          </li>
          <li className="hover:underline">
            <a href="">Help Center</a>
          </li>
        </div>
        <div>
          <li>
            <button className="bg-[#191a1b]">Submit a request</button>
          </li>
          <li>
            <button className="bg-[#4C5FD5] hover:bg-white hover:text-black transition-all duration-500 border-transparent">
              Sign in
            </button>
          </li>
        </div>
      </ul>
    </header>
  );
}
