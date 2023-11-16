import { useDispatch, useSelector } from "react-redux";
import { increment } from "../../store/sampleSlice";

const Counter = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.counter.value);

  return (
    <div>
      Count : {data}
      <button onClick={() => dispatch(increment())}>Send Actions</button>
    </div>
  );
};

export default Counter;
