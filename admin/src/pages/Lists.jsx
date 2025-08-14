import React, { useContext, useEffect, useState } from "react";
import Nav from "../component/Nav";
import Sidebar from "../component/Sidebar";
import { authDataContext } from "../context/AuthContext";
import axios from "axios";

function Lists() {
  const [list, setList] = useState([]);
  const { serverUrl } = useContext(authDataContext);

  const fetchList = async () => {
    try {
      const result = await axios.get(`${serverUrl}/api/product/list`);
      setList(result.data);
      console.log(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const removeList = async (id) => {
    try {
      const result = await axios.post(
        `${serverUrl}/api/product/remove/${id},`,
        {},
        { withCredentials: true }
      );
      if (result.data) {
        fetchList();
      } else {
        console.log("Failed to remove the Product");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="w-full min-h-screen bg-gradient-to-l from-[#141414] to-[#0c2025] text-white">
      <Nav />
      <div className="w-full flex justify-center">
        <Sidebar />

        <div className="w-full max-w-[1366px] px-4 md:px-10 lg:ml-[320px] md:ml-[230px] mt-[70px] flex flex-col gap-8 py-12">
          <h2 className="text-2xl md:text-4xl mb-4">All Listed Products</h2>

          {list?.length > 0 ? (
            list.map((item, index) => (
              <div
                key={index}
                className="w-full max-w-[1000px] md:h-[120px] h-[100px] bg-slate-600 rounded-xl flex items-center justify-start gap-4 md:gap-8 p-4"
              >
                <img
                  src={item.image1}
                  alt=""
                  className="w-[100px] h-[80px] md:w-[120px] md:h-[100px] object-cover rounded-lg"
                />
                <div className="flex-1 flex flex-col justify-center gap-1">
                  <div className="text-sm md:text-lg text-[#bef0f3]">
                    {item.name}
                  </div>
                  <div className="text-sm md:text-base text-[#bef0f3]">
                    {item.category}
                  </div>
                  <div className="text-sm md:text-base text-[#bef0f3]">
                    ₹{item.price}
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <span
                    onClick={() => removeList(item._id)}
                    className="w-8 h-8 flex items-center justify-center rounded-md text-red-300 hover:bg-red-300 hover:text-black cursor-pointer"
                  >
                    X
                  </span>
                </div>
              </div>
            ))
          ) : (
            <div className="text-white text-lg">No products available</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Lists;
