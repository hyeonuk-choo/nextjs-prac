import {useRouter} from 'next/router'

export default function About() {
    const router = useRouter();
    const id = router.query.any;
    return <>
    <h1>/pages/sub/[any].js</h1>
    <p>Parameter value : {id}</p>
    <a href="/">/pages/index.js</a>
    </>
}