import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLanguageStore } from '../stores/languageStore'

const NavButton = ({ text, to, className }) => {
  const location = useLocation()
  return (
    <Link
      to={to}
      className={
        'w-full flex items-center justify-center' +
        ' ' +
        className +
        ' ' +
        (location.pathname === to ? 'bg-gray-200 text-black' : 'text-gray-700')
      }
    >
      <h1 className='font-normal text-xl'>{text}</h1>
    </Link>
  )
}
const NavButtons = ({ fixed }) => {
  const t = useLanguageStore((state) => state.t)

  return (
    <div
      className={
        'w-full h-12 flex justify-between bottom-0 bg-white max-h-12' +
        (fixed ? ' fixed' : '')
      }
      style={{
        boxShadow: '0px -1px 15px 2px rgba(0,0,0,0.3)',
        flex: 1,
        zIndex: '10000',
      }}
    >
      <NavButton
        to='/locations'
        text={t('nav.locations')}
        className={'border-r border-gray-200'}
      />

      <NavButton
        to='/'
        text={t('nav.map')}
        className={'border-r border-gray-200'}
      />

      <NavButton to='/routes' text={t('nav.routes')} />
    </div>
  )
}

export default NavButtons
