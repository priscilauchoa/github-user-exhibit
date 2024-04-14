interface UserDetailsProps {
    src: string;
    login: string;
    name: string;
    error: boolean;
}

function UserDetails({ src, login, name, error }: UserDetailsProps) {
    return (
        <>
            {login &&
                <div>
                    <img className="avatar" src={src} alt="" />
                    <h4>Login: {login}</h4>
                    <p>Login: {name}</p>
                </div>}
            {!login && <h2 className='red'>{error} The user does not exist or the data was probably not available</h2>}
        </>
    )
}

export default UserDetails;