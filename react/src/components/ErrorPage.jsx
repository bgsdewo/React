import { useRouteError } from "react-router-dom";

function ErrorPage () {
    const error = useRouteError()

    return <div>Ada Eror!!</div>
}

export default ErrorPage