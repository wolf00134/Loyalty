import React from "react";
import { useStyles } from "../SDK";

function SDKIntro() {
  const classes = useStyles();

  return (
    <div className={classes.contentWrapper}>
      <div className={classes.leftContent}>
        <div className={classes.SDKContents}>
          <h3>Giới thiệu FPT SDK</h3>
          <p>Bài viết này cung cấp thông tin vềHappy SDK IOS của FPT và các tính năng</p>
          <p>Sử dụng Happy SDK dành cho IOS của chúng tôi để tích hợp ứng dụng IOS của bạn với nền tảng xử lí gần thời gian thực của chúng tôi và gửi thông báo phong phú và được cá nhân hóa tới người dùng ứng dụng của bạn</p>
          <h3>Bản phát hành FPT SDKs</h3>
          <p>FPT SDKs IOS của chúng tôi có thể:</p>
          <ul>
            <li>Hiển thị thông báo đẩy. Nó hỗ trợ định dạng sau:</li>
            <ul>
              <li>Biểu ngữ và thông báo trên màn hình khóa</li>
              <li>Thông báo bằng hình ảnh và GIF</li>
              <li>Thông báo bằng các nút hành động</li>
              <li>Thông báo với các trang đích tùy chỉnh</li>
            </ul>
            <li>Gửi dữ liệu tùy chỉnh tới ứng dụng khi người dùng nhấn vào thông báo</li>
            <li>Gửi tin nhắn trong ứng dụng</li>
            <li>Gửi JSON tùy chỉnh đến ứng dụng</li>
            <li>Cung cấp số liệu thống kê toàn diện như số lượng thông báo được nhấp vào, đơn đặt hàng thông qua thông báo và doanh thu được tạo ra từ các chiến dịch chạy bằng thông báo đẩy</li>
            <li>Theo dõi số lượng gỡ cài đặt hằng ngày</li>
            <li>Tích hợp với các sự kkien65 cơ bản như xác thực, sản oha6m3 đã xem, sản phẩm được thêm vào giỏ hàng, thanh toán và mua hàng</li>
            <li>Dễ dàng tích hợp với ứng dụng của bạn để ứng dụng có thể gửi các sự kiện tùy chỉnh có liên quan từ ứng dụng của bạn đến nền tảng của chúng tôi</li>
            <li>Gửi các sự kiện nguyên bản theo thời gian thực hoặc theo đợt để đảm bảo hiệu suất mạng và pin ở mức tối ưu</li>
          </ul>
          <p><b>Lưu ý: </b>SDK IOS không theo dõi các sự kiện app_install</p>
          <h3>Version FPT SDKs IOS</h3>
        </div>
      </div>
    </div>
  )
}

export default SDKIntro;