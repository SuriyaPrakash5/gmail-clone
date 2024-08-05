import { ArrowBack, ArrowDropDown, CheckCircleOutline, ChevronLeft, ChevronRight, DeleteOutline, EmailOutlined, ErrorOutline, ExitToApp, Keyboard, LabelImportantOutlined, MoreVert, MoveToInbox, Print, PrintOutlined, Reply, StarOutline, WatchLaterOutlined } from '@mui/icons-material'
import { Avatar, IconButton } from '@mui/material'
import React from 'react'
import './Mail.css'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectOpenMail } from './features/mailSlice'


function Mail() {
    const navigate = useNavigate();

    const selectedMail = useSelector(selectOpenMail)

    return (
        <div className="mail">
            <div className="mail__options">
                <div className="mail__tools">
                    <div className="mail__toolsLeft">
                        <IconButton onClick={() => navigate("/")}>
                            <ArrowBack />
                        </IconButton>

                        <IconButton>
                            <MoveToInbox />
                        </IconButton>

                        <IconButton>
                            <ErrorOutline />
                        </IconButton>

                        <IconButton>
                            <DeleteOutline />
                        </IconButton>

                        <IconButton>
                            <EmailOutlined />
                        </IconButton>

                        <IconButton>
                            <WatchLaterOutlined />
                        </IconButton>

                        <IconButton>
                            <CheckCircleOutline />
                        </IconButton>

                        <IconButton>
                            <LabelImportantOutlined />
                        </IconButton>

                        <IconButton>
                            <MoreVert />
                        </IconButton>

                    </div>
                    <div className="mail__toolsRight">
                        <IconButton>
                            <ChevronLeft />
                        </IconButton>

                        <IconButton>
                            <ChevronRight />
                        </IconButton>

                        <IconButton>
                            <Keyboard />
                        </IconButton>
                    </div>

                </div>

                <div className="mail__subject">
                    <h2>{selectedMail?.subject}</h2>
                    <div>
                        <IconButton>
                            <PrintOutlined />
                        </IconButton>
                        <IconButton>
                            <ExitToApp />
                        </IconButton>
                    </div>

                </div>

                <div className="mail__title">

                    <div className="mail__titleLeft">
                        <Avatar />
                        <div className="mail__titleName">
                            <h3>{selectedMail?.title.substring(0, selectedMail?.title.indexOf('@'))}{" "}
                                <span>{"<"}{selectedMail?.title}{">"}</span>
                            </h3>
                            <div className="toMe">
                                <p>
                                    to me
                                </p>
                                <ArrowDropDown />
                            </div>
                        </div>

                    </div>

                    <div className="mail__titleRight">
                        <p>{selectedMail?.time}</p>

                        <IconButton>
                            <StarOutline />
                        </IconButton>
                        <IconButton>
                            <Reply />
                        </IconButton>
                        <IconButton>
                            <MoreVert />
                        </IconButton>
                    </div>
                </div>
            </div>

            <div className="mail__message">
                {selectedMail?.description}
            </div>
        </div>
    )
}

export default Mail
