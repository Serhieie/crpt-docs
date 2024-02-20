const handleMouseEnter = (func: (value: boolean) => void) => {
  func(true);
};

const handleMouseLeave = (func: (value: boolean) => void) => {
  func(false);
};

const handleMouseMove = (event: React.MouseEvent) => {
  const x = event.clientX;
  const y = event.clientY;
  const tooltip = document.getElementById("tooltip");
  if (tooltip) {
    tooltip.style.left = x + "px";
    tooltip.style.top = y + "px";
    tooltip.style.opacity = "1";
  }
};

const copyText = (func: (value: string) => void, inputValue: string) => {
  const tempInput = document.createElement("input");
  tempInput.value = inputValue;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);

  func("Copied");

  setTimeout(() => {
    func("Click to Copy");
  }, 2000);
};

export { copyText, handleMouseMove, handleMouseLeave, handleMouseEnter };
