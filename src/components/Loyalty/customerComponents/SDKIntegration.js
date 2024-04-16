
import React from "react";
import { useStyles } from "../SDK";

function SDKIntegration() {
  const classes = useStyles();

  return (
    <div className={classes.leftContent}>
      <div className={classes.SDKContents}>
        <h3>Khả năng tương thích</h3>
        <p>SDK IOS của FPT tương thích với các nên tảng sau:</p>
        <ul>
          <li>iOS 9+ (iPhone, iPod, iPad)</li>
          <li>tvOS 9+ (Apple TV)</li>
          <li>Phù hợp với mạng IPv6 DNS64/NAT64 của Apple</li>
        </ul>
      </div>
      <div className={classes.SDKContents}>
        <h3>Tích hợp FPT SDKs IOS</h3>
        <p>Quy trình cài đặt và tích hợp SDK yêu cầu người quản lí sản phẩm và nhà phát triển thiết bị di động phải làm việc cùng nhau. Trước khi tích hợp SDK với ứng dụng của bạn, hãy xem lại tất cả các tác vụ tích hợp và xem xét các chức năng mà bạn muốn có trong ứng dụng của mình</p>
        <h3>Thiết lập AppDelegate.h</h3>
        <p>Đưa tiêu đề vào Plugin của dự án Xcode của ứng dụng. FPTHappyPluginManager.h AppDelegate.h</p>
        <p>Hiển thị tệp: AppDelegate.h</p>
        <h3>Khởi tạo Plugin</h3>
        <p>Đối với dự án Swift, hãy mở tệp, nhập plugin và thêm chức năng trong đoạn mã sau. AppDelegate.swiftFPTHappy_plugin</p>
        <p>Đối với dự án Objective-C, hãy mở tệp và thêm hàm sau vào lớp .AppDelegate.m AppDelegate</p>
        <p>Hàm trợ giúp tạo một đối tượng của lớp thiết lập khóa API và các cấu hình SDK khác. FPTHappyConfig</p>
        <ul>
          <li>Khởi tạo plugin Blueshift Flutter bằng cách sử dụng phương thức lớp .FPTPluginHappyManagerinitialisePluginWithConfig: autoIntegrate:</li>
          <li>Chuyển đối tượng cấu hình đã tạo và chuyển sang chọn tham gia để tích hợp tự động .autoIntegrate YES </li>
        </ul>
      </div>
    </div>
  )
}

export default SDKIntegration;