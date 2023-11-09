"use client"

import CircleAnimation from './_components/CircleAnimation';
import LoginCard from './_components/LoginCard/LoginCard';
import PageTitle from './_components/PageTitle';
import usePage from './usePage';

import style from './page.module.scss';

export default function Home() {
  const {
    onLogout,

    logoutActionStatus,
    loggedIn,
    userInfo,
  } = usePage();

  return (
    <main className={`${style['root']} bg-[#e5e5e5] min-h-[100vh]`}>
      <article className={`${style['container']} bg-white flex flex-col items-center overflow-hidden p-5 relative  lg:flex-row lg:justify-end lg:items-start lg:pr-24 lg:py-20`}>
        <CircleAnimation />
        <PageTitle />
        <LoginCard />

        {/* <p>Api: https://jsonplaceholder.typicode.com/users</p>
      {loggedIn &&
        <p>Logged in</p>
      }
      {userInfo && <>
        <p>{userInfo.email}</p>
        <button onClick={onLogout}>Logout</button>
      </>} */}
      </article>
    </main>
  )
}
