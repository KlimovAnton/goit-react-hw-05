import { Link } from "react-router-dom"

export default function NotFoundPage () {
    return (
        <>
            <b>Oops... Sorry, something went wrong!</b>
            <p>
            Please visit out <Link to="/">home page</Link>
            </p>
        </>
    )
}