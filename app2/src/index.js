import("app1/index")
  .then((app1) => {
    const container = document.getElementById("app2");
    const app1Container = document.createElement("div");
    app1Container.id = "app1-container";
    container.appendChild(app1Container);

    app1.init(app1Container);
  })
  .catch((err) => console.error("Error loading app1", err));

const container = document.getElementById("app2");
container.innerHTML = "Hello from app2";
