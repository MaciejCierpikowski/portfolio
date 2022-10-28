import type { NextPage } from "next";
import { useAppSelector, useAppDispatch } from "../hooks/redux";
import { fetchUsers } from "../store/authSliceTest";
import { authenticateUser } from "../store/authSilce";

const Home: NextPage = () => {
  // const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch();

  return (
    <div>
      <button
        onClick={() =>
          dispatch(
            authenticateUser({
              username: "maciej",
              email: "cierpikowskimaciek@gmail.com",
              password: "Maciej1234",
            })
          )
        }
      >
        Test
      </button>
      <button onClick={() => dispatch(fetchUsers())}>Test</button>
    </div>
  );
};

export default Home;
