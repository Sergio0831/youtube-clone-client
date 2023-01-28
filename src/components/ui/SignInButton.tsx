import styled from 'styled-components';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const SignInButton = () => {
  return (
    <Button>
      <AccountCircleOutlinedIcon />
      SIGN IN
    </Button>
  );
};

export default SignInButton;

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 5px 1.5rem;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  cursor: pointer;
`;
