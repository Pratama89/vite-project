import { useLogin } from "../hooks/useLogin";

const ProfilePage = () => {
    const username = useLogin();
    return (
        <div className="text-center font-bold text-2xl mt-5">
            <h1>Profile</h1>
            <h1 className="text-2xl text-blue-600">
            Username: 
            <span className="ml-2 capitalize">
                {username}                
            </span>
            </h1>
        </div>
    )
}

export default ProfilePage;