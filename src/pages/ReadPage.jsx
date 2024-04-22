import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { useBookContext } from "../contextApi/Contextapi";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  }
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

let width = 800;
let height = 500;
export default function ReadPage() {
  const { readBooks } = useBookContext();
  const data = readBooks?.map((book) => ({
    name: book.bookName,
    totalPage: book.totalPages,
  }));
  if (!readBooks) {
    return (
      <div className="flex items-center justify-center min-h-screen max-md:px-5">
       <h2>no book to the read list</h2>
      </div>
    );
  }
  return (
    <div className="container mx-auto mb-24 overflow-hidden">
      <div className="bg-gray-200 rounded-2xl px-24 py-28 flex justify-center items-center">
        <BarChart
          width={width}
          height={height}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            angle={-10}
            textAnchor="end"
            interval={0}
            height={80}
            dy={10} // Adjust vertical offset
            dx={-10} // Adjust horizontal offset
          />
          <YAxis />
          <Tooltip />
          <Bar
            dataKey="totalPage"
            fill="#8884d8"
            shape={<TriangleBar />}
            label={{ position: "top" }}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))}
          </Bar>
        </BarChart>
      </div>
    </div>
  );
}
