import React, { useState, useEffect } from 'react'
import { Link } from '@tanstack/react-router'
import HamBar from '../Icon_mt/HamBar'
import Cross from '../Icon_mt/Cross'
import Profile from '../Icon_mt/Profile'
import Home from '../Icon_mt/Home'
import Inbox from '../Icon_mt/Inbox'
import Bell from '../Icon_mt/Bell'
import People from '../Icon_mt/People'
import Setting from '../Icon_mt/Setting'

export default function Header({ home=false, blog=false, contact=false, setting=false }) {
  const [clickTrue, setClickTrue] = useState(false);
  let [homeNav, setHomeNav] = useState("");
  let [blogNav, setBlogNav] = useState("");
  let [contactNav, setContactNav] = useState("");
  let [settingNav, setSettingNav] = useState("");

  useEffect(() => {
    setHomeNav(home ? "bg-slate-400" : "");
    setBlogNav(blog ? "bg-slate-400" : "");
    setContactNav(contact ? "bg-slate-400" : "");
    setSettingNav(setting ? "bg-slate-400" : "");
  }, [home, blog, contact, setting]);
  return (
    <>
      {clickTrue ? (
        <div className='animate__animated animate__fadeInLeft animate__delay-0.25s bg-slate-300 w-[200px] h-screen sticky top-0 left-0 z-10'>
            <button onClick={() => setClickTrue(!clickTrue)} className='cursor-pointer rounded-full p-2 hover:bg-slate-200 duration-[0.25s] absolute right-[10px] top-[10px]'>
              <Cross cls='mx-auto' width={25} height={25}/>
            </button>
            <div className='flex flex-col items-center translate-y-[60px]'>
              <div className=' w-[90%] h-[60px] center rounded-xl cursor-pointer hover:bg-slate-200 duration-[0.5s]'>
                <div className='w-[30%] h-full center'>
                  <Profile cls="w-[70%] h-[70%]"/>
                </div>
                <div className='w-[70%] h-full font-bold flex flex-col justify-center pl-2'>
                  <h3>User-{Math.floor(Math.random() * 10000000)}</h3>
                  <p className='font-normal text-[10px]'>JohnDoe@gmail.com</p>
                </div>
              </div>
              <Link to="/" className={`${homeNav} w-[80%] h-[40px] rounded-xl flex items-center gap-[10px] pl-4 cursor-pointer mt-4 hover:bg-slate-200 duration-[0.5s]`}>
                <Home width={27} height={27}/>
                <p className='font-bold text-[#3e3e3e]'>Home</p>
              </Link>
              <Link to="/blog" className={`${blogNav} w-[80%] h-[40px] rounded-xl flex items-center gap-[10px] pl-4 cursor-pointer mt-2 hover:bg-slate-200 duration-[0.5s]`}>
                <Inbox width={24} height={24}/>
                <p className='font-bold text-[#3e3e3e]'>Blog</p>
              </Link>
              <div className={`w-[80%] h-[40px] rounded-xl flex items-center gap-[10px] pl-2 cursor-pointer mt-2 hover:bg-slate-200 duration-[0.5s]`}>
                <Bell width={32} height={32}/>
                <p className='font-bold text-[#3e3e3e]'>Notification</p>
              </div>
              <div className={`${contactNav} w-[80%] h-[40px] rounded-xl flex items-center gap-[10px] pl-4 cursor-pointer mt-2 hover:bg-slate-200 duration-[0.5s]`}>
                <People width={27} height={27}/>
                <p className='font-bold text-[#3e3e3e]'>Contact Us</p>
              </div>
              <div className={`${settingNav} w-[80%] h-[40px] rounded-xl flex items-center gap-[10px] pl-4 cursor-pointer mt-2 hover:bg-slate-200 duration-[0.5s]`}>
                <Setting width={27} height={27}/>
                <p className='font-bold text-[#3e3e3e]'>Setting</p>
              </div>
              <div className='center w-[80%] mt-[10px] pt-[170px]'>
                <input type="text" placeholder="Search..." className='py-[7px] pl-[10px] w-full rounded-xl border-2 border-solid border-slate-400 pr-[10px] outline-none'/>
              </div>
              <div className='center w-[80%] mt-[10px]'>
                <button className='bg-teal-300 text-teal-900 border border-solid border-teal-700 cursor-pointer w-full py-[7px] rounded-xl shadow-xl'>Sign in</button>
              </div>
            </div>
        </div>
      ) : (
        <button  onClick={() => setClickTrue(!clickTrue)} className="w-[55px] h-[50px] sticky top-[20px] left-[20px] bg-slate-400 rounded-xl shadow-xl cursor-pointer z-9">
          <HamBar cls='mx-auto' width={35} height={35}/>
        </button>
      )}
    </>
  )
}
