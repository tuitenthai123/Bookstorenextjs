"use client";
import React, { useState,useEffect } from "react";
import { Button } from "@/components/ui/button";
import axios from "axios";


interface Book {
  id: number;
  title: string;
  author: string;
  image: string;
  points: number;
  publisher: string;
  price: number;
  oldPrice: number;
  discount: number;
  description: string;
}

const books: Book[] = [
  {
    id: 1,
    title: "Góc Nhỏ Có Nắng",
    author: "Little Rainbow",
    image: "https://via.placeholder.com/150x200",
    points: 4334,
    publisher: "Thanh Niên",
    price: 55760,
    oldPrice: 68000,
    discount: 18,
    description:`        
        <strong>
            Góc Nhỏ Có Nắng
        </strong>
        <p>- Với 30 chủ đề tô màu phong phú đa dạng, mỗi bức tranh như là một lời thủ thỉ tâm tình gửi đến bạn</p>
        <p>- Thư giãn và chữa lành: Với những hình ảnh đẹp mắt và đơn giản, tô màu sẽ là một phương pháp hiệu quả giúp bạn chữa lành và nuôi dưỡng tâm hồn</p>
        <p>- Khám phá sự sáng tạo: Bạn đừng ngại vẽ thêm, tô thêm màu sắc để thể hiện cảm xúc của riêng mình</p>
        <p>- Chất liệu giấy dày, mịn, đẹp sẽ đem đến cho bạn trải nghiệm tô màu thú vị</p>
        <p>...</p>`,
  },
  {
    id: 2,
    title: "Tô Bình Yên Về Hạnh Phúc (Tái Bản 2022)",
    author: "Kulzsc",
    image: "https://via.placeholder.com/150x200",
    points: 1837,
    publisher: "NXB Kim Đồng",
    price: 43200,
    oldPrice: 48000,
    discount: 10,
    description: "A great book for self-improvement...",
  },
  {
    id: 3,
    title: "999 Lá Thư Gửi Cho Chính Mình - Tô Màu Cuộc Sống",
    author: "Miêu Công Tử, Hà Trang (Tahtag)",
    image: "https://via.placeholder.com/150x200",
    points: 1727,
    publisher: "NXB Trẻ",
    price: 75900,
    oldPrice: 79900,
    discount: 5,
    description: "Motivational letters to yourself...",
  },
  {
    id: 4,
    title: "Doraemon - Tiểu Thuyết - Nobita Và Bản Giao Hưởng Địa Cầu",
    author: "Fujiko F Fujio , Teruko Utsumi, Kazuaki Imai",
    image: "https://via.placeholder.com/150x200",
    points: 1260,
    publisher: "Shogakukan",
    price: 89100,
    oldPrice: 99000,
    discount: 10,
    description: "Join Doraemon and friends in an exciting adventure...",
  },
  {
    id: 5,
    title: "Trốn Lên Mái Nhà Để Khóc - Tặng Kèm Bookmark",
    author: "Lam",
    image: "https://via.placeholder.com/150x200",
    points: 1210,
    publisher: "NXB Văn Học",
    price: 68400,
    oldPrice: 76000,
    discount: 10,
    description: "Emotional stories to heal your heart...",
  },
];

const categories = [
  "Văn học",
  "Kinh Tế",
  "Tâm lý - Kỹ năng sống",
  "Thiếu nhi",
  "Sách học ngoại ngữ",
  "Foreign books",
  "Thể loại khác",
];

const BookList: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [selectedBook, setSelectedBook] = useState<Book>(books[0]);

  useEffect(() => {

  }, [])
  

  return (
    <div className="p-5">

      {/* Tabs */}
      <div className="flex border-b mb-4">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`py-2 px-4 text-sm font-medium transition-colors duration-300 ${
              activeTab === index
                ? "border-b-2 border-red-500 text-red-500"
                : "text-gray-500 hover:text-red-500"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Book List */}
      <div className="flex flex-col md:flex-row">
        <div className="flex-none md:w-full lg:w-1/3 md:border-r p-4">
          {books.map((book, index) => (
            <div
              key={book.id}
              className={`flex items-center p-3 mb-3 ${
                selectedBook.id === book.id
                  ? "bg-gray-100 border-l-4 border-red-500"
                  : "hover:bg-gray-50"
              }`}
              onMouseEnter={() => setSelectedBook(book)}
            >
              <span className="text-lg font-bold text-gray-800 mr-4">
                {String(index + 1).padStart(2, "0")}
              </span>
              <img
                src={book.image}
                alt={book.title}
                className="w-14 h-16 mr-4"
              />
              <div>
                <h3 className="text-sm font-semibold">{book.title}</h3>
                <p className="text-xs text-gray-500">{book.author}</p>
                <p className="text-xs text-blue-600">{book.points} điểm</p>
              </div>
            </div>
          ))}
        </div>

        {/* Book Details */}
        <div className="flex-grow p-4 hidden md:block">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-none md:w-1/3">
              <img
                src={selectedBook.image}
                alt={selectedBook.title}
                className="w-full h-auto"
              />
            </div>
            <div className="flex-grow">
              <h3 className="text-xl font-bold text-gray-800">
                {selectedBook.title}
              </h3>
              <p className="text-sm text-gray-600">{selectedBook.author}</p>
              <p className="text-sm text-gray-500">
                Nhà xuất bản: {selectedBook.publisher}
              </p>
              <div className="flex items-center my-2">
                <span className="text-lg font-bold text-red-500">
                  {selectedBook.price.toLocaleString()} đ
                </span>
                <span className="text-sm text-gray-400 line-through ml-2">
                  {selectedBook.oldPrice.toLocaleString()} đ
                </span>
                <span className="text-xs bg-yellow-200 text-yellow-800 ml-2 px-2 py-1 rounded">
                  -{selectedBook.discount}%
                </span>
              </div>
              <div
              className="text-sm text-gray-800 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: selectedBook.description }}
              >
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* More Button */}
      <div className="flex justify-center mt-4">
        <Button variant={"nutxemthem"}>Xem thêm</Button>
      </div>
    </div>
  );
};

export default BookList;
