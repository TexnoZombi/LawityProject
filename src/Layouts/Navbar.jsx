import { useState } from "react";
import { content } from "../Content";
import { HiMenuAlt2 } from "react-icons/hi";
import { createElement } from "react";

const Navbar = () => {
  const { nav } = content;
  const [showMenu, setShowMenu] = useState(false);
  const [active, setActive] = useState(0);

  // Текста для пунктов меню (соответствуют порядку иконок)
  const navTexts = ["Главная", "Формат работы", "Цены", "Проекты", "Контакты"];

  return (
    <div className="w-full flex justify-center">
      {/* <div
        className="sm:cursor-pointer fixed top-10 left-10 z-[999] rounded-lg bg-white/40 p-2"
        onClick={() => setShowMenu(!showMenu)}
      >
        <HiMenuAlt2 size={34} />
      </div> */}


      <nav
        // className={`fixed z-[999] flex items-center gap-5 bg-slate-200/60 px-6 py-3 backdrop-blur-md rounded-full text-dark_primary duration-300
        //   /* Мобильная версия (по умолчанию) */
        //   ${showMenu ? "-bottom-full" : "bottom-2"}
        //   /* Десктопная версия (md и выше) */
        //   md:${showMenu ? "top-[-100%]" : "top-10"}
        //   md:bottom-auto
        // `}

        className={`fixed z-[999] flex items-center gap-5 px-6 py-3 rounded-full text-dark_primary duration-300
          backdrop-blur-md bg-slate-200/60 border border-white/10 shadow-lg
          bottom-4
          md:top-10
          md:bottom-auto
        `}
      >

        {nav.map((item, i) => (
          <a
            key={i}
            href={item.link}
            onClick={() => setActive(i)}
            className={`flex items-center gap-1 py-1 px-2 rounded-full transition-all
            ${i === active 
              ? "bg-dark_primary [&>*]:text-white"  // Белый для всех дочерних элементов
              : "text-dark_primary [&>*]:text-dark_primary"}
          `}
          >
            {/* Иконка (видна всегда) */}
            <span className="text-2xl">
              {createElement(item.icon)}
            </span>
            
            {/* Текст (только на десктопах) */}
            <span className="hidden md:block text-sm font-medium">
              {navTexts[i]}
            </span>
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
