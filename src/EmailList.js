import { ArrowDropDown, ChevronLeft, ChevronRight, HorizontalSplit, Inbox, Keyboard, LocalOfferOutlined, MoreVert, PeopleOutline, Refresh } from '@mui/icons-material'
import { Checkbox, IconButton } from '@mui/material'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import './EmailList.css'
import EmailRow from './EmailRow'
import { db } from './firebase'
import Section from './Section'

function EmailList() {

    const [emails, setEmails] = useState([])

    useEffect(() => {
        const q = query(collection(db, "emails"), orderBy("timestamp", "desc"))
        onSnapshot(q, (snapshot => {
            setEmails(snapshot.docs.map((doc) => doc.data()))
        }))
    }, [])

    return (
        <div className="emailList">
            <div className="emailList__settings">
                <div className="emailList__settingsLeft">
                    <Checkbox />
                    <IconButton>
                        <ArrowDropDown />
                    </IconButton>
                    <IconButton>
                        <Refresh />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
                <div className="emailList__settingsRight">

                    <IconButton>
                        <ChevronLeft />
                    </IconButton>
                    <IconButton>
                        <ChevronRight />
                    </IconButton>
                    <IconButton>
                        <HorizontalSplit />
                    </IconButton>
                    <IconButton>
                        <Keyboard />
                    </IconButton>
                </div>
            </div>
            <div className="emailList__section">
                <Section Icon={Inbox} title="Primary" selected />
                <Section Icon={LocalOfferOutlined} title="Promotions" />
                <Section Icon={PeopleOutline} title="Social" />
            </div>

            <div className="emailList__list">

                {emails.map(email => (
                    <EmailRow
                        title={email.to}
                        subject={email.subject}
                        description={email.message}
                        time={new Date(email.timestamp?.seconds * 1000).toUTCString()}
                    />
                ))}
            </div>
        </div>
    )
}

export default EmailList
