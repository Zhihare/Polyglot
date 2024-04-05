import React, { useEffect, useRef, useState } from 'react';
import { BurgerMenuContainer, BurgerMenuModal } from './BurgerMenu.styled';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { Navigator } from '../Navigations/Navigation';
import HeaderButton from '../Headers/headerButton';

const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null); // Встановлюємо правильний тип для menuRef
    
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <BurgerMenuContainer className="burger-menu">
            <button className="burger-menu__toggle" onClick={toggleMenu}>
                {isOpen ? <IoCloseSharp /> : <GiHamburgerMenu />}
            </button>
            {isOpen && (
                <BurgerMenuModal ref={menuRef}>
                    <ul className="burger-menu__list">
                        <Navigator />
                        <HeaderButton />
                    </ul>
                </BurgerMenuModal>
            )}
        </BurgerMenuContainer>
    );
};

export default BurgerMenu;
