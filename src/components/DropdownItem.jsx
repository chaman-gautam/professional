import React, { useState } from "react";
import { Link } from "react-router-dom";

const DropdownItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const hasSubItems = !!item.subItems;

  return (
    <li
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Main Item */}
      {hasSubItems ? (
        <button
          className="hover:text-selective_yellow flex items-center h-full gap-1 w-full text-left "
          onClick={() => setIsOpen(!isOpen)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setIsOpen(!isOpen);
            }
          }}
        >
          {item.label} <span>{isOpen ? "▲" : "▼"}</span>
        </button>
      ) : (
        <Link
          to={item.href}
          className="hover:text-selective_yellow block px-4 py-2"
        >
          {item.label}
        </Link>
      )}

      {/* Submenu */}
      {hasSubItems && isOpen && (
        <ul
          className="absolute top-full left-0 w-64 rounded bg-gradient-to-r from-smoky_black/85 to-rosewood/85 transition-transform duration-300 ease-in-out  
        animate-gradient shadow-lg z-50"
        >
          {item.subItems.map((subItem, index) => (
            <DropdownItem key={index} item={subItem} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default DropdownItem;
