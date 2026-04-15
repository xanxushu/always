const downloadLink = document.querySelector("[data-download-link]");

if (downloadLink) {
  downloadLink.addEventListener("click", (event) => {
    if (downloadLink.getAttribute("href") === "#") {
      event.preventDefault();
      window.alert(
        "APK 下载链接还没有配置。后续你可以把这个按钮替换成 GitHub Release、网盘或官网安装包地址。",
      );
    }
  });
}
