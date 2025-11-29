let timeOut;

const whatsAppUpdate = () => {
  clearTimeout(timeOut);
  timeOut = setTimeout(() => {
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const text = `Здравствуйте, меня зовут ${encodeURIComponent(name)}. Мой телефон ${encodeURIComponent(phone)}`;
    const whatsappUrl = `https://wa.me/79857389238?text=${text}`;
    document.getElementById("whatsappButton").setAttribute("href", whatsappUrl);
  }, 300);
};

document.getElementById("name").addEventListener("input", whatsAppUpdate);
document.getElementById("phone").addEventListener("input", whatsAppUpdate);
