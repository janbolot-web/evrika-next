import Link from 'next/link'
import { BiHomeAlt } from 'react-icons/bi'
import { BsBook } from 'react-icons/bs'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { BiUser } from 'react-icons/bi'

import style from './header.module.scss'


const Header = () => {
  return (
    <nav className={style.header}>
      <ul className={style.headerList}>
        <li className={style.headerItem}>
          <Link href='/' className={style.headerLink}>
            <BiHomeAlt size={24} />
            <span>Башкы бет</span>
          </Link>
        </li>
        <li className={style.headerItem}>
          <Link href={'/courses'} className={style.headerLink}>
            <BsBook size={24} />
            <span>Курстар</span>

          </Link>
        </li>

        <li className={style.headerItem}>
          <Link href={'/'} className={style.headerLink}>
            <BiMessageSquareDetail size={24} />
            <span>Ой пикирлер </span>

          </Link>
        </li>

        <li className={style.headerItem}>
          <Link href={'/'} className={style.headerLink}>
            <BiUser size={24} />
            <span>Жеке кабинет</span>

          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header