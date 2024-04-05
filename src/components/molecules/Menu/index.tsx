import React, { useEffect, useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

interface MenuItem {
    label: string | JSX.Element;
    key: string;
    icon?: JSX.Element;
    disabled?: boolean;
    children?: any;
    active?: boolean;
}

type MenuItemProp = {
  item: MenuItem;
  isASubmenu?: boolean;
  activeLink?: any;
  setActiveLink?: any;
}

const items = (t: any) => {
  return [
    {
      label: t('Quiénes Somos'),
      key: '/quienes-somos',
    },
    {
      label: t('Programas'),
      key: '/programas',
      children: [
        {
          type: 'group',
          label: t('Emprendimientos y pequeñas empresas en crecimiento'),
          key: '/programas/emprendimientos-y-pequeñas-empresas-en-crecimiento'
        },
        {
          type: 'group',
          label: t('Ecosistema'),
          key: '/programas/ecosistema'
        },
        {
          type: 'group',
          label: t('Proyectos inclusivos'),
          key: "/programas/proyectos-inclusivos"
        },
      ],
    },
    {
      label: t('Impacto'),
      key: '/impacto'
    },
    {
        label: t('Súmate'),
        key: '/sumate',
        disabled: true,
    },
    {
        label: t('Blog'),
        key: '/blog',
        disabled: true,
    },
    {
        label: t('Recursos'),
        key: '/recursos',
        disabled: true,
    },
    {
        label: t('Sedes'),
        key: '/sedes',
        children: [
          {
            type: 'group',
            label: 'México',
            key:'/sedes/mexico'
          }
        ]
    },
    {
        label: 'Change Lab',
        key: 'https://change-lab.co/',
        active: true
    }
]};

const MenuItem: React.FC<MenuItemProp> = ({ item, isASubmenu, activeLink, setActiveLink }) => {
    const [isHovered, setIsHovered] = useState(false);
    const { label, key, icon, children, active = false } = item;

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    useEffect(() => {
      console.log({activeLink, key})
    },[]);
    return (
      <li key={key} onClick={() => setActiveLink(key)} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="relative p-2 max-w-fit">
        <Link to={`${key}`} target={key?.includes('http') ? "_blank" : "_self"} className={`justify-center ${activeLink === key ? 'font-medium' : ''} flex items-center gap-2 p-1 md:p-3 ${isASubmenu ? 'hover:bg-[#c1285d] max-w-fit gap-[8px] rounded-3xl text-nowrap':''}`}>
          {icon && icon}
          <span className={`text-[14px] ${active ? 'hover:text-[#c1285d]' : !isASubmenu && 'hover:text-[#19417f]'}`}>{label}</span>
        </Link>
        {children && isHovered && (
          <ul className={`relative lg:absolute left-0 ml-2 md:ml-4 mt-0 bg-[${'#333333'}] text-white flex flex-col w-auto`}>
            {children.map((child: any) => (
              <MenuItem key={child.key} item={child} isASubmenu={true} />
            ))}
          </ul>
        )}
      </li>
    );
};

const Menu:React.FC = () => {
    const { t } = useTranslation();
    const [showMenu, setShowMenu] = useState(false);
    const [activeLink, setActiveLink] = useState('');
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <>
            <nav className="lg:hidden top-0">
                <div className="flex justify-between items-center bg-gray-100 p-4 cursor-pointer">
                    <IoIosMenu onClick={toggleMenu} className="text-2xl" />
                </div>
                {showMenu && (
                    <ul className="absolute flex flex-col bg-white shadow-md left-0 top-[86px] w-full items-center">
                    {items(t).map((item) => (
                        <MenuItem key={item.key} item={item} activeLink={activeLink} setActiveLink={setActiveLink} />
                    ))}
                    </ul>
                )}
            </nav>
            <nav className="hidden lg:flex">
                <ul className="flex flex-col md:flex-row">
                {items(t).map((item: any) => (
                    <MenuItem key={item.key} item={item}  activeLink={activeLink} setActiveLink={setActiveLink}/>
                ))}
                </ul>
            </nav>
        </>
    )
} 

export default Menu;
