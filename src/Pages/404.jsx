import { useRouteError } from "react-router-dom"; 

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <div className="border max-w-lg my-auto p-4 bg-red-500 text-white mx-auto rounded-md items-center flex justify-center flex-col">
            <h1 className="text-6xl font-bold  ">404</h1>
            <p className="text-sm font-semibold my-5">Maaf, Halaman yang anda cari tidak ada</p>
            <p className="text-sm font-semibold ">
                {error.statusText || error.message}
            </p>
        </div>
    )
}

export default ErrorPage;