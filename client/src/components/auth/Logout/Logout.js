import fetchLogout from './fetchLogout';

const Logout = (props) => {
  fetchLogout().then(() => {
    props.history.push('/');
  });
};

export default Logout;
