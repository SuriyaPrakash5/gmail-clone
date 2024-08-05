import { AccessTime, Add, Edit, ExpandMore, Inbox, NearMeOutlined, NoteOutlined, Send, SendOutlined, StarOutline } from '@mui/icons-material'
import SidebarOption from './SidebarOption'
import './Sidebar.css'
import { IconButton } from '@mui/material'
import { useDispatch } from 'react-redux'
import { openSendMessage } from './features/mailSlice'

function Sidebar() {

    const dispatch = useDispatch();

    return (
        <div className="sidebar">

            <div className="sidebar__compose">
                <Edit />
                <button onClick={() => dispatch(openSendMessage())}>Compose</button>
            </div>

            <SidebarOption Icon={Inbox} title="Inbox" number={54} selected={true} />
            <SidebarOption Icon={StarOutline} title="Starred" number={54} />
            <SidebarOption Icon={AccessTime} title="Snoozed" number={54} />
            <SidebarOption Icon={Send} title="Sent" number={54} />
            <SidebarOption Icon={NoteOutlined} title="Drafts" number={54} />
            <SidebarOption Icon={ExpandMore} title="More" number={54} />

            <div className="sidebar__footer">
                <div className="sidebar__footerIcon">
                    <h3>Labels</h3>
                    <IconButton>
                        <Add />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
