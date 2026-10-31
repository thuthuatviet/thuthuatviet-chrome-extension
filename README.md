# ⚡ Thủ Thuật Việt Chrome Extension (v2.0) — Trợ Lý Công Sở & AI Tốc Hành 60s

<p align="center">
  <img src="icons/icon-128.png" alt="Thủ Thuật Việt Logo" width="96" height="96" />
</p>

<p align="center">
  <strong>Giải Pháp Nhanh — Công Cụ Thực — Trải Nghiệm Chuẩn — 100% Miễn Phí</strong><br />
  Tiện ích mở rộng Google Chrome (Manifest V3) tích hợp Side Panel thông minh giúp dân văn phòng, kế toán, lập trình viên và người dùng công nghệ tra cứu giải pháp, sửa lỗi Excel, tính thuế VAT, viết Prompt AI và dọn rác máy tính trong dưới 60 giây.
</p>

<p align="center">
  <a href="https://thuthuatviet.com/"><img src="https://img.shields.io/badge/Official_Website-thuthuatviet.com-10B981?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Website" /></a>
  <a href="https://thuthuatviet.com/cong-cu/"><img src="https://img.shields.io/badge/Micro_Tools-30_Công_Cụ_Thực_Chiến-0284C7?style=for-the-badge" alt="Tools" /></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-F59E0B?style=for-the-badge" alt="License MIT" /></a>
  <img src="https://img.shields.io/badge/Manifest-V3-6366F1?style=for-the-badge" alt="Manifest V3" />
</p>

---

## 🌟 Giới Thiệu

Trong công việc hàng ngày tại văn phòng và học tập, bạn thường xuyên gặp phải những rắc rối "nhỏ nhưng ức chế":
- Công thức Excel copy trên mạng về bị lỗi `#VALUE!` do xung đột dấu phẩy (`,`) và chấm phẩy (`;`) trên máy tính Việt Nam.
- Chiều thứ Sáu lúc 16h55 cần bóc tách gấp hóa đơn thanh toán đã có thuế VAT 8% hoặc 10% để làm thủ tục thanh toán.
- Đau đầu không biết viết câu lệnh Prompt AI ra sao để ChatGPT, Claude hay DeepSeek dịch chuẩn ngữ cảnh hoặc viết code chính xác.
- Build máy tính chơi game / làm đồ họa không biết chọn nguồn PSU bao nhiêu Watt để không bị sụt áp cháy nổ.

**Thủ Thuật Việt Extension** ra đời để giải quyết triệt để mọi bài toán trên trực tiếp ngay trong thanh bên (**Chrome Side Panel**) của bạn — không cần mở thêm tab mới, không cần đăng nhập tài khoản và dữ liệu xử lý **100% Client-Side** bảo mật tuyệt đối!

* Khám phá nền tảng đầy đủ với hơn 9.800+ bài viết thủ thuật thực chiến tại: **[https://thuthuatviet.com](https://thuthuatviet.com)**
* Trải nghiệm trực tiếp trọn bộ 30 công cụ trực tuyến tại: **[https://thuthuatviet.com/cong-cu/](https://thuthuatviet.com/cong-cu/)**

---

## 🛠️ Danh Mục 11 Tiện Ích Tích Hợp Sẵn Trong Side Panel

| STT | Tên Tiện Ích | Chức Năng Chính (Xử Lý Tức Thì 0 Giây) |
| :---: | :--- | :--- |
| **01** | **Sửa Dấu Hàm Excel & Đọc Số Tiền VNĐ** | Tự động chuyển đổi dấu `,` ⇄ `;` không làm hỏng chuỗi nháy kép; Đọc số tiền thành chữ tiếng Việt chuẩn kế toán. |
| **02** | **Tách Họ & Tên Tiếng Việt Excel** | Tách cột Họ Tên thành 2 hoặc 3 cột chuẩn A-Z, xử lý chuẩn xác họ ghép Việt Nam (Nguyễn Trần, Lê Hoàng...). |
| **03** | **Lọc Trùng & Gộp Danh Sách Gửi Zalo/Mail** | Loại bỏ trùng lặp, chuẩn hóa danh sách số điện thoại, gộp chuỗi ngăn cách bằng dấu phẩy để dán vào Outlook/Zalo. |
| **04** | **Tính Nhanh Lương Gross ⇄ Net 2026** | Tính chi tiết BHXH (8%), BHYT (1.5%), BHTN (1%), giảm trừ gia cảnh 11 triệu + 4.4 triệu/người và thuế TNCN lũy tiến. |
| **05** | **ChatGPT Dịch Thuật Đa Ngôn Ngữ** | Lắp ráp Prompt dịch chuyên sâu (Anh, Trung, Nhật, Hàn ⇄ Việt) chuẩn văn phong bản xứ, giữ nguyên cấu trúc code/markdown. |
| **06** | **Tạo Mã VietQR & QR Wi-Fi 1-Chạm** | Tạo mã VietQR chuẩn Napas 247 tự điền số tiền, lời nhắn chuyển khoản; Tạo chuỗi QR kết nối Wi-Fi quán cafe không cần gõ pass. |
| **07** | **Lệnh Dọn Rác & Tối Ưu Windows 11/10** | Sinh file lệnh PowerShell / CMD an toàn dọn dẹp sạch sẽ ổ C, Temp, Prefetch, Windows Update rác giải phóng 10GB - 30GB. |
| **08** | **Tạo Link Chat Zalo Nhanh Không Cần Kết Bạn** | Tạo link `zalo.me/sdt` gửi nhanh tin nhắn, lọc và tách danh sách số điện thoại khách hàng sạch bóng. |
| **09** | **Tính Lãi Vay Ngân Hàng & Lịch Trả Nợ** | Bảng tính lãi suất theo dư nợ giảm dần hoặc dư nợ gốc đều, tính tiền gốc + lãi phải trả hàng tháng. |
| **10** | **Tính Nguồn PSU & Thẩm Định Bottleneck CPU-GPU** | Tính công suất nguồn an toàn (chống sụt áp) và thẩm định tỷ lệ nghẽn cổ chai ở màn hình 1080p, 2K, 4K khi build PC. |
| **11** | **Máy Tính Thuế VAT (8% / 10%) & Tra Cứu HĐĐT** | Bóc tách tiền hàng chưa thuế và thuế GTGT từ tổng tiền thanh toán (Gross ➔ Net); Thẩm định ký hiệu hóa đơn TT 78 (1C26TAA). |

---

## 🚀 Hướng Dẫn Cài Đặt (Developer Mode — 3 Bước Dễ Dàng)

Tiện ích tương thích 100% với tất cả các trình duyệt sử dụng nhân Chromium: **Google Chrome, Microsoft Edge, Brave, Opera, Cốc Cốc**.

1. **Bước 1: Tải mã nguồn về máy**
   * Bấm nút **Code ➔ Download ZIP** trên GitHub này (hoặc tải trực tiếp file nén từ website [https://thuthuatviet.com/thuthuatviet-chrome-extension-v2.0.zip](https://thuthuatviet.com/thuthuatviet-chrome-extension-v2.0.zip)).
   * Giải nén file ZIP vào một thư mục trên máy tính của bạn (Ví dụ: `D:\thuthuatviet-extension`).
2. **Bước 2: Mở trang quản lý Tiện ích trên trình duyệt**
   * Truy cập đường dẫn: `chrome://extensions/` (trên Chrome/Cốc Cốc) hoặc `edge://extensions/` (trên Microsoft Edge).
   * Bật công tắc **Developer mode (Chế độ dành cho nhà phát triển)** ở góc trên bên phải màn hình.
3. **Bước 3: Tải tiện ích vào trình duyệt**
   * Bấm nút **Load unpacked (Tải tiện ích đã giải nén)** ở góc trái.
   * Chọn thư mục tiện ích vừa giải nén.
   * 🎉 **Xong!** Biểu tượng **⚡ Thủ Thuật Việt** sẽ xuất hiện trên thanh công cụ. Bấm vào để mở ngay Side Panel làm việc song song cực tiện lợi!

---

## 🔒 Cam Kết Bảo Mật & Đạo Đức Công Nghệ

- **100% Client-Side:** Mọi phép tính toán (công thức Excel, lương, thuế VAT, danh sách tên...) được thực hiện trực tiếp trong trình duyệt máy bạn bằng JavaScript thuần, không gửi bất kỳ dữ liệu nào về máy chủ bên ngoài.
- **Không Quảng Cáo, Không Theo Dõi:** Hoàn toàn miễn phí, không chứa link rút gọn kiếm tiền độc hại (`adf.ly`, `link1s`), không phần mềm rác hay mã độc đào tiền ảo.
- **Hỗ trợ Chuẩn Việt Nam:** Tối ưu hóa sâu sắc cho bộ gõ tiếng Việt (**Unikey, EVKey**), múi giờ **GMT+7**, đơn vị **VNĐ** và các quy định pháp lý hành chính nhà nước (**Nghị định 30/2020/NĐ-CP, Nghị định 72/2024/NĐ-CP**).

---

## 🌐 Hệ Sinh Thái 8 Website Vệ Tinh Đồng Hành

Dự án vinh dự đồng hành cùng mạng lưới 8 công cụ trực tuyến phục vụ cộng đồng Việt Nam:

1. 📊 **[TinhLuongGrossNet.vn](https://tinhluonggrossnet.vn)** — Bảng tính lương Gross Net chuẩn & Tính thuế TNCN tự động 1-click.
2. 🎲 **[VongQuayMayMan.web.app](https://vongquaymayman.web.app)** — Tạo vòng quay may mắn online miễn phí & bốc thăm ngẫu nhiên không quảng cáo.
3. 🎨 **[QuickPSD.com](https://quickpsd.com)** — Kho mẫu PSD chuẩn chất lượng cao, Mockup & Font chữ Việt hóa miễn phí.
4. 🗓️ **[LichAmPro.com](https://lichampro.com)** — Tra cứu lịch vạn niên, ngày tốt khai trương & phong thủy bàn làm việc.
5. 🎬 **[DaoDaoReview.com](https://daodaoreview.com)** — Góc Review phim & phân tích điện ảnh chuyên sâu không spoil.
6. 📱 **[TaoMaQR.online](https://taomaqr.online)** — Tạo mã QR miễn phí không hết hạn, QR WiFi & VietQR thanh toán 1-chạm.
7. 🍲 **[AnGiCungDuoc.food](https://angicungduoc.food)** — Vòng quay hôm nay ăn gì & gợi ý món ngon văn phòng 3 miền.
8. 🏔️ **[SapaView.vn](https://sapaview.vn)** — Xem thời tiết & camera Sapa trực tiếp, cẩm nang du lịch tự túc.

---

## 📄 Bản Quyền & Giấy Phép (License)

Dự án được phát hành theo giấy phép mã nguồn mở **[MIT License](LICENSE)**. 

Bản quyền thuộc về **[Thủ Thuật Việt (thuthuatviet.com)](https://thuthuatviet.com)** © 2026. Mọi đóng góp, báo lỗi (Issues) và Pull Requests từ cộng đồng nhà phát triển đều được chào đón nồng nhiệt!
