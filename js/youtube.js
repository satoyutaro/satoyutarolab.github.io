document.addEventListener("DOMContentLoaded", function () {
  const thumbnails = document.querySelectorAll(".video-thumbnail");

  thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener("click", function () {
      // data-id は親要素 (.articles_article) にある
      const videoId = this.parentElement.dataset.id;

      const iframe = document.createElement("iframe");
      iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
      iframe.frameBorder = "0";
      iframe.allow =
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
      iframe.allowFullscreen = true;
      iframe.style.width = "100%";
      iframe.style.height = "100%";
      iframe.style.position = "absolute";
      iframe.style.top = "0";
      iframe.style.left = "0";

      // サムネイルを置き換え
      this.innerHTML = "";
      this.appendChild(iframe);
    });
  });
});
