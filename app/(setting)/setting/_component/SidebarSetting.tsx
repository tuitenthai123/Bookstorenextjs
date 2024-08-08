import React, { useState } from 'react';
import Router, { useRouter } from 'next/navigation';

// Định nghĩa kiểu dữ liệu cho từng phần tử
interface MenuItem {
  label: string;
  route: string;
  content: string;
}

const SidebarSetting: React.FC = () => {
  const route = useRouter();
  const taikhoan: MenuItem[] = [
    { label: "Thông tin & Bảo mật", route: "/profile", content: "Chi tiết thông tin & bảo mật" },
    { label: "Địa chỉ", route: "/diachi", content: "Chi tiết địa chỉ" },
    { label: "Tài khoản/Thẻ ngân hàng", route: "/account", content: "Chi tiết tài khoản/thẻ ngân hàng" },
  ];

  const caidat: MenuItem[] = [
    { label: "Thông báo", route: "/thongbao", content: "Chi tiết thông báo" },
    { label: "Riêng tư", route: "/private", content: "Chi tiết riêng tư" },
    { label: "Ngôn ngữ", route: "/lang", content: "Chi tiết ngôn ngữ" },
  ];

  const hotro: MenuItem[] = [
    { label: "Trung tâm hỗ trợ", route: "/support", content: "Chi tiết trung tâm hỗ trợ" },
    { label: "Tiêu chuẩn cộng đồng", route: "/dieukhoan", content: "Chi tiết tiêu chuẩn cộng đồng" },
    { label: "Điều khoản thanh lý", route: "/dieukhoanfruit", content: "Chi tiết điều khoản thanh lý" },
    { label: "Giới thiệu", route: "/gioithieu", content: "Chi tiết giới thiệu" },
  ];

  // Định nghĩa kiểu cho trạng thái selectedSection
  const [selectedSection, setSelectedSection] = useState<{
    section: MenuItem[];
    index: number;
  } | null>({section:taikhoan,index:0});

  const handleClick = (section: MenuItem[], index: number) => {
    setSelectedSection({ section, index });
    route.push(`/setting/${section[index].route}`,{scroll:false})
  };

  return (
    <div>
      <div className='p-4'>
        {/* Phần tài khoản */}
        <div className='border-b-2 pb-4'>
          <span className='text-xs font-medium text-gray-500 uppercase'>Tài khoản</span>
          <div className='flex flex-col gap-3 mt-2'>
            {taikhoan.map((item, index) => (
              <div
                key={item.label}
                className={`p-2 cursor-pointer bg-slate-200/40 hover:bg-blue-100  ${
                  selectedSection?.section[1]?.label === "Địa chỉ" && selectedSection?.index === index ? 'border-l-4 border-blue-700 rounded-r-lg' : 'rounded'
                }`}
                onClick={() => {handleClick(taikhoan, index); console.log(taikhoan)}}
              >
                {item.label}
              </div>
            ))}
          </div>
        </div>

        {/* Phần cài đặt */}
        <div className='border-b-2 pb-4 mt-4'>
          <span className='text-xs font-medium text-gray-500 uppercase'>Cài đặt</span>
          <div className='flex flex-col gap-3 mt-2'>
            {caidat.map((item, index) => (
              <div
                key={item.label}
                className={`p-2 cursor-pointer bg-slate-200/40 hover:bg-blue-100  ${
                  selectedSection?.section[0]?.label === "Thông báo" && selectedSection?.index === index ? 'border-l-4 border-blue-700 rounded-r-lg' : 'rounded'
                }`}
                onClick={() => handleClick(caidat, index)}
              >
                {item.label}
              </div>
            ))}
          </div>
        </div>

        {/* Phần hỗ trợ */}
        <div className='pb-4 mt-4'>
          <span className='text-xs font-medium text-gray-500 uppercase'>Hỗ trợ</span>
          <div className='flex flex-col gap-3 mt-2'>
            {hotro.map((item, index) => (
              <div
                key={item.label}
                className={`p-2 cursor-pointer bg-slate-200/40 hover:bg-blue-100  ${
                  selectedSection?.section[0]?.label === "Trung tâm hỗ trợ" && selectedSection?.index === index ? 'border-l-4 border-blue-700 rounded-r-lg' : 'rounded'
                }`}
                onClick={() => {handleClick(hotro, index);}}
              >
                {item.label}
              </div>
            ))}
          </div>
        </div>   
      </div>
    </div>
  );
};

export default SidebarSetting;
