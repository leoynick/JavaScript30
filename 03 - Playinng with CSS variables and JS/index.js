const inputs = document.querySelectorAll(".controls input");

function handleUpdate() {
  const {
    dataset: { sizing },
    name,
    value
  } = this;

  document.documentElement.style.setProperty(`--${name}`, value + sizing);
}

inputs.forEach(input => input.addEventListener("change", handleUpdate));
inputs.forEach(input => input.addEventListener("mousemove", handleUpdate));
