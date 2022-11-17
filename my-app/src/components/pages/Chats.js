import { useEffect, useState } from "react"
import { Link, Navigate, Route, Routes, useNavigate, useParams } from "react-router-dom"
import Chat from "../components/chat/Chat"
import Loader from "../components/Loader/Loader"

const chatsPlaceholder = [
    {
        recipient:'Natalia',
        messages:[
            {
                author:'Natalia',
                text:'Привет',
                date: new Date().toLocaleString()
            },
            {
                author:'You',
                text:'Здороффф',
                date: new Date().toLocaleString()
            },
        ]
    },
    {
        recipient: "Jenay",
        messages: []
    },
]

const ChatsPage = () => {
    const [chats, setChats] = useState([])
    const [loading, setLoading] = useState([null])
    const {chatId} = useParams()
    const navigate = useNavigate()

    useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
            setChats(chatsPlaceholder)
            setLoading(false)
        }, 1000)
    },[])

    return (
        <div style={{display:'flex', flexGrow:1, position:'relative'}}>
            <WithLoading isLoading = {loading}>
                <div style={{display:'flex', flexGrow:1}}>
                    <div className='chatList'>
                        <h2>Чаты</h2>
                        <>
                        <ChatList chats={chats}/>
                        <button onClick={()=>{
                            setChats(p => [...p, chatsPlaceholder[0]])
                        }}>+</button>
                        </>
                    </div>
                    {
                        chatId && chats[chatId] ? <Chat chat={chats[chatId]}/> : <h2>Выберите чат</h2>
                    }
                </div>
            </WithLoading>
        </div>
    )
}

const WithLoading = ({isLoading, children}) =>{
    return isLoading || isLoading === null ? <Loader/> : children
}

const ChatList = ({chats}) =>{
    return(
        <>
        <div>
            <p className="chatDelete">X</p>
            <Link to={`${id}`}>{e.recipient}</Link>
        </div>
        </>
    )
}