import type { NextPage } from "next";
import { useAppSelector, useAppDispatch } from '../hooks/redux'
import { fetchUsers } from "../store/authSlice";
import { authenticateUser } from "../store/authSilce1";


const Home: NextPage = () => {
  // const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch();
  
  return (
    <div>
      <button
        onClick={() =>
          dispatch(authenticateUser({username: 're', email:'asd', password: 'ads'}))
        }
      >
        Test
      </button>
      <button
        onClick={() =>
          dispatch(fetchUsers())
        }
      >
        Test
      </button>
    </div>
  );
};

export default Home;
