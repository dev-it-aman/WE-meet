window.onload = function () {

      alert("You are in waiting room click on the Ring button to join the meeting first of all!!");
  const loader = document.createElement("div");
  loader.classList.add("card-wrapper");
  loader.innerHTML = `
    <div class="card-loader">
        <div class="spinner">
        <div class="spinner-item"></div>
        <div class="spinner-item"></div>
        <div class="spinner-item"></div>
        <div class="spinner-item"></div>
        </div>
        <p>Loading ....</p>
    </div>`;
  document.body.appendChild(loader);
  setTimeout(() => {
    loader.remove();
  }, 2500);

};
