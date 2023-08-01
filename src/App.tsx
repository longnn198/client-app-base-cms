import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const App: React.FC = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: any) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/generate",
        data.options
      );
      console.log(response.data.message);
    } catch (error) {
      console.error("Error generating files:", error);
    }
  };

  return (
    <div>
      <h1>Content Management System</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Chart:
          <input value="chart" type="checkbox" {...register("options")} />
        </label>
        <label>
          Table:
          <input value="table" type="checkbox" {...register("options")} />
        </label>
        <label>
          Header:
          <input value="header" type="checkbox" {...register("options")} />
        </label>
        <label>
          Footer:
          <input value="footer" type="checkbox" {...register("options")} />
        </label>
        <button type="submit">Generate</button>
      </form>
    </div>
  );
};

export default App;
