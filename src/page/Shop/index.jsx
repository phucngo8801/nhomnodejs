import React, { useRef } from 'react'
import Header from '../../components/Home/Header'
import Sectionp1 from '../../components/Home/Sectionp1'
import ButtonCartCount from '../../components/Shopp/ButtonCartCount'


import Menu from '../../components/Shopp/Menu'
import Menu1 from '../../components/Shopp/Menu1'
import { menuItemsData } from '../../components/Shopp/Menu1/data'


const Shop = () => {
const menuRef =useRef();

const handleScrollMenu = () =>
menuRef.current.scrollIntoview({behavior: 'smooth'});
return (
<div>
    <Header handleScrollMenu = {handleScrollMenu}/>
    <Menu/>
    <Menu1 list={menuItemsData} ref={menuRef} />
    <Sectionp1/>
    <ButtonCartCount/>
</div>
  )
}

export default Shop