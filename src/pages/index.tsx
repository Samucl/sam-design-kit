import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

export default function Home(): JSX.Element {
    const history = useHistory()

    useEffect(() => {
        history.push('/docs/GettingStarted')
    }, [history])

    return <></>
}
