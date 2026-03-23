const productItems = document.querySelectorAll(".product-item");

productItems.forEach((item) => {
  item.addEventListener("click", () => {
    const productId = item.dataset.id;

    const titleEl = item.querySelector(".product-name");
    if (!titleEl) return;

    const prodTitle = titleEl.textContent;

    fetch("http://localhost:3000/product", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: productId, title: prodTitle }),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Request failed");
        return res.json();
      })
      .then((data) => console.log("Server response:", data))
      .catch((err) => console.error(err));
  });
});
