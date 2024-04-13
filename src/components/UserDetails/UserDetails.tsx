import { UserDetailsProps } from '../../interfaces/interfaces.ts'
function UserDetails({ avatar_url, login, name, error }: UserDetailsProps) {
    return (
        <>
            {login &&
                <div><img className="avatar" src={avatar_url} alt="" />
                    <h4>Login: {login}</h4>
                    <p>Login: {name}</p></div>}
            {!login && <h2 className='red'>{error} The user does not exist or the data was probably not available</h2>}
        </>
    )
}

export default UserDetails;