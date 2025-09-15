const fetchProducts = async () => {
  const res = await fetch("https://localhost:9200/products/_search", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const data = await res.json();
  console.log("ES raw response:", data);
};
