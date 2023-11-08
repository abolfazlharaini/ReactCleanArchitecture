"use client"

import CircleAnimation from './_components/CircleAnimation';
import LoginCard from './_components/LoginCard/LoginCard';
import PageTitle from './_components/PageTitle';
import usePage from './usePage';

export default function Home() {
  const {
    onLogout,

    logoutActionStatus,
    loggedIn,
    userInfo,
  } = usePage();

  return (
    <main className="flex justify-end pr-24 relative h-screen w-screen">
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
    </main>
  )
}
