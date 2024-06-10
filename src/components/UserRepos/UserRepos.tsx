import { useState } from "react";
import { Repo } from "../../interface";
import Button from "../Button/Button";
import ReposDetails from "../ReposDetails/ReposDetails";

interface repoProps {
    repos: Repo[]
}

function UserRepos({ repos }: repoProps) {
    const [repoDetails, setRepoDetails] = useState<Repo>()

    const showRepoDescription = (repo: Repo) => {
        setRepoDetails(repo)
    }
    return (
        <>
            {repoDetails && <ReposDetails name={repoDetails.name} visibility={repoDetails.visibility} description={repoDetails.description} />}
            {repos.map((repo) => {
                return (
                    <li className='' key={repo.id}>
                        {repo.name} - {' '}
                        {repo.visibility}
                        {repo.description}
                        <Button onClick={() => showRepoDescription(repo)} title="See Repo" />
                    </li>
                )
            })}
        </>
    )
}

export default UserRepos;