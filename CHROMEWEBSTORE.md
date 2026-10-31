# Hồ Sơ Xuất Bản Chrome Web Store — Thủ Thuật Việt (Manifest V3)

## 1. Thông tin niêm yết (Store Listing)
- **Tên tiện ích:** Thủ Thuật Việt — Trợ Lý Công Sở & AI Tốc Hành 60s
- **Mô tả ngắn (132 ký tự):** Tra cứu giải pháp 30s, kho Prompt AI tiếng Việt 1-chạm, sửa lỗi công thức Excel (, ⇄ ;), tính lương Gross-Net & tạo mã QR.
- **Danh mục:** Productivity (Năng suất / Công cụ Văn phòng)
- **Ngôn ngữ:** Tiếng Việt (`vi`)

## 2. Giải trình Quyền hạn (Permissions Justification)
- **`sidePanel`**: Hiển thị giao diện thanh bên (Side Panel) giúp người dùng tra cứu công thức Excel, câu lệnh hệ thống và Prompt AI song song với trang bảng tính hoặc tài liệu đang làm việc mà không bị che khuất màn hình.
- **`storage`**: Lưu trữ cục bộ (`chrome.storage.local`) tab đang mở và thông số cấu hình gần nhất của người dùng. Không thu thập hay gửi dữ liệu cá nhân ra máy chủ bên ngoài.
- **`contextMenus`**: Cho phép người dùng bôi đen công thức Excel hoặc thuật ngữ kỹ thuật trên trình duyệt và bấm chuột phải để chuyển nhanh vào công cụ sửa dấu phân cách (`,` ⇄ `;`) hoặc tra cứu trong Side Panel.
- **`host_permissions` (`https://thuthuatviet.com/*`)**: Đồng bộ kết quả tìm kiếm trực tiếp với kho 9.449+ bài viết hướng dẫn thực chiến trên `thuthuatviet.com`.

## 3. Hướng dẫn Cài đặt Thử nghiệm (Load Unpacked)
1. Mở trình duyệt Google Chrome / Microsoft Edge / Brave, truy cập `chrome://extensions/`.
2. Bật công tắc **Developer mode (Chế độ dành cho nhà phát triển)** ở góc phải trên cùng.
3. Bấm **Load unpacked (Tải tiện ích đã giải nén)** và chọn thư mục `e:\thuthuatviet.com\chrome-extension`.
4. Bấm vào biểu tượng **⚡ Thủ Thuật Việt** trên thanh công cụ để mở ngay Side Panel thực chiến!
