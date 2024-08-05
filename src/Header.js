import { Apps, HelpOutline, Menu, Search, SettingsOutlined, Tune } from '@mui/icons-material'
import { Avatar, IconButton } from '@mui/material'
import { signOut } from 'firebase/auth'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectUser, logout } from './features/userSlice'
import { auth } from './firebase'
import './Header.css'

function Header() {

    const user = useSelector(selectUser)
    const dispatch = useDispatch()
    const signOut1 = () => {
        signOut(auth).then(() => {
            dispatch(logout())
        })
        dispatchEvent(logout())
    }



    return (
        <div className="header">
            <div className="header__left">
                <IconButton>
                    <Menu />
                </IconButton>
                <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png" alt="" />
            </div>

            <div className="header__middle">
                <Search />
                <input type="text" placeholder='Search in mail' />
                <Tune />
            </div>

            <div className="header__right">
                <IconButton>
                    <HelpOutline />
                </IconButton>
                <IconButton>
                    <SettingsOutlined />
                </IconButton>
                <IconButton>
                    <Apps />
                </IconButton>
                <IconButton>
                    <Avatar onClick={signOut1} src={user?.photoUrl} />
                </IconButton>

            </div>

        </div>
    )
}

export default Header
