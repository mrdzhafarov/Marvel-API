import ErrorMessage from '../errorMessage/ErrorMessage';
import Skeleton from '../skeleton/Skeleton';
import Spinner from '../spinner/Spinner';

const setContend = (process, Component, data) => {
  switch (process) {
    case 'waiting':
      return <Skeleton />;
      break;
    case 'loading':
      return <Spinner />;
      break;
    case 'confirmed':
      return <Component data={data} />;
      break;
    case 'error':
      return <ErrorMessage />;
      break;
    default:
      return new Error('Unexpected process state');
  }
};

export default setContend;
