import React from 'react'
import Link from "next/link"

const Product = () => {
    const thuonghieu =[
        {id:1,urlimg:"https://cdn0.fahasa.com/media/wysiwyg/Thang-07-2024/IconT7_Sale Năm Học Mới_120x120.png",label:"Back To School",urlnav:"##"},
        {id:2,urlimg:"https://cdn0.fahasa.com/media/wysiwyg/Thang-07-2024/IconT7_Logo NCC_HuyHoang_120x120.png",label:"Huy Hoàng",urlnav:"#"},
        {id:3,urlimg:"https://cdn0.fahasa.com/media/wysiwyg/Duy-VHDT/Icon_Balo_120x120.png",label:"Balo",urlnav:"#"},
        {id:4,urlimg:"https://cdn0.fahasa.com/media/wysiwyg/Thang-05-2024/Icon_GiamGia_120x120.png",label:"Sản Phẩm Được Trợ Giá",urlnav:"#"},
        {id:5,urlimg:"https://cdn0.fahasa.com/media/wysiwyg/Thang-06-2024/icon_ManngaT06.png",label:"Manga",urlnav:"#"},
        {id:6,urlimg:"https://cdn0.fahasa.com/media/wysiwyg/icon-menu/Icon_FlashSale_Thuong_120x120.png",label:"Flash Sale",urlnav:"#"},
        {id:7,urlimg:"https://cdn0.fahasa.com/media/wysiwyg/icon-menu/Icon_MaGiamGia_8px_1.png",label:"Mã Giảm Giá",urlnav:"#"},
        {id:8,urlimg:"https://cdn0.fahasa.com/media/wysiwyg/icon-menu/IconDoChoi_Thuong_120x120.png",label:"Đồ Chơi",urlnav:"#"},
        {id:9,urlimg:"https://cdn0.fahasa.com/media/wysiwyg/Thang-01-2024/ChoDoCu.png",label:"Đồ cũ",urlnav:"#"},
        {id:10,urlimg:"https://cdn0.fahasa.com/media/wysiwyg/icon-menu/Icon_SanPhamMoi_8px_1.png",label:"Sản Phẩm mới",urlnav:"#"},
      ]
    
  return (
    <div className="p-5">
        <div className="border-2 flex justify-center items-center border-dashed rounded-lg border-black p-4">
          <div className="flex sm:flex-row flex-col gap-6 sm:gap-10">
            {thuonghieu.map((item) => (
              <div key={item.id}>
                <Link href={item.urlnav} className="flex flex-col justify-center items-center">
                  <img className="w-10 h-10" src={item.urlimg} alt={item.label} />
                  <span className="w-28 text-center">{item.label}</span>
                </Link>
              </div>
            ))}
          </div> 
        </div>
      </div>
  )
}

export default Product