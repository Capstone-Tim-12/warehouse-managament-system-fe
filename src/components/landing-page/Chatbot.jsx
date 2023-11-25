import React, { useState } from "react";
import buttonChatbot from "../../assets/chatbot-button.svg";

const systemMessage = {
  role: "system",
  content:
    "Jika bisa, jawab dengan simple. Jika user menanyakan di luar topik WMS atau hal-hal di luar pergudangan, jawab saja kamu tidak bisa menjawab di luar dari scope tersebut. Jika user menanyakan bagaimana aku dapat melihat informasi gudang, kamu boleh mengarang jawabannya yang terpenting menyesuaikan dengan konteks pergudangan WMS dan buat jawabannya simple. Jika user menanyakan bisakah aku mengganti akun, kamu boleh mengarang jawabannya yang terpenting menyesuaikan dengan konteks pergudangan WMS dan buat jawabannya simple.",
};

function Chatbot() {
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState([
    {
      message:
        "Halo! Perkenalkan aku adalah WMS Automated Assistant. Bagaimana aku bisa membantumu hari ini?",
      sentTime: "just now",
      sender: "ChatGPT",
    },
    {
      message: "Bagaimana aku dapat melihat informasi gudang?",
      sentTime: "just now",
      sender: "ChatGPT",
    },
    {
      message: "Bisakah aku mengganti akun?",
      sentTime: "just now",
      sender: "ChatGPT",
    },
    {
      message: "Aku punya pertanyaan lain",
      sentTime: "just now",
      sender: "ChatGPT",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async (message) => {
    const newMessage = {
      message,
      direction: "outgoing",
      sender: "user",
    };

    const newMessages = [...messages, newMessage];

    setMessages(newMessages);

    setIsTyping(true);
    await processMessageToChatGPT(newMessages);
  };

  async function processMessageToChatGPT(chatMessages) {
    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if (messageObject.sender === "ChatGPT") {
        role = "assistant";
      } else {
        role = "user";
      }
      return { role: role, content: messageObject.message };
    });

    const apiRequestBody = {
      model: "gpt-3.5-turbo",
      messages: [systemMessage, ...apiMessages],
    };

    // local variable
    const LOCAL_API_KEY = import.meta.env.VITE_OPENAPI_LOCAL_KEY;

    // deployment variable
    const API_KEY = import.meta.env.VITE_OPENAPI_KEY;

    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + LOCAL_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiRequestBody),
    })
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        setMessages([
          ...chatMessages,
          {
            message: data.choices[0].message.content,
            sender: "ChatGPT",
          },
        ]);
        setIsTyping(false);
      });
  }

  return (
    <>
      {showChat && (
        <div className="flex justify-end items-end fixed right-0 bottom-[88px] md:right-8 ">
          <div
            style={{ boxShadow: "0px 0px 4px 0px rgba(0,0,0,0.75)" }}
            className="flex-1  bg-white rounded-xl p-4 overflow-y-auto    mx-auto h-[400px] md:w-[80%] md:h-[420px] "
          >
            <div className="border border-[#ddd] rounded p-3">
              <div className="space-y-4">
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`${
                      msg.sender === "ChatGPT" ? "text-left" : "text-right"
                    }`}
                  >
                    <div
                      id="message"
                      className={`p-3 rounded-lg shadow-md inline-block max-w-[350px] md:max-w-[400px] mx-auto w-max ${
                        index === 0
                          ? "bg-[#17345F] text-white w-[300px]"
                          : "border border-[#ddd]"
                      }`}
                    >
                      {msg.message}
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="text-left">
                    <div
                      id="ai-message"
                      className="bg-gray-50 p-3 rounded-lg shadow-md inline-block animate-pulse"
                    >
                      WMS AI sedang mengetik...
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="bg-white p-4 border border-[#ddd] max-w-[1000px] mx-auto rounded">
              <input
                id="input-message"
                type="text"
                placeholder="Ketik pesanmu disini..."
                className="border p-3 w-full focus:outline-none bg-[#EBEBF0]  rounded-[20px]"
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    handleSend(e.target.value);
                    e.target.value = "";
                  }
                }}
              />
            </div>
          </div>
        </div>
      )}
      <button
        id="chatbot-toggle"
        className="fixed bottom-4 right-4 p-2 z-[500] text-white rounded-full"
        onClick={() => setShowChat(!showChat)}
      >
        <img src={buttonChatbot} alt="chatbot button" />
      </button>
    </>
  );
}

export default Chatbot;
