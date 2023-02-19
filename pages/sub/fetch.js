import { useEffect, useState } from "react"

export default function Fetch() {
    const [user, setUser] = useState({name: null})
    useEffect(()=>{
        fetch(process.env.NEXT_PUBLIC_API_URL+'api/hello')
        .then(res => res.json())
        .then(result => setUser(result))
    })
    return <>
    <h1>/pages/sub/fetch.js</h1>
    <p>{user.name}</p>
    <a href="/">/pages/index.js</a>
    </>
}