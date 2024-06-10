import styled from "styled-components";

interface RepoInfoProps {
  red: boolean;
}

const RepoInfo = styled.h2<RepoInfoProps>`
  margin: 10px 0;
  color: ${(props) => (props.red ? "violet" : "white")};
`;

export default RepoInfo;
