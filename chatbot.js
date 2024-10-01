(function () {
  const Chatbot = {
    init: function () {
      // Chatbot Button
      const button = document.createElement("button");
      button.style.position = "fixed";
      button.style.bottom = "16px";
      button.style.right = "16px";
      button.style.width = "75px";
      button.style.height = "75px";
      button.style.border = "none";
      button.style.borderRadius = "50%";
      button.style.cursor = "pointer";
      button.style.zIndex = "9999";
      button.style.backgroundSize = "cover";
      button.style.backgroundPosition = "center";
      button.style.backgroundImage = "url('https://res.cloudinary.com/deh3lmenn/image/upload/v1727747370/wally-modified_jm0flm.png')";
      button.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.3)";
      document.body.appendChild(button);

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
      iframe.src = "https://turai-nsml2.ondigitalocean.app/bot/13c5f751f01b0cada63a33acf445b9d0144979e8dad09738790d46bac87650ce";
      iframe.style.width = "100%";
      iframe.style.height = "100%";
      iframe.style.border = "none";
      iframe.style.borderRadius = "8px";
      
      // Add these lines to hide the scroll bar
      iframe.style.overflow = "hidden";  
      
      iframeContainer.appendChild(iframe);

      // Speech Bubble
      const bubble = document.createElement("div");
      bubble.style.position = "fixed";
      bubble.style.bottom = "100px";
      bubble.style.right = "16px";
      bubble.style.width = "250px";
      bubble.style.backgroundColor = "white";
      bubble.style.padding = "12px";
      bubble.style.borderRadius = "8px";
      bubble.style.boxShadow = "0 0 15px rgba(0, 0, 0, 0.3)";
      bubble.style.fontFamily = "'Roboto', sans-serif";
      bubble.style.fontSize = "14px";
      bubble.style.color = "#333";
      bubble.style.opacity = "0"; // Start hidden
      bubble.style.transition = "opacity 1s ease-in"; // Fade-in effect
      bubble.style.zIndex = "9997";
      bubble.innerHTML = `
        Got a burning question? Or just bored?<br>
        I'm Wally. Ask me anything - I'm basically Russ and Joey's brain, but faster.
        <div style="display:block; text-align:right; margin-top:10px; cursor:pointer; width:24px; height:24px; background-color: #f8d7da; border-radius: 50%; position: relative;">
          <span style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: #c82333; font-weight: bold;">&times;</span>
        </div>
      `;
      document.body.appendChild(bubble);

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
      button.addEventListener("click", function () {
        if (iframeContainer.style.display === "none") {
          iframeContainer.style.display = "block";
          hideBubbleInstantly();
        } else {
          iframeContainer.style.display = "none";
          fadeInBubble();
        }
      });
    }
  };

  window.Chatbot = Chatbot;
})();