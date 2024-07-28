"use client";
import React, { useEffect, useState } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import axios from "axios";
import { FaArrowTrendUp,FaBookBookmark } from "react-icons/fa6";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'; 
import { Button } from "@/components/ui/button";

interface Product {
  product_id: number;
  product_name: string;
  image_src: string;
  discount: number;
  product_finalprice: number;
  product_price: number;
}

const Tabs = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [productList, setProductList] = useState<Product[][]>([[], [], []]);
  const [booktrending, setbooktrending] = useState<Product[][]>([[]]);
  const [loading, setLoading] = useState<boolean>(true);

  const tabs = [
    { id: 0, label: "Xu Hướng Theo Ngày" },
    { id: 1, label: "Sách HOT - Giảm Sốc" },
    { id: 2, label: "Bestseller Ngoại Văn" },
  ];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);

        const xuhuongngay = await axios.get(
          "https://www.fahasa.com/fahasa_catalog/product/loadproducts?category_id=2&currentPage=1&limit=10&order=num_orders&series_type=0"
        );
        const giamgia = await axios.get(
          "https://www.fahasa.com/fahasa_catalog/product/loadproducts?category_id=2&currentPage=1&limit=11&order=discount_percent&series_type=0"
        );
        const englishbestseller = await axios.get(
          "https://www.fahasa.com/fahasa_catalog/product/loadproducts?category_id=3165&currentPage=1&limit=11&order=discount_percent&series_type=0"
        );
        const tusachnoibat = await axios.get(
          "https://www.fahasa.com/fahasa_catalog/product/loadproducts?category_id=2&currentPage=8&limit=8"
        );

        setbooktrending([
          tusachnoibat.data.product_list
        ]);
        setProductList([
          xuhuongngay.data.product_list,
          giamgia.data.product_list.slice(1),
          englishbestseller.data.product_list.slice(1),
        ]);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching products: ", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="p-5">
      <div className="rounded-lg">
        <div className="flex items-center mb-1 bg-pink-200/75 p-3 rounded-t-lg gap-3">
          <div className="rounded-lg bg-red-600 text-white p-3 size-10 flex justify-center items-center">
            <FaArrowTrendUp className="w-8 h-10" />
          </div>
          <span className="text-xl font-semibold text-black">
            Xu Hướng Mua Sắm
          </span>
        </div>

        {/* tab */}
        <div className="flex mb-5 border-b border-gray-200">
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(index)}
              className={`py-2 px-4 text-sm font-medium transition-colors duration-300 ${
                activeTab === index
                  ? "border-b-2 border-red-500 text-red-500"
                  : "text-gray-500 hover:text-red-500"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <TransitionGroup className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {loading
            ? 
              Array(10)
                .fill(0)
                .map((_, index) => (
                  <CSSTransition
                    key={index}
                    timeout={300}
                    classNames="fade"
                  >
                    <div className="p-3 bg-white rounded-lg shadow-md border transform transition-transform duration-300 hover:scale-105">
                      <Skeleton height={192} />
                      <div className="flex justify-between items-center mb-2 mt-3">
                        <Skeleton width={60} height={20} />
                      </div>
                      <Skeleton height={24} /> 
                      <div className="flex justify-between items-center mt-2">
                        <Skeleton width={80} height={20} /> 
                        <Skeleton width={60} height={20} />
                      </div>
                    </div>
                  </CSSTransition>
                ))
            :
              productList[activeTab]?.map((product: Product) => (
                <CSSTransition
                  key={product.product_id}
                  timeout={300}
                  classNames="fade"
                >
                  <div className="p-3 bg-white rounded-lg shadow-md border transform transition-transform duration-300 hover:scale-105 cursor-pointer">
                    <img
                      className="w-full h-48 object-contain mb-3"
                      src={product.image_src}
                      alt={product.product_name}
                    />
                    <div className="flex justify-between items-center mb-2">
                      <span
                        className={`inline-block py-1 px-3 rounded-full text-xs font-medium ${
                          product.discount
                            ? "bg-red-100 text-red-800"
                            : "bg-green-100 text-green-800"
                        }`}
                      >
                        {product.discount ? `-${product.discount}%` : "Mới"}
                      </span>
                    </div>
                    <h3 className="text-sm font-semibold text-gray-800 mb-1">
                      {product.product_name}
                    </h3>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold text-red-500">
                        {product.product_finalprice.toLocaleString()} đ
                      </span>
                      <span className="text-sm text-gray-400 line-through ">
                        {product.product_price.toLocaleString()} đ
                      </span>
                    </div>
                  </div>
                </CSSTransition>
              ))}
        </TransitionGroup>
        <div className="mt-5 flex justify-center items-center">
          <Button variant={"nutxemthem"} className="w-44 text-red-600">Xem thêm</Button>
        </div>
      </div>
    
    {/* Tủ sách nổi bật */}
      <div className="mt-5">
        <div className="flex items-center mb-1 bg-pink-200/75 p-3 rounded-t-lg gap-3">
          <div className="rounded-lg bg-red-600 text-white p-3 size-10 flex justify-center items-center">
            <FaBookBookmark className="w-8 h-10" />
          </div>
          <span className="text-xl font-semibold text-black">
            Tủ sách nổi bật
          </span>
        </div>
        <div>
          <TransitionGroup className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-8 gap-4">
            {loading
              ? 
                Array(8)
                  .fill(0)
                  .map((_, index) => (
                    <CSSTransition
                      key={index}
                      timeout={300}
                      classNames="fade"
                    >
                      <div className="p-3 bg-white rounded-lg shadow-md border transform transition-transform duration-300 hover:scale-105">
                        <Skeleton height={192} />
                        <div className="flex justify-between items-center mb-2 mt-3">
                          <Skeleton width={60} height={20} />
                        </div>
                        <Skeleton height={24} /> 
                        <div className="flex justify-between items-center mt-2">
                          <Skeleton width={80} height={20} /> 
                          <Skeleton width={60} height={20} />
                        </div>
                      </div>
                    </CSSTransition>
                  ))
              :
                booktrending[activeTab]?.map((product: Product) => (
                  <CSSTransition
                    key={product.product_id}
                    timeout={300}
                    classNames="fade"
                  >
                    <div className="p-2 mt-3 border bg-white rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 cursor-pointer">
                      <img
                        className="w-full h-48 object-contain mb-3"
                        src={product.image_src}
                        alt={product.product_name}
                      />
                      <h3 className="text-sm text-center font-semibold text-gray-800 mb-1">
                        {product.product_name}
                      </h3>
                    </div>
                  </CSSTransition>
                ))}
          </TransitionGroup>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
