import react from "react";
import { toast } from "react-toastify";
const Section = () => {
  return (
    <div>
      <h1 className="text-center text-2xl ">Welome dubai</h1>
      <button onClick={()=> toast("wow juda osonku ukam ")}>Show</button>
    </div>
  );
};

export default Section;
