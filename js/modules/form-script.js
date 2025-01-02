export default function formScript() {
  const selectWhite = document.querySelectorAll(".select-white");
  selectWhite.forEach((select) =>
    select.addEventListener("change", () => {
      select.style.color = "white";
    }),
  );
}
