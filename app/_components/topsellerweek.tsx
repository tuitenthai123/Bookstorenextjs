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
    image: "https://cdn0.fahasa.com/media/catalog/product/b/_/b_a-in-g_c-nh_-c_-n_ng.jpg",
    points: 4334,
    publisher: "Thanh Niên",
    price: 55760,
    oldPrice: 68000,
    discount: 18,
    description:`        
        <div class="col-xs-12 description"><p style="text-align: justify;"><strong>Góc Nhỏ Có Nắng</strong></p>
<p style="text-align: justify;">- Với 30 chủ đề tô màu phong phú đa dạng, mỗi bức tranh như là một lời thủ thỉ tâm tình gửi đến bạn</p>
<p style="text-align: justify;">- Thư giãn và chữa lành: Với những hình ảnh đẹp mắt và đơn giản, tô màu sẽ là một phương pháp hiệu quả giúp bạn chữa lành và nuôi dưỡng tâm hồn</p>
<p style="text-align: justify;">- Khám phá sự sáng tạo: Bạn đừng ngại vẽ thêm, tô thêm màu sắc để thể hiện cảm xúc của riêng mình</p>
<p style="text-align: justify;">- Chất liệu giấy dày, mịn, đẹp sẽ đem đến cho bạn trải nghiệm tô màu thú vị</p>...</div>`,
  },
  {
    id: 2,
    title: "Tô Bình Yên Về Hạnh Phúc (Tái Bản 2022)",
    author: "Kulzsc",
    image: "https://cdn0.fahasa.com/media/catalog/product/8/9/8935325006289.jpg",
    points: 1837,
    publisher: "NXB Kim Đồng",
    price: 43200,
    oldPrice: 48000,
    discount: 10,
    description: `<div class="col-xs-12 description"><p style="text-align: justify;"><strong>Tô Bình Yên Vẽ Hạnh Phúc (Tái Bản 2022)</strong></p>

<p style="text-align: justify;">Sau thành công của cuốn sách đầu tay “Phải lòng với cô đơn” chàng họa sĩ nổi tiếng và tài năng Kulzsc đã trở lại với một cuốn sách vô cùng đặc biệt mang tên: "Tô bình yên - vẽ hạnh phúc” – sắc nét phong cách cá nhân với một chút “thơ thẩn, rất hiền”.</p>

<p style="text-align: justify;">Không giống với những cuốn sách chỉ để đọc, “Tô bình yên – vẽ hạnh phúc” là một cuốn sách mà độc giả vừa tìm được “Hạnh phúc to to từ những điều nho nhỏ” vừa được thực hành ngay lập tức. Một sự kết hợp mới lạ đầy thú vị giữa thể loại sá...</p></div>`,
  },
  {
    id: 3,
    title: "999 Lá Thư Gửi Cho Chính Mình - Tô Màu Cuộc Sống",
    author: "Miêu Công Tử, Hà Trang (Tahtag)",
    image: "https://cdn0.fahasa.com/media/catalog/product/9/9/999-l_-th_-g_i-cho-ch_nh-m_nh-_-t_-m_u-cu_c-s_ng.jpg",
    points: 1727,
    publisher: "NXB Trẻ",
    price: 75900,
    oldPrice: 79900,
    discount: 5,
    description: `<div class="col-xs-12 description"><p style="text-align: justify;"><strong>999 Lá Thư Gửi Cho Chính Mình - Tô Màu Cuộc Sống</strong></p>
<p style="text-align: justify;">Chúng mình đều biết những sắc màu của cuộc sống đều bắt nguồn từ những điều bình dị và thường nhật nhất xung quanh mà ta vẫn thường tiếp xúc mỗi ngày: như bầu trời xanh ngát, như áng mây trắng tinh, như ánh nắng phủ vàng lên những đóa hoa hồng ngọt… Thế nhưng nhịp sống hàng ngày của chúng ta luôn trôi qua trong sự vội vã, những bộn bề hóa thành “bộ lọc” biến bức tranh cuộc sống muôn màu kia trở nên ảm đạm và phủ đầy âu lo, khiến ta dường như quên lãng việc phải khám phá ra những vẻ đẹp thuần khiết của vạn vật, quên mất rằng thế giới mà chúng ta đang sống cũng có ...</p></div>`,
  },
  {
    id: 4,
    title: "Doraemon - Tiểu Thuyết - Nobita Và Bản Giao Hưởng Địa Cầu",
    author: "Fujiko F Fujio , Teruko Utsumi, Kazuaki Imai",
    image: "https://cdn0.fahasa.com/media/catalog/product/d/o/doraemon-tieu-thuyet_nobita-va-ban-giao-huong-dia-cau_bia.jpg",
    points: 1260,
    publisher: "Shogakukan",
    price: 89100,
    oldPrice: 99000,
    discount: 10,
    description: `<div class="col-xs-12 description"><p style="text-align: justify;"><strong>999 Lá Thư Gửi Cho Chính Mình - Tô Màu Cuộc Sống</strong></p>
<p style="text-align: justify;">Chúng mình đều biết những sắc màu của cuộc sống đều bắt nguồn từ những điều bình dị và thường nhật nhất xung quanh mà ta vẫn thường tiếp xúc mỗi ngày: như bầu trời xanh ngát, như áng mây trắng tinh, như ánh nắng phủ vàng lên những đóa hoa hồng ngọt… Thế nhưng nhịp sống hàng ngày của chúng ta luôn trôi qua trong sự vội vã, những bộn bề hóa thành “bộ lọc” biến bức tranh cuộc sống muôn màu kia trở nên ảm đạm và phủ đầy âu lo, khiến ta dường như quên lãng việc phải khám phá ra những vẻ đẹp thuần khiết của vạn vật, quên mất rằng thế giới mà chúng ta đang sống cũng có ...</p></div>`,
  },
  {
    id: 5,
    title: "Trốn Lên Mái Nhà Để Khóc - Tặng Kèm Bookmark",
    author: "Lam",
    image: "https://cdn0.fahasa.com/media/catalog/product/b/_/b_a-1-tr_n-l_n-m_i-nh_-_-kh_c-2.jpg",
    points: 1210,
    publisher: "NXB Văn Học",
    price: 68400,
    oldPrice: 76000,
    discount: 10,
    description: `<div class="col-xs-12 description"><p style="text-align: justify;"><strong>Trốn Lên Mái Nhà Để Khóc</strong></p>
<p style="text-align: justify;">Những cơn gió heo may len lỏi vào từng góc phố nhỏ, mùa thu về gợi nhớ bao yêu thương đong đầy, bao xúc cảm dịu dàng của ký ức. Đó là nỗi nhớ đau đáu những hương vị quen thuộc của đồng nội, là hoài niệm bất chợt khi đi trên con đường cũ in dấu bao kỷ niệm... để rồi ta ước có một chuyến tàu kỳ diệu trở về những năm tháng ấy, trở về nơi nương náu bình yên sau những tháng ngày loay hoay để học cách trở thành một người lớn. Bạn sẽ được đắm mình trong những cảm xúc đẹp đẽ xen lẫn những tiếc nuối đầy lắng đọng trong “Trốn lên mái nhà đẻ khóc” của Lam.</p>
<p style="text-align: justify;">Có nhiều câu chuyện luôn nằm trong k...</p></div>`,
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

const BookList = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [selectedBook, setSelectedBook] = useState<Book>(books[0]);

  return (
    <div className="p-5">
        <div className="flex items-center mb-1 bg-black p-3 rounded-t-lg gap-3">
          <span className="text-xl font-semibold text-white">
            Bản xếp hạng bán chạy tuần
          </span>
        </div>
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
