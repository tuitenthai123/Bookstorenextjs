import React from 'react';
import { AiOutlineProduct } from "react-icons/ai";
import Link from 'next/link';

const Portfolio = () => {
  const sanpham = [
    {id: 1, urlimg: "https://cdn0.fahasa.com/media/wysiwyg/Duy-VHDT/Danh-muc-san-pham/banhbong.jpg", label: "Đồ Chơi Vận Động", urlnav: "#"},
    {id: 2, urlimg: "https://cdn0.fahasa.com/media/wysiwyg/Huyen-KD/image_213680-removebg-preview.png", label: "Stem - Steam", urlnav: "#"},
    {id: 3, urlimg: "https://cdn0.fahasa.com/media/wysiwyg/Duy-VHDT/Danh-muc-san-pham/5702017584461-_1_.jpg", label: "Đồ Chơi Lắp Ráp", urlnav: "#"},
    {id: 4, urlimg: "https://cdn0.fahasa.com/media/wysiwyg/tuan-test-css/nuoi-con-khong-phai-cuoc-chien_resize100.jpg", label: "Bé Khỏe - Ba Mẹ Thành Thơi", urlnav: "#"},
    {id: 5, urlimg: "https://cdn0.fahasa.com/media/wysiwyg/Duy-VHDT/Danh-muc-san-pham/240715/2345x100.png", label: "Đam Mỹ", urlnav: "#"},
    {id: 6, urlimg: "https://cdn0.fahasa.com/media/wysiwyg/Duy-VHDT/Danh-muc-san-pham/240715/gocnhoconang100x100.jpg", label: "Văn Học", urlnav: "#"},
    {id: 7, urlimg: "https://cdn0.fahasa.com/media/wysiwyg/Duy-VHDT/Danh-muc-san-pham/240715/atomichabit100x100.jpg", label: "Tâm Lý Kỹ Năng", urlnav: "#"},
    {id: 8, urlimg: "https://cdn0.fahasa.com/media/wysiwyg/Duy-VHDT/Danh-muc-san-pham/8935244874389.jpg", label: "Thiếu Nhi", urlnav: "#"},
    {id: 9, urlimg: "https://cdn0.fahasa.com/media/wysiwyg/Duy-VHDT/Danh-muc-san-pham/240715/hsk100x100.jpg", label: "Sách Học Ngoại Ngữ", urlnav: "#"},
    {id: 10, urlimg: "https://cdn0.fahasa.com/media/wysiwyg/Duy-VHDT/ngoai-van-t1-24(1).jpg", label: "Ngoại Văn", urlnav: "#"},
  ];

  return (
    <div className='p-5'>
      <div className='rounded-lg bg-pink-100/75 p-5'>
        <div className='flex items-center mb-5'>
          <AiOutlineProduct className='w-10 h-10 text-red-500/95' />
          <span className='ml-2 text-xl font-semibold'>Danh mục sản phẩm</span>
        </div>
        <div className='grid grid-cols-10 gap-4'>
          {sanpham.map((item) => (
            <Link key={item.id} href={item.urlnav}>
              <div className="flex flex-col items-center">
                <img className="w-24 h-24 object-cover mb-2 rounded-xl" src={item.urlimg} alt={item.label} />
                <span className="w-28 text-center text-sm font-medium">{item.label}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
