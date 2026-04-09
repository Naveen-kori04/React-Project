import React, { useEffect } from 'react'
import assets from '../assets/assets'

const ThemeTogglebtn = ({theme,setTheme}) => {

    useEffect(() =>{
        const darkmode = window.matchMedia('(prefers-color-scheme: dark)').matches
        setTheme (theme || (darkmode ? 'dark' : 'light'))
    },[])

     useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <div>
      <button>
        {theme==='dark'? (<img src={assets.sun_icon}
        alt=""
        onClick={()=>{setTheme('light')}} />)
         : 
        
        (<img src={assets.moon_icon} 
        alt="Moon"
        onClick={()=>{setTheme('dark')}} />)}
      </button>
    </div>
  )
}

export default ThemeTogglebtn
