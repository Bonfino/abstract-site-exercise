import "./Navbar.css";
import { FaSearch } from "react-icons/fa";

export default function Navbar() {
  return (
    <ul className="flex bg-black h-20 items-center px-8 justify-between">
      <div className="flex">
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
        <li className="pr-2">
          <FaSearch />
        </li>
        <li></li>
      </div>
    </ul>
  );
}
