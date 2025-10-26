 
    const grid = document.getElementById("grid");
    const cellSize = 45;
    const gap = 4;
    const totalSize = cellSize + gap;

    // Crear celdas llenando la pantalla
    const cols = Math.ceil(window.innerWidth / totalSize);
    const rows = Math.ceil(window.innerHeight / totalSize);

    for (let i = 0; i < cols * rows; i++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      grid.appendChild(cell);
    }

    const cells = document.querySelectorAll(".cell");

    // Calcular las columnas reales que CSS generó
    const computedStyle = getComputedStyle(grid);
    const colCount = parseInt(
      computedStyle.getPropertyValue("grid-template-columns").split(" ").length
    );

    document.addEventListener("mousemove", (e) => {
      const x = Math.floor(e.clientX / totalSize);
      const y = Math.floor(e.clientY / totalSize);
      const index = y * colCount + x;
      if (cells[index]) {
        cells[index].classList.add("active");
        setTimeout(() => cells[index].classList.remove("active"), 500);
      }
    });

    window.addEventListener("resize", () => location.reload());

    // 👁️ Mostrar / ocultar contraseña
    const togglePassword = document.getElementById("togglePassword");
    const passwordInput = document.getElementById("password");

    togglePassword.addEventListener("click", () => {
      const type =
        passwordInput.getAttribute("type") === "password" ? "text" : "password";
      passwordInput.setAttribute("type", type);
      togglePassword.textContent = type === "password" ? "👁️" : "🙈";
    });
  
