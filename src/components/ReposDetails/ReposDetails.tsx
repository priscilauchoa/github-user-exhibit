interface RepoDetailsProps {
    name: string;
    visibility: string;
    description: string;
}

function ReposDetails({ name, description, visibility }: RepoDetailsProps) {
    return (
        <>
            <h1 className="red">Repo: {name} </h1>
            <h2 className='red'>
                {visibility}
                {description}
            </h2>
            <br />
        </>
    )
}

export default ReposDetails;