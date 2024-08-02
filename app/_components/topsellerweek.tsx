"use client";
import React, { useState,useEffect } from "react";
import { Button } from "@/components/ui/button";

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

// const categories = [
//   "Văn học",
//   "Kinh Tế",
//   "Tâm lý - Kỹ năng sống",
//   "Thiếu nhi",
//   "Sách học ngoại ngữ",
//   "Foreign books",
//   "Thể loại khác",
// ];

const tabs = [
  { id:0,label:"Văn học" },
  { id:1,label:"Kinh tế" },
  { id:2,label:"Tâm lý - Kỹ năng sống" },
  { id:3,label:"Thiếu nhi" },
  { id:4,label:"Sách học ngoại ngữ" },
  { id:5,label:"Foreign books" },
  { id:6,label:"Thể loại khác" }
];

const books: Book[] = [
  //VAN HOC
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
    description:
      `<div class="col-xs-12 description"><p style="text-align: justify;"><strong>Góc Nhỏ Có Nắng</strong></p>
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
    publisher: "NXB Phụ Nữ Việt Nam",
    price: 68640,
    oldPrice: 88000,
    discount: 22,
    description:
      `<div class="col-xs-12 description"><p style="text-align: justify;"><strong>Tô Bình Yên Vẽ Hạnh Phúc (Tái Bản 2022)</strong></p>

<p style="text-align: justify;">Sau thành công của cuốn sách đầu tay “Phải lòng với cô đơn” chàng họa sĩ nổi tiếng và tài năng Kulzsc đã trở lại với một cuốn sách vô cùng đặc biệt mang tên: "Tô bình yên - vẽ hạnh phúc” – sắc nét phong cách cá nhân với một chút “thơ thẩn, rất hiền”.</p>

<p style="text-align: justify;">Không giống với những cuốn sách chỉ để đọc, “Tô bình yên – vẽ hạnh phúc” là một cuốn sách mà độc giả vừa tìm được “Hạnh phúc to to từ những điều nho nhỏ” vừa được thực hành ngay lập tức. Một sự kết hợp mới lạ đầy thú vị giữa thể loại sá...</p></div>`,
  },

  {
    id: 3,
    title: "999 Lá Thư Gửi Cho Chính Mình - Tô Màu Cuộc Sống",
    author: "Miêu Công Tử, Hà Trang (Tahtag)",
    image: "https://cdn0.fahasa.com/media/catalog/product/9/9/999-l_-th_-g_i-cho-ch_nh-m_nh-_-t_-m_u-cu_c-s_ng.jpg",
    points: 1727,
    publisher: "Thanh Niên",
    price: 74250,
    oldPrice: 99000,
    discount: 25,
    description:
      `<div class="col-xs-12 description"><p style="text-align: justify;"><strong>999 Lá Thư Gửi Cho Chính Mình - Tô Màu Cuộc Sống</strong></p>
<p style="text-align: justify;">Chúng mình đều biết những sắc màu của cuộc sống đều bắt nguồn từ những điều bình dị và thường nhật nhất xung quanh mà ta vẫn thường tiếp xúc mỗi ngày: như bầu trời xanh ngát, như áng mây trắng tinh, như ánh nắng phủ vàng lên những đóa hoa hồng ngọt… Thế nhưng nhịp sống hàng ngày của chúng ta luôn trôi qua trong sự vội vã, những bộn bề hóa thành “bộ lọc” biến bức tranh cuộc sống muôn màu kia trở nên ảm đạm và phủ đầy âu lo, khiến ta dường như quên lãng việc phải khám phá ra những vẻ đẹp thuần khiết của vạn vật, quên mất rằng thế giới mà chúng ta đang sống cũng có ...</p></div>`,
  },

  {
    id: 4,
    title: "Doraemon - Tiểu Thuyết - Nobita Và Bản Giao Hưởng Địa Cầu",
    author: "Fujiko F Fujio , Teruko Utsumi, Kazuaki Imai",
    image: "https://cdn0.fahasa.com/media/catalog/product/d/o/doraemon-tieu-thuyet_nobita-va-ban-giao-huong-dia-cau_bia.jpg",
    points: 1260,
    publisher: "Kim Đồng",
    price: 54000,
    oldPrice: 60000,
    discount: 10,
    description:
      `<div class="col-xs-12 description"><p style="text-align: justify;"><strong>Doraemon - Tiểu Thuyết - Nobita Và Bản Giao Hưởng Địa Cầu</strong></p>
<p style="text-align: justify;">Nobita đang tập sáo để chuẩn bị cho buổi hòa nhạc ở trường thì bất ngờ gặp cô bé Micca bí ẩn có giọng hát tuyệt vời. Micca rất thích nốt No nhẹ nhõm vô ưu Nobita thổi, bèn mời nhóm bạn đến Cung Điện Farre kì lạ, nơi sử dụng âm nhạc làm năng lượng. Cung Điện “ngủ đông” vì cạn nhiên liệu, và Micca đang tìm kiếm bậc thầy âm nhạc để cùng trình diễn nhằm hồi sinh nó. Doraemon và nhóm bạn địa cầu dùng bảo bối chứng chỉ chuyên viên âm nhạc để chọn nhạc cụ diễn tấu với Micca. Cung Điện Farre vừa dần phục hồi thì...</p>
<p style="text-align: justify;">---</p>
<p style="text-align: justify;">Tác giả </p></div>`,
  },

  {
    id: 5,
    title: "Trốn Lên Mái Nhà Để Khóc - Tặng Kèm Bookmark",
    author: "Lam",
    image: "https://cdn0.fahasa.com/media/catalog/product/b/_/b_a-1-tr_n-l_n-m_i-nh_-_-kh_c-2.jpg",
    points: 1210,
    publisher: "Dân Trí",
    price: 74100,
    oldPrice: 95000,
    discount: 22,
    description:
      `<div class="col-xs-12 description"><p style="text-align: justify;"><strong>Trốn Lên Mái Nhà Để Khóc</strong></p>
<p style="text-align: justify;">Những cơn gió heo may len lỏi vào từng góc phố nhỏ, mùa thu về gợi nhớ bao yêu thương đong đầy, bao xúc cảm dịu dàng của ký ức. Đó là nỗi nhớ đau đáu những hương vị quen thuộc của đồng nội, là hoài niệm bất chợt khi đi trên con đường cũ in dấu bao kỷ niệm... để rồi ta ước có một chuyến tàu kỳ diệu trở về những năm tháng ấy, trở về nơi nương náu bình yên sau những tháng ngày loay hoay để học cách trở thành một người lớn. Bạn sẽ được đắm mình trong những cảm xúc đẹp đẽ xen lẫn những tiếc nuối đầy lắng đọng trong “Trốn lên mái nhà đẻ khóc” của Lam.</p>
<p style="text-align: justify;">Có nhiều câu chuyện luôn nằm trong k...</p></div>`,
  },

  //KINH TE
  {      
    id: 6,
    title: "MBA Bằng Hình - The Usual MBA",
    author: "Jason Barron , MBA",
    image: "https://cdn0.fahasa.com/media/catalog/product/8/9/8935235238978.jpg",
    points: 600,
    publisher: "Công Thương",
    price: 151200,
    oldPrice: 189000,
    discount: 20,
    description:
      `<div class="col-xs-12 description"><p style="text-align: justify;"><strong>MBA Bằng Hình - The Usual MBA</strong></p>

<p style="text-align: justify;">Jason Barron, MBA, là một nhà lãnh đạo đầy sáng tạo tập trung vào chiến lược sản phẩm số và trải nghiệm người dùng. Ông cũng là đồng sự sáng lập nên công ty khởi nghiệp LowestMed, vốn được RetailMeNot thâu tóm vào năm 2018, và hiện nay đang làm quản lý cấp cao cho một tổ chức phi lợi nhuận lớn chuyên về các sản phẩm số cung cấp cho hàng triệu người dùng trên khắp thế giới.</p>

<p style="text-align: justify;">Ông nhận bằng cử nhân từ Đại học Southern Virginia năm 2007 và bằng Thạc sĩ Quản trị Kinh doanh từ Đại học Brigham Young vào năm 2017. </p>

<p style="text-align: justify;">Hiện tại Jason đang sống gần Salt Lake City, Utah, với vợ và năm người con. Tìm hiểu thêm ...</p></div>`,
  },

  {
    id: 7,
    title: "Kế Toán Vỉa Hè - Thực Hành Báo Cáo Tài Chính Căn Bản Từ Quầy Bán Nước Chanh",
    author: "Darrell Mullis, Judith Orloff",
    image: "https://cdn0.fahasa.com/media/catalog/product/9/7/9786047787616.jpg",
    points: 589,
    publisher: "Thế Giới",
    price: 179100,
    oldPrice: 199000,
    discount: 10,
    description:
      `<div class="col-xs-12 description"><p style="text-align: justify;"><strong>Kế Toán Vỉa Hè</strong></p>
<p style="text-align: justify;"><strong>BIẾN KẾ TOÁN KHÔ KHAN TRỞ THÀNH TRÒ CHƠI CON TRẺ, DỄ HIỂU VÀ DỄ ÁP DỤNG</strong></p>
<p style="text-align: justify;">Đã bao lần bạn cầm trên tay bảng báo cáo tài chính doanh nghiệp của mình, nhưng chẳng thể nào hiểu nổi?</p>
<p style="text-align: justify;">Kế toán và tài chính là nỗi đau chung của rất nhiều doanh nghiệp nhỏ. Ngôn ngữ tài chính dường như là điều bí ẩn nhất của thế giới. Vô số tính toán và ý đồ được cài cắm sau các con số, mà thậm chí người kinh doanh nhiều năm cũng không thể nào bóc tách nổi.</p>
<p style="text-align: justify;">Nếu bạn vẫn cảm thấy mù mờ với bảng báo cáo t&amp;agr...</p></div>`,
  },

  {
    id: 8,
    title: "48 Nguyên Tắc Chủ Chốt Của Quyền Lực (Tái Bản 2020)",
    author: "Robert Greene",
    image: "https://cdn0.fahasa.com/media/catalog/product/i/m/image_195509_1_32101.jpg",
    points: 528,
    publisher: "NXB Trẻ",
    price: 164000,
    oldPrice: 200000,
    discount: 18,
    description:
      `<div class="col-xs-12 description"><p style="text-align: justify;">Quyền lực có sức hấp dẫn vô cùng mạnh mẽ đối với con người trong mọi thời, ở mọi nơi, với mọi giai tầng. Lịch sử xét cho cùng là cuộc đấu tranh triền miên để giành cho bằng được quyền lực cai trị của các tập đoàn thống trị, từ cổ chí kim, từ đông sang tây.</p>

<p style="text-align: justify;">Quyền lực là thứ mà rất nhiều người mong muốn nhưng không phải ai cũng dễ dàng đạt được. Vươn lên những vị trí cao hơn trong thang bậc xã hội thường được xem là một khát khao rất con người. Nhưng, liệu có phải chỉ những tài năng xuất chúng mới có thể đạt được điều đó? Không hẳn vậy. Bởi ít ai biết rằng, để giành được một vị trí quyền lực thực tế vẫn mang tính công thức.</p>

<p style="text-align: justify;">Qua nghiên cứu lịch sử nhâ...</p></div>`,
  },

  {
    id: 9,
    title: "Chiến Tranh Tiền Tệ - Phần 1 - Ai Thực Sự Là Người Giàu Nhất Thế Giới? (Tái bản 2022)",
    author: "Song Hong Bing",
    image: "https://cdn0.fahasa.com/media/catalog/product/b/i/bia-truoc-chien-tranh-tien-te-phan-1-1.jpg",
    points: 506,
    publisher: "NXB Lao Động",
    price: 118800,
    oldPrice: 165000,
    discount: 28,
    description:
      `<div class="col-xs-12 description"><p style="text-align: justify;"><strong>Chiến Tranh Tiền Tệ - Phần 1 - Ai Thực Sự Là Người Giàu Nhất Thế Giới?</strong></p>
<p style="text-align: justify;">Một khi đọc “Chiến tranh tiền tệ - Ai thật sự là người giàu nhất thế giới” bạn sẽ phải giật mình nhận ra một điều kinh khủng rằng, đằng sau những tờ giấy bạc chúng ta chi tiêu hàng ngày là cả một thế lực ngầm đáng sợ - một thế lực bí ẩn với quyền lực siêu nhiên có thể điều khiển cả thế giới rộng lớn này.</p>
<p style="text-align: justify;">“Chiến tranh tiền tệ - Ai thật sự là người giàu nhất thế giới” đề cập đến một cuộc chiến khốc liệt, không khoan nhượng và dai dẳng giữa một nhóm nhỏ các ông trùm tài chính – đứng đầu là gia tộc Rothschild – với các thể chế tài chính của nhiều quốc gia. Đ&amp;oacu...</p></div>`,
  },

  {
    id: 10,
    title: "Thuế Và Kế Toán Thuế Trong Doanh Nghiệp - Lý Thuyết Và Thực Hành (Tái Bản 2023)",
    author: "Nhiều Tác Giả",
    image: "https://cdn0.fahasa.com/media/catalog/product/9/7/9786047936915.jpg",
    points: 462,
    publisher: "Tài Chính",
    price: 225420,
    oldPrice: 289000,
    discount: 22,
    description:
      `<div class="col-xs-12 description"><p style="text-align: justify;"><strong>Thuế Và Kế Toán Thuế Trong Doanh Nghiệp - Lý Thuyết Và Thực Hành</strong></p>

<p style="text-align: justify;">Nội dung cuốn sách như sau:</p>

<p style="text-align: justify;">CHƯƠNG 1: KHÁI QUÁT CHUNG VỀ HỆ THỐNG THUẾ VÀ KẾ TOÁN THUẾ VIỆT NAM</p>

<p style="text-align: justify;">CHƯƠNG 2: THUẾ GIÁ TRỊ GIA TĂNG VÀ KẾ TOÁN THUẾ GIÁ TRỊ GIA TĂNG</p>

<p style="text-align: justify;">CHƯƠNG 3: THUẾ TIÊU THỤ ĐẶC BIỆT VÀ KẾ TOÁN THUẾ TIÊU THỤ ĐẶC BIỆT</p>

<p style="text-align: justify;">CHƯƠNG 4: THUẾ XUẤT, NHẬP KHẨU VÀ KẾ TOÁN THUẾ XUẤT, NHẬP KHẨU</p>

<p style="text-align: justify;">CHƯƠNG 5: THUẾ THU NHẬP DOANH NGHIỆP VÀ KẾ TOÁN THUẾ THU NHẬP DOANH NGHIỆP</p>

<p style="text-align: justify;">CHƯƠNG 6: THUẾ THU NHẬP CÁ NHÂN VÀ KẾ TOÁN THUẾ THU NHẬP CÁ NHÂN</p>
...</div>`,
  },

  //TAM LY - KY NANG SONG
  {      
    id: 11,
    title: "38 Bức Thư Rockefeller Viết Cho Con Trai",
    author: "Thanh Hương",
    image: "https://cdn0.fahasa.com/media/catalog/product/9/7/9786044777481.jpg",
    points: 1694,
    publisher: "Văn Học",
    price: 68000,
    oldPrice: 138000,
    discount: 50,
    description:
      `<div class="col-xs-12 description"><p style="text-align: justify;"><strong>38 Bức Thư Rockefeller Viết Cho Con Trai</strong></p>

<p style="text-align: justify;"><em>NGƯỜI SỐNG TRÊN ĐỜI, NHƯ THẾ NÀO LÀ THIỆN, LẠI NHƯ THẾ NÀO LÀ ÁC? THẾ NÀO LÀ SỰ THIÊN LỆCH, MÀ THẾ NÀO MỚI LÀ CHÍNH ĐÍNH?</em></p>

<p style="text-align: justify;">Có người khởi tâm ác mà thực ra lại là làm việc thiện. Nhưng nhà kia giàu có lắm, gặp năm mất mùa, dân cùng cực phải cướp thóc lúa ở chợ ngay giữa ban ngày. Người kia báo với tri huyện, nhưng tri huyện không xử lý việc ấy.</p>

<p style="text-align: justify;">Những người dân nghèo thấy thế càng phóng túng bừa bãi, nên nhà ấy tự ý bắt giam những người cướp bóc, làm cho chúng phải hổ thẹn, dâ...</p></div>`,
  },

  {
    id: 12,
    title: "Tư Duy Ngược",
    author: "Nguyễn Anh Dũng",
    image: "https://cdn0.fahasa.com/media/catalog/product/9/7/9786043440287.jpg",
    points: 1480,
    publisher: "Dân Trí",
    price: 68000,
    oldPrice: 139000,
    discount: 51,
    description:
      `<div class="col-xs-12 description"><p style="text-align: justify;"><strong>Tư Duy Ngược</strong></p>

<p style="text-align: justify;">Chúng ta thực sự có hạnh phúc không? Chúng ta có đang sống cuộc đời mình không? Chúng ta có dám dũng cảm chiến thắng mọi khuôn mẫu, định kiến, đi ngược đám đông để khẳng định bản sắc riêng của mình không?. Có bao giờ bạn tự hỏi như thế, rồi có câu trả lời cho chính mình?</p>

<p style="text-align: justify;">Tôi biết biết, không phải ai cũng đang sống cuộc đời của mình, không phải ai cũng dám vượt qua mọi lối mòn để sáng tạo và thành công… Dựa trên việc nghiên cứu, tìm hiểu, chắt lọc, tìm kiếm, ghi chép từ các câu chuyện trong đời sống, cũng như trải nghiệm của bản thân, tôi viết cuốn sách này.</p>

</div>`,
  },

  {
    id: 13,
    title: "Con Đường Chẳng Mấy Ai Đi",
    author: "M. Scott Peck",
    image: "https://cdn0.fahasa.com/media/catalog/product/9/7/9786044009674.jpg",
    points: 1403,
    publisher: "Dân Trí",
    price: 112200,
    oldPrice: 165000,
    discount: 32,
    description:
      `<div class="col-xs-12 description"><p style="text-align: justify;"><strong>Con Đường Chẳng Mấy Ai Đi</strong></p>

<p style="text-align: justify;">Có lẽ không quyển sách nào trong thế kỷ này có tác động sâu sắc đến đời sống trí tuệ và tinh thần của chúng ta hơn Con Đường Chẳng Mấy Ai Đi. Với doanh số trên 10 triệu bản in trên toàn thế giới và được dịch sang hơn 25 ngôn ngữ, đây là một hiện tượng trong ngành xuất bản, với hơn mười năm nằm trong danh sách Best-sellers của New York Times.</p>

<p style="text-align: justify;">Với cách hành văn kinh điển và thông điệp đầy thấu hiểu, quyển sách Con Đường Chẳng Mấy Ai Đi giúp chúng ta khám phá bản chất của các mối quan hệ và của một tinh thần trưởng thành. Quyển sách giúp chúng ta học cách phân biệt sự lệ thuộc với tình y&amp;e...</p></div>`,
  },

  {
    id: 14,
    title: "Atomic Habits - Thay Đổi Tí Hon Hiệu Quả Bất Ngờ (Tái Bản 2023)",
    author: "James Clear",
    image: "https://cdn0.fahasa.com/media/catalog/product/z/5/z5076620072937_da8216298d99e526fef85c804c0c2389_2.jpg",
    points: 1397,
    publisher: "Thế Giới",
    price: 151200,
    oldPrice: 189000,
    discount: 20,
    description:
      `<div class="col-xs-12 description"><p style="text-align: justify;"><strong>Atomic Habits - Thay Đổi Tí Hon Hiệu Quả Bất Ngờ (Tái Bản 2023)</strong></p>

<p style="text-align: justify;">• Wall Street Journal Bestseller, USA Today Bestseller, Publisher’s Weekly Bestseller</p>

<p style="text-align: justify;">• Nằm trong Top 20 tựa sách thể loại non-fiction bán chạy và được tìm đọc nhiều nhất của Amazon suốt 40 tuần tính đến tháng 9/2019</p>

<p style="text-align: justify;">Một thay đổi tí hon có thể biến đổi cuộc đời bạn không?</p>

<p style="text-align: justify;">Hẳn là khó đồng ý với điều đó. Nhưng nếu bạn thay đổi thêm một chút? Một chút nữa? Rồi thêm một chút nữa? Đến một lúc nào đó, bạn phải công nhận rằng cuộc sống của mình đã chuyển biến nhờ vào một thay đổi nhỏ…</p>

<p style="text-align: justify;">V...</p></div>`,
  },

  {
    id: 15,
    title: "Tư Duy Mở",
    author: "Nguyễn Anh Dũng",
    image: "https://cdn0.fahasa.com/media/catalog/product/9/7/9786044742250.jpg",
    points: 1172,
    publisher: "Dân Trí",
    price: 68000,
    oldPrice: 138000,
    discount: 50,
    description:
      `<div class="col-xs-12 description"><p style="text-align: justify;"><strong>Tư Duy Mở</strong></p>

<p style="text-align: justify;">Con người đang sống trong thời đại công nghệ, khi mọi thứ thay đổi chóng mặt, điều đó đòi hỏi chúng ta phải linh hoạt trong cách tư duy để bắt kịp xu hướng toàn cầu. Hay nói cách khác, chúng ta cần có một tư duy mở để đón nhận và khai phá kiến thức mới, bởi nếu chúng ta cứ khăng khăng giữ định kiến của mình thì sự phát triển sẽ đi vào ngõ cụt. </p>

<p style="text-align: justify;">Cụ thể hơn, người có tư duy mở tin rằng chỉ cần họ nỗ lực, thay đổi là có thể tiến bộ hơn. Họ sẽ vui vẻ chấp nhận thử thách, xem thử thách như cơ hội để học hỏi được những điều hay cái mới. Khi đối mặt với khó khăn hay không thành công, người có tư duy mở thường có thái độ: “C&amp;a...</p></div>`,
  },

  //THIEU NHI
  {      
    id: 16,
    title: "Lược Sử Nước Việt Bằng Tranh (Tái Bản 2022)",
    author: "Tạ Huy Long, Dương Trung Quốc, Hiếu Minh, Huyền Trang",
    image: "https://cdn0.fahasa.com/media/catalog/product/8/9/8935244874389.jpg",
    points: 2085,
    publisher: "NXB Kim Đồng",
    price: 119000,
    oldPrice: 140000,
    discount: 15,
    description:
      `<div class="col-xs-12 description"><p style="text-align: justify;"><strong>Lược Sử Nước Việt Bằng Tranh (Tái Bản 2022)</strong></p>

<p style="text-align: justify;">Dòng sử Việt trôi xuôi từ thượng nguồn lịch sử, thuở cha Lạc Long Quân kết duyên cùng mẹ Âu Cơ.</p>

<p style="text-align: justify;">Từ quá khứ xa xưa đẫm màu huyền tích, nước Việt đã trải qua xiết bao biến cố thăng trầm.</p>

<p style="text-align: justify;">Những dấu chân cha ông từ ngày mở nước vẫn còn lưu lại trong thẳm sâu tâm hồn dân tộc.</p>

<p style="text-align: justify;">Và ta hãy tìm xem, những bóng dáng nào của ngày hôm qua vẫn còn thấp thoáng trong dòng chảy hôm nay…</p>...</div>`,
  },

  {
    id: 17,
    title: "Búp Sen Xanh (Tái Bản 2020)",
    author: "Sơn Tùng",
    image: "https://cdn0.fahasa.com/media/catalog/product/8/9/8935244826487.jpg",
    points: 1881,
    publisher: "NXB Kim Đồng",
    price: 61200,
    oldPrice: 72000,
    discount: 15,
    description:
      `<div class="col-xs-12 description"><p style="text-align: justify;">Có thể xếp “Búp Sen Xanh” vào nhóm tác phẩm văn học dành cho thiếu nhi và là tác phẩm nổi tiếng nhất viết về chủ tịch Hồ Chí Minh trong suốt thời thơ ấu cho đến khi rời Việt Nam sang Pháp.</p>

<p style="text-align: justify;">“Búp Sen Xanh” là nơi tiểu thuyết và lịch sử đã gặp nhau và hoạ nên một giai đoạn trong cuộc đời người Cha già của dân tộc Việt Nam. Nơi ấy, có quê nhà xứ Nghệ, có làng Sen, có khung dệt của mẹ, có lời dạy của cha, có những người bạn và những kỷ niệm ấu thơ. Nơi ấy có xứ Huế mà trong cuộc sống nghèo khổ có trăn trở tuổi trẻ, về con người, về vận mệnh dân tộc, có mất mát và đau thương...</p>

<p style="text-align: justify;">“Búp Sen Xanh” vượt ...</p></div>`,
  },

  {
    id: 18,
    title: "100 Kỹ Năng Sinh Tồn",
    author: "Clint Emerson",
    image: "https://cdn0.fahasa.com/media/catalog/product/i/m/image_195509_1_46272.jpg",
    points: 930,
    publisher: "NXB Thanh Niên",
    price: 74250,
    oldPrice: 99000,
    discount: 25,
    description:
      `<div class="col-xs-12 description"><p style="text-align: justify;">Bạn sẽ làm gì nếu như một ngày bị mắc kẹt giữa vùng lãnh thổ có dịch bệnh hoành hành, lạc ở nơi hoang dã, bị móc túi khi đi du lịch ở đất nước xa lạ, hay phải thoát ngay khỏi một vụ hỏa hoạn ở nhà cao tầng… ?  Clint Emerson – một cựu Đặc vụ SEAL, lực lượng tác chiến đặc biệt của Hải quân Hoa Kỳ – muốn bạn có được sự chuẩn bị tốt nhất trong cuốn sách <strong><em>100 kỹ năng sinh tồn </em>này</strong>.</p>

<p style="text-align: justify;">Rõ ràng, chi tiết và được trình bày dễ hiểu, cuốn sách này phác thảo chi tiết nhiều chiến lược giúp bảo vệ bạn và những người bạn yêu thương, dạy bạn cách suy nghĩ và hành động như một thành viên của lực lượng quân đội tinh nhuệ Hoa Kỳ. <em>100 kỹ năng sinh tồn </em></p></div>`,
  },

  {
    id: 19,
    title: "Lớp Học Mật Ngữ Phiên Bản Mới - Tập 7 - Tặng Kèm Standee Lớp Học Mật Ngữ",
    author: "B R O Group",
    image: "https://cdn0.fahasa.com/media/catalog/product/l/h/lhmn-phienbanmoi-tap7-5595.jpg",
    points: 908,
    publisher: "Báo Sinh Viên Việt Nam - Hoa Học Trò",
    price: 21250,
    oldPrice: 25000,
    discount: 15,
    description:
      `<div class="col-xs-12 description"><p style="text-align: justify;"><strong>Lớp Học Mật Ngữ Phiên Bản Mới - Tập 7</strong></p>
<p style="text-align: justify;">Happy new year, new you and new dream! Bạn đã sẵn sàng cho một năm mới 2024 với ngập tràn những điều mới mẻ thú vị chưa?</p>
<p style="text-align: justify;">Như câu danh ngôn nổi tiếng của họa sĩ Van Gogh “Tôi mơ mình vẽ và rồi tôi vẽ giấc mơ” (<em>I dream of painting and then I paint my dream</em>). Hãy mơ lớn và cùng thực hiện giấc mơ của mình trong năm mới này nhé! Trước đó, cùng đọc tập 7 (tháng 1/2024) để xem những người bạn ở trường học Ngân Hà đang “mơ” gì nhé!</p>
<p style="text-align: justify;"><strong>Mơ ngay lúc này một trái tim “<em>full</em> giáp” để không còn muộn phiền</strong></p>
</div>`,
  },

  {
    id: 20,
    title: "Lớp Học Mật Ngữ Phiên Bản Mới - Tập 2 - Tặng Kèm Standee Lớp Học Mật Ngữ",
    author: "B R O Group",
    image: "https://cdn0.fahasa.com/media/catalog/product/l/h/lhmn-phienbanmoi-tap2-1165_1.jpg",
    points: 869,
    publisher: "Báo Sinh Viên Việt Nam - Hoa Học Trò",
    price: 21250,
    oldPrice: 25000,
    discount: 15,
    description:
      `<div class="col-xs-12 description"><p style="text-align: justify;"><strong>Lớp Học Mật Ngữ Phiên Bản Mới - Tập 2</strong></p>
<p style="text-align: justify;">HHT - Khi cạ cứng tự nhiên quay ra giận đùng đùng. Là có thân dữ chưa? Nếu bạn đã hoặc đang rơi vào tình huống bực bội với bạn mình, Lớp Học Mật Ngữ phiên bản mới Tập 2 chính là cẩm nang để xóa tan hiểu lầm và nạp thêm năng lượng cho chuyến xe tình bạn lại lao đi vun vút.<strong><br></strong></p>
<div id="cms-body" class="article__body cms-body" style="text-align: justify;">
<p><span>Hẹn gặp nhau ở “Bùng binh giận dỗi”</span></p>
<p>Ngân Hà đang xôn xao bộ phim hoạt hình&nbsp;<em>Bác sĩ lạ lắm,</em>&nbsp;ban ngày chữa bệnh cứu người, ban đêm tiêu diệt tội phạm. Nội dung gay cấn, hấp dẫn, chữa lành tâm hồn. Bạch Dương coi phim xong thích qu&amp;aacu...</p></div></div>`,
  },

  //SACH HOC NGOAI NGU
  {      
    id: 21,
    title: "'Chém' Tiếng Anh Không Cần Động Não - Tặng Kèm Bộ Video Luyện Nghe-Nói + Sổ Học Từ Vựng",
    author: "Bino Chém Tiếng Anh",
    image: "https://cdn0.fahasa.com/media/catalog/product/c/h/chemta-bino_bia1.jpg",
    points: 2041,
    publisher: "Thế Giới",
    price: 125060,
    oldPrice: 169000,
    discount: 26,
    description:
      `<div class="col-xs-12 description"><p style="text-align: justify;"><strong>“Chém<em>” </em> Tiếng Anh Không Cần Động Não</strong></p>
<p style="text-align: justify;"><em>“Phần lớn người Việt đều biết tiếng Anh NHIỀU HƠN HỌ NGHĨ, chỉ là họ chưa biết làm thế nào để đưa ý tưởng thành lời nói mà thôi!” </em>- Bino chém tiếng Anh</p>
<p style="text-align: justify;">Biết nhiều tiếng Anh nhưng không… nói được - điều này có đúng với bạn không? Sao 12 năm học tiếng Anh không giúp chúng ta xử lý được những cuộc trò chuyện thông thường?</p>
<p style="text-align: justify;">Sao điểm tiếng Anh trên lớp toàn 9, 10 nhưng gặp Tây lại ấp a ấp úng? Sao sở hữu điểm IELTS 7.0+ nhưng vẫn “sốc ngôn ngữ” khi ra nước ngoài?</p>
<p style="text-align: justify;">Nguyên nhân có lẽ nằm n...</p></div>`,
  },

  {
    id: 22,
    title: "Giáo Trình Chuẩn HSK 1 (Tái Bản 2023)",
    author: "Khương Lệ Bình, Vương Phương, Vương Phong, Lưu Lệ Bình",
    image: "https://cdn0.fahasa.com/media/catalog/product/9/7/9786043775662.jpg",
    points: 1903,
    publisher: "Tổng Hợp Thành Phố Hồ Chí Minh",
    price: 166320,
    oldPrice: 198000,
    discount: 16,
    description:
      `<div class="col-xs-12 description"><p style="text-align: justify;">Giáo Trình Chuẩn HSK 1</p>

<p style="text-align: justify;">Được chia thành 6 cấp độ với tổng cộng 18 cuốn, Giáo trình chuẩn HSK có những đặc điểm nổi bật sau:</p>

<p style="text-align: justify;">• Kết hợp thi cử và giảng dạy: Được biên soạn phù hợp với nội dung, hình thức cũng như các cấp độ của đề thi HSK thật, bộ sách này có thể được sử dụng đồng thời cho cả hai mục đích là giảng dạy tiếng Trung Quốc và luyện thi HSK. • Bố cục chặt chẽ và khoa học: Các điểm ngữ pháp được giải thích cặn kẽ, phần ngữ âm và chữ Hán được trình bày từ đơn giản đến phức tạp theo từng cấp độ.</p>

<p style="text-align: justify;">• Đề tài quen thuộc, nhiều tình huống thực tế: Bài học được thiết kế không quá dài và đề cập đến nhiều...</p></div>`,
  },

  {
    id: 23,
    title: "Giáo Trình Chuẩn HSK 1 - Sách Bài Tập (Tái Bản 2023)",
    author: "Khương Lệ Bình, Vương Phương, Vương Phong, Lưu Lệ Bình",
    image: "https://cdn0.fahasa.com/media/catalog/product/9/7/9786045893104.jpg",
    points: 1810,
    publisher: "Tổng Hợp Thành Phố Hồ Chí Minh",
    price: 132720,
    oldPrice: 158000,
    discount: 16,
    description:
      `<div class="col-xs-12 description"><p style="text-align: justify;"><strong>Giáo Trình Chuẩn HSK 1 - Sách Bài Tập</strong></p>
<p style="text-align: justify;">Được chia thành 6 cấp độ với tổng cộng 18 cuốn,<strong>Giáo trình chuẩn HSK</strong>có những đặc điểm nổi bật sau:</p>
<p style="text-align: justify;"><strong>Kết hợp thi cử và giảng dạy:</strong>Được biên soạn phù hợp với nội dung, hình thức cũng như các cấp độ của đề thi HSK thật, bộ sách này có thể được sử dụng đồng thời cho cả hai mục đích là giảng dạy tiếng Trung Quốc và luyện thi HSK.</p>
<p style="text-align: justify;"><strong>Bố cục chặt chẽ và khoa học:</strong>Các điểm ngữ pháp được giải thích cặn kẽ, phần ngữ âm và chữ Hán được trình bày từ đơn giản đến phức tạp theo từng cấp độ.<br> Đề tài quen thuộc, nhiều tình huống thực tế: Bài học đư...</p></div>`,
  },

  {
    id: 24,
    title: "Combo Sách Giáo Trình Chuẩn HSK 1 - Sách Bài Học Và Bài Tập (Bộ 2 Cuốn) (Tái Bản 2023)",
    author: "Khương Lệ Bình, Vương Phương, Vương Phong, Lưu Lệ Bình",
    image: "https://cdn0.fahasa.com/media/catalog/product/5/1/51b92528-97f4-4150-a761-c6cff5a60d98.jpg",
    points: 1733,
    publisher: "Tổng Hợp Thành Phố Hồ Chí Minh",
    price: 285317,
    oldPrice: 356000,
    discount: 19,
    description:
      `<div class="col-xs-12 description"><p style="text-align: justify;"><strong>Combo Sách Giáo Trình Chuẩn HSK 1 - Sách Bài Học Và Bài Tập&nbsp;(Bộ 2 Cuốn)</strong></p>
<p style="text-align: justify;"><strong>1. Giáo Trình Chuẩn HSK 1 - Sách Bài Tập</strong></p>
<p style="text-align: justify;">Được chia thành 6 cấp độ với tổng cộng 18 cuốn,<strong>Giáo trình chuẩn HSK</strong>có những đặc điểm nổi bật sau:</p>
<p style="text-align: justify;"><strong>Kết hợp thi cử và giảng dạy:</strong>Được biên soạn phù hợp với nội dung, hình thức cũng như các cấp độ của đề thi HSK thật, bộ sách này có thể được sử dụng đồng thời cho cả hai mục đích là giảng dạy tiếng Trung Quốc và luyện thi HSK.</p>
<p style="text-align: justify;"><strong>Bố cục chặt chẽ và khoa học:</strong>Các điểm ngữ pháp được giải thích cặn kẽ, phần ngữ &amp;acir...</p></div>`,
  },

  {
    id: 25,
    title: "Giáo Trình Chuẩn HSK 2 - Bài Học",
    author: "Khương Lệ Bình",
    image: "https://cdn0.fahasa.com/media/catalog/product/9/7/9786043775679_1.jpg",
    points: 935,
    publisher: "Tổng Hợp Thành Phố Hồ Chí Minh",
    price: 166320,
    oldPrice: 198000,
    discount: 16,
    description:
      `<div class="col-xs-12 description"><p style="text-align: justify;"><strong>Giáo Trình Chuẩn HSK 2 - Bài Học (Quét Mã QR Để Nghe File MP3)</strong></p>

<p style="text-align: justify;">Được chia thành 6 cấp độ với tổng cộng 18 cuốn, Giáo trình chuẩn HSK có những đặc điểm nổi bật sau:</p>

<p style="text-align: justify;">Kết hợp thi cử và giảng dạy: Được biên soạn phù hợp với nội dung, hình thức cũng như các cấp độ của đề thi HSK thật, bộ sách này có thể được sử dụng đồng thời cho cả hai mục đích là giảng dạy tiếng Trung Quốc và luyện thi HSK.</p>

<p style="text-align: justify;">Bố cục chặt chẽ và khoa học: Các điểm ngữ pháp được giải thích cặn kẽ, phần ngữ âm và chữ Hán được trình bày từ đơn giản đến phức tạp theo từng cấp độ.</p>

<p style="text-align: justify;">Đề tài quen thuộc, nhiều tình huống th...</p></div>`,
  },

  //FOREIGN BOOKS
  {      
    id: 26,
    title: "Atomic Habits: An Easy & Proven Way To Build Good Habits & Break Bad Ones",
    author: "James Clear",
    image: "https://cdn0.fahasa.com/media/catalog/product/9/7/9780593189641.jpg",
    points: 699,
    publisher: "Penguin Young Readers",
    price: 399000,
    oldPrice: 439000,
    discount: 9,
    description:
      `<div class="col-xs-12 description"><p style="text-align: justify;"><strong>Atomic Habits: An Easy &amp; Proven Way To Build Good Habits &amp; Break Bad Ones</strong></p>
<p style="text-align: justify;"><strong>THE PHENOMENAL INTERNATIONAL BESTSELLER - 1 MILLION COPIES SOLD</strong></p>
<p style="text-align: justify;"><strong>Transform your life with tiny changes in behaviour, starting now.</strong></p>
<p style="text-align: justify;">People think that when you want to change your life, you need to think big. But world-renowned habits expert James Clear has discovered another way. He knows that real change comes from the compound effect of hundreds of small decisions: doing two push-ups a day, waking up five minutes early, or holding a single short phone call.</p>
<p style="text-align: justify;"><strong>He calls them atomic habits.</strong></p>
<p style="text-align: justify;">In this ground-breaking book, Clears reveals exactly how these minuscule changes can grow into such life-altering outcomes. He uncovers a hand...</p></div>`,
  },

  {
    id: 27,
    title: "English Grammar in Use Book w Ans",
    author: "Raymond Murphy",
    image: "https://cdn0.fahasa.com/media/catalog/product/9/7/9781108430425.jpg",
    points: 671,
    publisher: "Cambridge University",
    price: 188100,
    oldPrice: 198000,
    discount: 5,
    description:
      `<div class="col-xs-12 description"><p style="text-align: justify;"><span>The world's best-selling grammar series for learners of English. English Grammar in Use Fourth edition is an updated version of the world's best-selling grammar title. It has a fresh, appealing new design and clear layout, with revised and updated examples, but retains all the key features of clarity and accessibility that have made the book popular with millions of learners and teachers around the world. This 'with answers' version is ideal for self-study.&nbsp;</span></p>...</div>`,
  },

  {
    id: 28,
    title: "Life BRE A2-B1: Student Book With Web App Code And Online Workbook 2nd Edition",
    author: "John Hughes",
    image: "https://cdn0.fahasa.com/media/catalog/product/i/m/image_195509_1_39154.jpg",
    points: 567,
    publisher: "Cengage",
    price: 247000,
    oldPrice: 260000,
    discount: 5,
    description:
      `<div class="col-xs-12 description"><p style="text-align: justify;"><strong>Life BRE A2-B1: Student Book With Web App Code And Online Workbook 2nd Edition</strong></p>

<p style="text-align: justify;">Life&nbsp;là bộ sách học tiếng Anh thú vị với 6 cấp độ dành cho người lớn. Dựa trên nội dung của National Geographic,&nbsp;Life&nbsp;biến quá trình học tập của bạn thành một cuộc hành trình tuyệt vời với những hình ảnh đẹp không thể cưỡng lại được.</p>

<p style="text-align: justify;">Các nội dung trong sách rất sống động và gần gũi vì được lấy ra từ những câu chuyện đời thực ở khắp mọi nơi trên thế giới, giúp cho bạn vừa có cơ hội khám phá nền văn hóa của nhiều quốc gia vừa học tiếng Anh. Kể từ năm 2015, Life đã được Bộ trưởng bộ Giáo dục chọn làm quyển sách giáo khoa Tiếng Anh cho 26 trường đại học với mục tiêu nâng cao k...</p></div>`,
  },

  {
    id: 29,
    title: "Oxford Advanced Learner's Dictionary: Paperback - 10th Edition (With 1 Year's Access To Both Premium Online And App)",
    author: "Diana Lea, Jennifer Bradbery",
    image: "https://cdn0.fahasa.com/media/catalog/product/9/7/9780194798488-dd.jpg",
    points: 501,
    publisher: "Oxford University Press",
    price: 560500,
    oldPrice: 590000,
    discount: 5,
    description:
      `<div class="col-xs-12 description"><p style="text-align:justify"><strong>Oxford Advanced Learner's Dictionary: Paperback - 10th Edition</strong></p>

<p style="text-align:justify">The Oxford Advanced Learner's Dictionary is the world's bestselling advanced level dictionary for learners of English.</p>

<p style="text-align:justify">Now in its 10th edition, the Oxford Advanced Learner's Dictionary, or OALD, is your complete guide to learning English vocabulary with definitions that learners can understand, example sentences showing language in use, and the new Oxford 3000 (TM) and Oxford 5000 (TM) word lists providing core vocabulary that every student needs to learn.</p>

<p style="text-align:justify">OALD is more than a dictionary. Take your English skills to the next level with extra resources and practice including the online iSpeaker and iWriter, or practise words anytime, anywhere with the Oxford Advanced Learner's Dictionary app.</p>...</div>`,
  },

  {
    id: 30,
    title: "Essential Grammar in Use Book with Answers Fahasa Reprint Edition: A Self-Study Reference and Practice Book for Elementary Learners of English",
    author: "Raymond Murphy",
    image: "https://cdn0.fahasa.com/media/catalog/product/i/m/img_7479.jpg",
    points: 490,
    publisher: "Cambridge University",
    price: 169100,
    oldPrice: 178000,
    discount: 5,
    description:
      `<div class="col-xs-12 description"><p style="text-align: justify;"><span>Essential Grammar in Use is a self-study reference and practice book for elementary-level learners (A1-B1), used by millions of people around the world. With clear examples, easy-to-follow exercises and answer key, the Fourth edition is perfect for independent study, covering all the areas of grammar that you will need at this level. The book has an easy-to-use format of two-page units with clear explanations of grammar points on the left-hand page, and practice exercises on the right. It also includes plenty of additional exercises and a Study Guide to help you find the grammar units you need to study.</span></p>...</div>`,
  },

  //THE LOAI KHAC
  {      
    id: 31,
    title: "Thư Cho Em",
    author: "Hoàng Nam Tiến",
    image: "https://cdn0.fahasa.com/media/catalog/product/8/9/8935235241015.jpg",
    points: 1342,
    publisher: "Hội Nhà Văn",
    price: 98000,
    oldPrice: 140000,
    discount: 30,
    description:
      `<div class="col-xs-12 description"><p style="text-align: justify;"><strong>Thư Cho Em</strong></p>

<p style="text-align: justify;">Cuốn sách này kể về mối tình vượt qua hai thế kỷ của thiếu tướng Hoàng Đan và vợ là đại biểu Quốc hội Nguyễn Thị An Vinh. Thương nhau từ thuở đôi mươi, nên duyên vợ chồng, họ cùng nhau đi qua những mốc lịch sử lớn lao của dân tộc: chiến thắng Điện Biên Phủ 1954, Khe Sanh 1968, Quảng Trị 1972, Sài Gòn 1975, biên giới phía Bắc 1979 và 1984.</p>

<p style="text-align: justify;">Vị tướng trận đi khắp các chiến trường ác liệt, người vợ ở nhà nuôi con và phấn đấu sự nghiệp, thời gian họ ở bên nhau ít ỏi vô cùng. Vì thế họ gửi gắm tâm tình qua những lá thư băng qua bom đạn, vượt các biên giới. Những lá thư trở thành sợi dây buộc chặt tình yêu của hai c...</p></div>`,
  },

  {
    id: 32,
    title: "Không Diệt Không Sinh Đừng Sợ Hãi (Tái Bản 2022)",
    author: "Thích Nhất Hạnh",
    image: "https://cdn0.fahasa.com/media/catalog/product/8/9/8935278607311.jpg",
    points: 1095,
    publisher: "Thế Giới",
    price: 77000,
    oldPrice: 110000,
    discount: 30,
    description:
      `<div class="col-xs-12 description"><p style="text-align: justify;">Nhiều người trong chúng ta tin rằng cuộc đời của ta bắt đầu từ lúc chào đời và kết thúc khi ta chết. Chúng ta tin rằng chúng ta tới từ cái Không, nên khi chết chúng ta cũng không còn lại gì hết. Và chúng ta lo lắng vì sẽ trở thành hư vô.</p>

<p style="text-align: justify;">Bụt có cái hiểu rất khác về cuộc đời. Ngài hiểu rằng sống và chết chỉ là những ý niệm không có thực. Coi đó là sự thực, chính là nguyên do gây cho chúng ta khổ não. Bụt dạy không có sinh, không có diệt, không tới cũng không đi, không giống nhau cũng không khác nhau, không có cái ngã thường hằng cũng không có hư vô. Chúng ta thì...</p></div>`,
  },

  {
    id: 33,
    title: "Luật Tâm Thức - Vũ Trụ Nhất Nguyên Luận - Tặng Kèm Bookmark",
    author: "Ngô Sa Thạch",
    image: "https://cdn0.fahasa.com/media/catalog/product/b/i/bia-mem_luat-tam-thuc-vu-tru-nhat-nguyen-luan.jpg",
    points: 1029,
    publisher: "Lao Động",
    price: 239040,
    oldPrice: 288000,
    discount: 17,
    description:
      `<div class="col-xs-12 description"><p style="text-align: justify;"><strong>Luật Tâm Thức - Vũ Trụ Nhất Nguyên Luận</strong></p>
<p style="text-align: justify;"><strong>Hãy hiểu luật tâm thức để thực sự thức tỉnh trong “thời đại tỉnh thức”</strong>.</p>
<p style="text-align: justify;">Con người, dù là theo phái duy vật hay duy tâm, ăn chay hay ăn mặn, có tìm hiểu tâm linh hay không,... thì điều cuối cùng chúng ta hướng đến vẫn giống nhau - hạnh phúc, viên mãn, không đói khổ. Vậy nên có thể nói cuộc sống là một cuộc truy cầu hạnh phúc. Nhưng không phải ai cũng có một hành trình thuận lợi, có thể đến đích an toàn, thậm chí rất nhiều người đã gục ngã thê thảm, vì đa phần không vượt qua được những trở ngại tâm thức, cũng là bài học lớn nhất t...</p></div>`,
  },

  {
    id: 34,
    title: "Sách Giáo Khoa Bộ Lớp 2 - Chân Trời Sáng Tạo - Sách Bài Tập (Bộ 11 Cuốn) (Chuẩn)",
    author: "Bộ Giáo Dục Và Đào Tạo",
    image: "https://cdn0.fahasa.com/media/catalog/product/3/3/3300000026961.jpg",
    points: 979,
    publisher: "Giáo Dục Việt Nam",
    price: 139000,
    oldPrice: 139000,
    discount: 0,
    description:
      `<div class="col-xs-12 description"><p style="text-align: justify;"><strong>Sách Giáo Khoa Bộ Lớp 2 - Chân Trời Sáng Tạo - Sách Bài Tập (Bộ 11 Cuốn) (2023)</strong></p>
<p style="text-align: justify;">Bao Gồm:</p>
<table border="" cellspacing="" cellpadding=""><colgroup><col width=""> <col width=""> </colgroup>
<tbody>
<tr>
<td dir="" width="" height=""><strong>STT</strong></td>
<td dir="" width=""><strong>Tên hàng</strong></td>
</tr>
<tr>
<td height="">1</td>
<td>Tập viết 2/1 (Chân Trời Sáng Tạo) (2023)</td>
</tr>
<tr>
<td height="">2</td>
<td>Tập viết 2/2 (Chân Trời Sáng Tạo) (2023)</td>
</tr>
<tr>
<td height="">3</td>
<td>VBT Tiếng Việt 2/1 (Chân Trời Sáng Tạo) (2023)</td>
</tr>
<tr>
<td height="">4</td>
<td>VBT Tiếng Việt 2/2 (Chân Trời Sáng Tạo) (2023)</td>
</tr>
<tr>
<td height="">5</td>
<td>VBT Đạo đức 2 (Chân Trời Sáng Tạo) (2023)</td>
</tr>
<tr>
<td height="">6<!--...--></td></tr></tbody></table></div>`,
  },

  {
    id: 35,
    title: "Toán 9 - Tập 1 (Cánh Diều) (Chuẩn)",
    author: "Nhiều Tác Giả",
    image: "https://cdn0.fahasa.com/media/catalog/product/9/7/9786045498347.jpg",
    points: 924,
    publisher: "Đại Học Sư Phạm",
    price: 22000,
    oldPrice: 22000,
    discount: 0,
    description:
      `<div class="col-xs-12 description"><p style="text-align: justify;"><strong>Toán 9 - Tập 1 (Cánh Diều)</strong></p>

<p style="text-align: justify;">Bộ sách Cánh Diều là bộ sách thứ nhất (đầu tiên) góp phần thực hiện chủ trương xã hội hoá sách giáo khoa, xoá bỏ cơ chế độc quyền trong lĩnh vực xuất bản - in - phát hành sách giáo khoa.</p>

<p style="text-align: justify;">Tác giả bộ sách Cánh Diều là những nhà giáo, nhà khoa học tâm huyết và giàu kinh nghiệm. Trong đó, có tác giả là Tổng Chủ biên Chương trình Giáo dục phổ thông 2018 và nhiều tác giả là thành viên Ban Phát triển Chương trình tổng thể, Ban Phát triển các chương trình môn học thành lập theo Quyết định của Bộ trưởng Bộ GDĐT.</p>

</div>`,
  },
];

const booksPerTab: { [key: number]: Book[] } = {};

tabs.forEach(tab => {
  booksPerTab[tab.id] = books.slice(tab.id * 5, tab.id * 5 + 5);
});

const BookList: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [selectedBook, setSelectedBook] = useState<Book>(booksPerTab[0][0]);

  const handleTabClick = (tabId: number) => {
    setActiveTab(tabId);
    setSelectedBook(booksPerTab[tabId][0]);
  };

  return (
    <div className="p-5">
      <div className="flex items-center mb-1 bg-black p-3 rounded-t-lg gap-3">
        <span className="text-xl font-semibold text-white">
          Bảng xếp hạng bán chạy tuần
        </span>
      </div>

      {/* Tabs */}
      <div className="flex border-b mb-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={`py-2 px-4 text-sm font-medium transition-colors duration-300 ${
              activeTab === tab.id
                ? "border-b-2 border-red-500 text-red-500"
                : "text-gray-500 hover:text-red-500"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Book List */}
      <div className="flex flex-col md:flex-row">
        <div className="flex-none md:w-full lg:w-1/3 md:border-r p-4">
          {booksPerTab[activeTab].map((book, index) => (
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