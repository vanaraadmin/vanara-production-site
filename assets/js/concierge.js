(() => {
      /* =======================================================
         CONFIGURATION
         ======================================================= */

      const MAKE_WEBHOOK_URL =
        "https://hook.eu1.make.com/gwgrpf1nq6sicfn22oxbf39b10uui0lm";

      const CHAT_OPEN_HOUR = 8;
      const CHAT_CLOSE_HOUR = 20;
      const BANGKOK_TIME_ZONE = "Asia/Bangkok";

      const INTRO_DURATION_MS = 7000;

      const ONLINE_PLACEHOLDER = "Write your message…";

      const launcher = document.getElementById("launcher");
      const introLauncher = document.getElementById("introLauncher");
      const compactLauncher = document.getElementById("compactLauncher");

      const chatWindow = document.getElementById("chatWindow");
      const closeButton = document.getElementById("closeButton");

      const messages = document.getElementById("messages");
      const messageInput = document.getElementById("messageInput");
      const sendButton = document.getElementById("sendButton");
      const typingIndicator = document.getElementById("typingIndicator");

      const sessionId =
        localStorage.getItem("vanaraChatSessionId") ||
        `web-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;

      localStorage.setItem("vanaraChatSessionId", sessionId);

      let chatHistory = [];
      let isLoading = false;
      let isReceptionOpen = false;
      let chatIsOpen = false;
      let introTimer = null;

      try {
        const storedHistory = JSON.parse(
          localStorage.getItem("vanaraChatHistory") || "[]"
        );

        chatHistory = Array.isArray(storedHistory)
          ? storedHistory
          : [];
      } catch (error) {
        chatHistory = [];
      }

      /* =======================================================
         HISTORY
         ======================================================= */

      function saveChatHistory() {
        chatHistory = chatHistory.slice(-4);

        localStorage.setItem(
          "vanaraChatHistory",
          JSON.stringify(chatHistory)
        );
      }

      function buildConversationContext() {
        return chatHistory
          .map((item) => {
            const speaker =
              item.role === "assistant"
                ? "Waraporn"
                : "Guest";

            return `${speaker}: ${item.text}`;
          })
          .join("\n\n");
      }

      /* =======================================================
         BANGKOK AVAILABILITY
         ======================================================= */

      function getBangkokHour() {
        const formatter = new Intl.DateTimeFormat("en-GB", {
          timeZone: BANGKOK_TIME_ZONE,
          hour: "2-digit",
          hourCycle: "h23"
        });

        const parts = formatter.formatToParts(new Date());

        const hourPart = parts.find(
          (part) => part.type === "hour"
        );

        return hourPart
          ? Number(hourPart.value)
          : 0;
      }

      function checkReceptionOpen() {
        const hour = getBangkokHour();

        return (
          hour >= CHAT_OPEN_HOUR &&
          hour < CHAT_CLOSE_HOUR
        );
      }

      function updateAvailability() {
        const wasOpen = isReceptionOpen;

        isReceptionOpen = checkReceptionOpen();

        messageInput.disabled =
          !isReceptionOpen || isLoading;

        sendButton.disabled =
          !isReceptionOpen || isLoading;

        messageInput.placeholder = ONLINE_PLACEHOLDER;

        if (chatIsOpen && !isReceptionOpen) {
          closeChat();
        }

        if (!chatIsOpen) {
          showCorrectLauncher();
        }

        if (
          isReceptionOpen &&
          !isLoading &&
          chatIsOpen &&
          !wasOpen
        ) {
          messageInput.focus();
        }
      }

      /* =======================================================
         LAUNCHER STATES
         ======================================================= */

      function clearIntroTimer() {
        if (introTimer) {
          clearTimeout(introTimer);
          introTimer = null;
        }
      }

      function showIntroLauncher() {
        clearIntroTimer();

        launcher.classList.remove(
          "is-compact",
          "is-offline",
          "is-hidden"
        );

        introTimer = setTimeout(() => {
          showCompactLauncher();
        }, INTRO_DURATION_MS);
      }

      function showCompactLauncher() {
        clearIntroTimer();

        launcher.classList.remove(
          "is-offline",
          "is-hidden"
        );

        launcher.classList.add("is-compact");
}

      function showOfflineLauncher() {
        clearIntroTimer();

        launcher.classList.remove(
          "is-compact",
          "is-hidden"
        );

        launcher.classList.add("is-offline");

      }

      function showCorrectLauncher() {
        const mobile =
          window.matchMedia("(max-width: 600px)").matches;

        if (!isReceptionOpen) {
          showOfflineLauncher();
          return;
        }

        if (mobile) {
          showCompactLauncher();
          return;
        }

        if (
          !launcher.classList.contains("is-compact") &&
          !launcher.classList.contains("is-offline")
        ) {
          showIntroLauncher();
        }
      }

      /* =======================================================
         OPEN / CLOSE
         ======================================================= */

      function openChat() {
        updateAvailability();

        if (!isReceptionOpen || chatIsOpen) {
          return;
        }

        clearIntroTimer();
        chatIsOpen = true;

        launcher.classList.add("is-hidden");

        setTimeout(() => {
          launcher.style.display = "none";
          chatWindow.style.display = "flex";

          requestAnimationFrame(() => {
            chatWindow.classList.add("is-visible");
          });

          if (!isLoading) {
            messageInput.focus();
          }
        }, 260);
      }

      function closeChat() {
        if (!chatIsOpen) {
          return;
        }

        chatIsOpen = false;
        chatWindow.classList.remove("is-visible");

        setTimeout(() => {
          chatWindow.style.display = "none";
          launcher.style.display = "block";
          launcher.classList.remove("is-hidden");

          if (isReceptionOpen) {
            showCompactLauncher();
          } else {
            showOfflineLauncher();
          }
        }, 280);
      }

      /* =======================================================
         MESSAGE RENDERING
         ======================================================= */

      function addMessage(text, sender) {
        const row = document.createElement("div");
        row.className = `messageRow ${sender}`;

        const bubble = document.createElement("div");
        bubble.className = "message";
        bubble.textContent = text;

        row.appendChild(bubble);
        messages.appendChild(row);

        messages.scrollTop = messages.scrollHeight;
      }

      function setLoading(state) {
        isLoading = state;

        typingIndicator.style.display =
          isLoading ? "flex" : "none";

        messageInput.disabled =
          isLoading || !isReceptionOpen;

        sendButton.disabled =
          isLoading || !isReceptionOpen;

        if (isLoading) {
          messages.scrollTop = messages.scrollHeight;
        } else if (chatIsOpen && isReceptionOpen) {
          messageInput.focus();
        }
      }

      /* =======================================================
         SEND DIRECTLY TO MAKE
         Stable logic inherited from the previous working chat.
         ======================================================= */

      async function sendMessage() {
        updateAvailability();

        if (
          !isReceptionOpen ||
          isLoading ||
          !chatIsOpen
        ) {
          return;
        }

        const message = messageInput.value.trim();

        if (!message) {
          return;
        }

        const conversationContext =
          buildConversationContext();

        addMessage(message, "user");

        messageInput.value = "";
        setLoading(true);

        try {
          if (!checkReceptionOpen()) {
            setLoading(false);
            updateAvailability();
            return;
          }

          const payload = new URLSearchParams();

          payload.append("message", message);
          payload.append("sessionId", sessionId);
          payload.append(
            "language",
            navigator.language || "en"
          );
          payload.append(
            "page",
            window.location.href || ""
          );
          payload.append(
            "referrer",
            document.referrer || ""
          );
          payload.append(
            "conversationContext",
            conversationContext
          );

          const response = await fetch(
            MAKE_WEBHOOK_URL,
            {
              method: "POST",
              body: payload
            }
          );

          if (!response.ok) {
            throw new Error(
              `Make webhook error: ${response.status}`
            );
          }

          const reply =
            (await response.text()).trim();

          if (!reply) {
            throw new Error(
              "Empty reply from Make"
            );
          }

          addMessage(reply, "assistant");

          chatHistory.push({
            role: "guest",
            text: message
          });

          chatHistory.push({
            role: "assistant",
            text: reply
          });

          saveChatHistory();
          setLoading(false);
        } catch (error) {
          console.error(
            "Vanara chat error:",
            error
          );

          setLoading(false);

          addMessage(
            "Sorry ka, something went wrong. Please try again.",
            "assistant"
          );
        }
      }

      /* =======================================================
         EVENTS
         ======================================================= */

      introLauncher.addEventListener("click", openChat);
      compactLauncher.addEventListener("click", openChat);
      closeButton.addEventListener("click", closeChat);
      sendButton.addEventListener("click", sendMessage);

      messageInput.addEventListener("keydown", (event) => {
        if (
          event.key === "Enter" &&
          !event.shiftKey
        ) {
          event.preventDefault();
          sendMessage();
        }
      });

      document.addEventListener(
        "visibilitychange",
        () => {
          if (!document.hidden) {
            updateAvailability();
          }
        }
      );

      window.addEventListener(
        "focus",
        updateAvailability
      );

      window.addEventListener(
        "resize",
        () => {
          if (!chatIsOpen) {
            showCorrectLauncher();
          }
        }
      );

      /* =======================================================
         INITIALIZE
         ======================================================= */

      updateAvailability();

      setInterval(
        updateAvailability,
        30000
      );
    })();