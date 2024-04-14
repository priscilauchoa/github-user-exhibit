interface UserDetailsProps {
    src: string;
    login: string;
    name: string;
}

function UserDetails({ src, login, name }: UserDetailsProps) {
    return (
        <>
            {login &&
                <div>
                    <img className="avatar" src={src} alt="" />
                    <h4>Login: {login}</h4>
                    <p>Login: {name}</p>
                </div>}
        </>
    )
}

export default UserDetails;