// "use-client"
// import { useEffect, useState } from "react"
// import { io } from "socket.io-client"
// const socket = io("http://10.10.0.13:8888")
// export default function  ChatPage() {
//     const [message, setMessage] = useState('');
//     const [response, setResponse] = useState<string[]>([])


//     useEffect(() => {
//         socket.on("uzchess-server", (data: string) => {
//             setResponse([...response, data])
//         })
//     })


//     const sendMessage = () => {
//         socket.emit("uzches-client", message);
//         setMessage("")
//     }


//     return(
//         <div>   
//             <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
//             <button onClick={sendMessage}>Send Message</button>
//             <div>
//                 {response.map((response, index) => <p key={index}>{response}</p>)}
//             </div>
        
//         </div>
//     )
// }

"use client";
import io from 'socket.io-client';
import {useEffect, useState} from "react";

const socket = io('http://10.10.0.130:3000',  {transports: ['websocket']});


interface Message {
    id: number;
    userId: number;
    message: string;
    replyTo: number
}

export default function ChatPage() {
    const [message, setMessage] = useState('');
    const [responses, setResponses] = useState<string[]>([]);

    useEffect(() => {
        socket.on('uzchess-server', (data: string) => {
            setResponses([...responses, data]);
            return () => socket.off('uzchess-server');
        });
    });

    const sendMessage = () => {
        socket.emit('uzchess-client', message);
        setMessage('');
    }

    return (
        <div className={"flex flex-col items-center gap-2.5 mt-40"}>
            <input className={"border border-white"} type="text" value={message} onChange={(e) => setMessage(e.target.value)}/>
            <button className={"bg-yellow-500 rounded-lg active:bg-yellow-400"} onClick={sendMessage}>Send Message</button>
            <div>
                {responses.map((response, index) => <p key={index}>{response}</p>)}
            </div>
        </div>
    );
}