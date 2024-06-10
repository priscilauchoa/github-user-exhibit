import styled from 'styled-components'
import RepoInfo from './ReposDetails'

interface RepoDetailsProps {
    name: string;
    visibility: string;
    description: string;
}

// const RepoInfo = styled.h2`
//     margin: 10px 0;
//     color: violet;
// `

function ReposDetails({ name, description, visibility }: RepoDetailsProps) {
    return (
        <>
            <RepoInfo red={true}>
                <h2 className="red">Repo: {name} </h2>
                <p>{visibility} </p>
                <p>{description} </p>
            </RepoInfo>
        </>
    )
}

export default ReposDetails;