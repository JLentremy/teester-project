import styled from "@emotion/styled";

type ItemProps = {
  letter: string;
};

const ProfilePictureComp = ({ letter }: ItemProps) => {
  return (
    <ProfilePicture>
      <div>{letter}</div>
    </ProfilePicture>
  );
};

const ProfilePicture = styled.div`
  display: flex;
  width: var(--xl-size);
  height: var(--xl-size);
  margin: var(--md-size);

  border-radius: var(--full-roundness);
  text-transform: uppercase;
  justify-content: center;
  align-items: center;
  text-align: center;

  color: var(--accent-text-color);
  background-color: var(--picture-bg-color);

  > div {
    width: 1rem;
    height: 1rem;
    line-height: 1rem;
    margin-bottom: 1px;
  }
`;

export default ProfilePictureComp;
