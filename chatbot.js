(function () {
  const Chatbot = {
    init: function (options) {
      const iframeSrc = options.iframeSrc || "https://default-iframe-url.com";
      const buttonImage = options.buttonImage || "https://res.cloudinary.com/deh3lmenn/image/upload/v1727747370/wally-modified_jm0flm.png";
      const popupMessage = options.popupMessage || "I'm your default guide!";

      // Chatbot Clickable Image
      const buttonContainer = document.createElement("div");
      buttonContainer.style.position = "fixed";
      buttonContainer.style.bottom = "16px";
      buttonContainer.style.right = "16px";
      buttonContainer.style.width = "75px";
      buttonContainer.style.height = "75px";
      buttonContainer.style.cursor = "pointer";
      buttonContainer.style.zIndex = "9999";
      buttonContainer.style.borderRadius = "50%"; // Ensure the image container is circular
      buttonContainer.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.3)";
      document.body.appendChild(buttonContainer);

      const buttonImageElement = document.createElement("img");
      buttonImageElement.src = buttonImage;
      buttonImageElement.style.width = "100%";
      buttonImageElement.style.height = "100%";
      buttonImageElement.style.borderRadius = "50%"; // Ensure the image is circular
      buttonImageElement.style.objectFit = "cover";
      buttonContainer.appendChild(buttonImageElement);

      // Chatbot Window
      const iframeContainer = document.createElement("div");
      iframeContainer.style.position = "fixed";
      iframeContainer.style.bottom = "100px";
      iframeContainer.style.right = "16px";
      iframeContainer.style.width = "400px";
      iframeContainer.style.height = "600px";
      iframeContainer.style.display = "none";
      iframeContainer.style.zIndex = "9998";
      iframeContainer.style.borderRadius = "8px";
      iframeContainer.style.boxShadow = "0 0 15px rgba(0, 0, 0, 0.3)";
      document.body.appendChild(iframeContainer);

      const iframe = document.createElement("iframe");
      iframe.src = iframeSrc;
      iframe.style.width = "100%";
      iframe.style.height = "100%";
      iframe.style.border = "none";
      iframe.style.borderRadius = "8px";
      iframeContainer.appendChild(iframe);

      // Fancy Speech Bubble
      const bubble = document.createElement("div");
      bubble.style.display = "block";
      bubble.style.position = "fixed";
      bubble.style.bottom = "100px";
      bubble.style.right = "16px";
      bubble.style.width = "250px";
      bubble.style.background = "linear-gradient(135deg, white 0%, #333333 100%)";
      bubble.style.display = "block";
      bubble.style.position = "fixed";
      bubble.style.bottom = "100px";
      bubble.style.right = "16px";
      bubble.style.width = "250px";
      bubble.style.background = "white"; // Keep background white
      bubble.style.padding = "24px"; // Increased padding
      bubble.style.borderRadius = "12px";
      bubble.style.boxShadow = "0 0 20px rgba(255, 105, 135, 0.6)";
      bubble.style.fontFamily = "'Roboto', sans-serif";
      bubble.style.fontSize = "16px"; // Larger font size
      bubble.style.color = "#333";
      bubble.style.opacity = "0";
      bubble.style.zIndex = "9997";
      bubble.style.transition = "all 0.3s ease";
      bubble.innerHTML = `
        ${popupMessage}
        <div style="
          display: block;
          cursor: pointer;
          width: 28px;
          height: 28px;
          background-color: #ff7e79;
          border-radius: 50%;
          position: absolute;
          bottom: 12px;
          right: 12px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 10px rgba(255, 105, 135, 0.3);
        " 
          onmouseover="this.style.transform='scale(1.2)'; this.style.boxShadow='0 6px 12px rgba(255, 105, 135, 0.5)';" 
          onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='0 4px 10px rgba(255, 105, 135, 0.3)';">
          <span style="
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: white;
            font-weight: bold;
            font-size: 18px;
          ">&times;</span>
        </div>
      `;
      document.body.appendChild(bubble);

      // Keyframe Animation (CSS via JS)
      const style = document.createElement("style");
      style.innerHTML = `
        @keyframes bounceIn {
          0% {
            transform: scale(0.8);
            opacity: 0;
          }
          60% {
            transform: scale(1.05);
            opacity: 0.9;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
      `;
      document.head.appendChild(style);

      // Apply Bounce-In Animation
      bubble.style.animation = "bounceIn 0.7s ease-in-out forwards";

      // Functions to Show/Hide the Bubble
      function fadeInBubble() {
        bubble.style.opacity = "0";
        bubble.style.display = "block";
        setTimeout(() => {
          bubble.style.opacity = "1";
        }, 100);
      }

      function hideBubbleInstantly() {
        bubble.style.opacity = "0";
        setTimeout(() => {
          bubble.style.display = "none";
        }, 100);
      }

      // Initial Fade-In for the Bubble
      setTimeout(fadeInBubble, 1000);

      const closeBubble = bubble.querySelector("div");
      closeBubble.addEventListener("click", function () {
        hideBubbleInstantly();
      });

      // Toggle Between Chatbot and Bubble
      buttonContainer.addEventListener("click", function () {
        if (iframeContainer.style.display === "none") {
          iframeContainer.style.display = "block";
          hideBubbleInstantly();
        } else {
          iframeContainer.style.display = "none";
          fadeInBubble();
        }
      });
    },
  };

  window.Chatbot = Chatbot;
})();
