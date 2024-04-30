import { Link } from "react-router-dom"

export default function Error () {
    return (
        <b>Ooops, something went wrong...<Link to ="/">Please, reload page</Link></b>
    )
}