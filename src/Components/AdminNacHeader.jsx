import styled from 'styled-components';

const Header = styled.div`
  background-color: #E6EEF1;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  padding: 1rem 0 0 0;
  height: 3rem;

  @media  (max-width: 768px) {
    height: 3rem;
  }
`;

const Content = styled.h3`
  margin: 0rem 6rem 0 6rem;
  background-color: #693769;
  text-align: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: white;
  padding-top: 0.2rem;
  height: 2rem;
  font-size: 1.5rem;
  font-weight: bold;
  @media  (max-width: 768px) {
    padding-top: 0.5rem;
    margin: 0rem 5rem 0 5rem;
    height: 2rem;
  }
  @media  (max-width: 280px) {
    padding-top: 0.5rem;
    margin: 0rem 4rem 0 4rem;
    height: 2rem;
    font-size: 0.6rem;
  }
`;

const AdminNavHeader = ({ label }) => {
  return (
    <Header>
      <Content>{label}</Content>
    </Header>
  );
};

export default AdminNavHeader;
