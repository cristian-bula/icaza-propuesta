import React from 'react'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link} from "@nextui-org/react";

const NavbarMenu = () => {
  return (
    <Navbar position="static" className='bg-[#343432] text-white [&>header]:!px-0 h-28'>
      <NavbarBrand>
      <img
      className="w-32 ml-4 md:ml-0"
      src="https://icazalaw.com/wp-content/uploads/2019/08/logo_wt-300x135.png"
      alt="Icaza logo png"
    />
      </NavbarBrand>
      <NavbarContent className='relative' justify="end">
      <NavbarItem>
          <Link className='text-white' color="foreground" href="#">
            Nosotros
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link className='text-white' color="foreground" href="#" >
            Expertos
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className='text-white hidden md:block' color="foreground" href="#">
            Áreas de práctica
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className='text-white hidden md:block' color="foreground" href="#">
            Noticias
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className='text-white hidden md:block' color="foreground" href="#">
            Oficinas
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className='text-white hidden md:block' color="foreground" href="#">
            Contáctanos
          </Link>
        </NavbarItem>
        <div className='hidden md:block absolute bottom-0 font-bold h-1 bg-secundary w-full'>
        </div>
      </NavbarContent>
    </Navbar>
  )
}

export default NavbarMenu