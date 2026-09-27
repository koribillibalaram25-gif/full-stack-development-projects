//Create you project here from scratch
const moviesList = [
    { movieName: "Flash", price: 7 },
    { movieName: "Spiderman", price: 5 },
    { movieName: "Batman", price: 4 },
];
  const selectMovie = document.getElementById("selectMovie");
const movieName = document.getElementById("movieName");
const moviePrice = document.getElementById("moviePrice");
const totalPrice = document.getElementById("totalPrice");
const selectedSeatsHolder = document.getElementById("selectedSeatsHolder");
const numberOfSeat = document.getElementById("numberOfSeat");
const proceedBtn = document.getElementById("proceedBtn");
const cancelBtn = document.getElementById("cancelBtn");

let currentPrice = 7;
let selectedSeats = [];

// Dropdown
moviesList.forEach((movie) => {
  const option = document.createElement("option");
  option.value = movie.price;
  option.textContent = movie.movieName;
  selectMovie.appendChild(option);
});

selectMovie.addEventListener("change", function () {
  const movie = moviesList.find(
    (m) => m.movieName === this.options[this.selectedIndex].text
  );

  movieName.textContent = movie.movieName;
 moviePrice.textContent = ` ${movie.price}`;
  currentPrice = movie.price;

  updatePrice();
});

// Seats
const seats = document.querySelectorAll("#seatCont .seat");

seats.forEach((seat) => {
  if (!seat.classList.contains("occupied")) {
    seat.addEventListener("click", () => {
      if (seat.classList.contains("selected")) {
        seat.classList.remove("selected");
        selectedSeats = selectedSeats.filter((s) => s !== seat);
      } else {
        seat.classList.add("selected");
        selectedSeats.push(seat);
      }

      updateSeatInfo();
      updatePrice();
    });
  }
});

function updatePrice() {
  totalPrice.textContent = ` ${selectedSeats.length * currentPrice}`;
}

function updateSeatInfo() {
  numberOfSeat.textContent = selectedSeats.length;

  if (selectedSeats.length === 0) {
    selectedSeatsHolder.innerHTML =
      '<span class="noSelected">No Seat Selected</span>';
  } else {
    selectedSeatsHolder.innerHTML = "";
    selectedSeats.forEach((seat, index) => {
      const span = document.createElement("span");
      span.textContent = `${index + 1}`;
      selectedSeatsHolder.appendChild(span);
    });
  }
}

// Continue Button
proceedBtn.addEventListener("click", () => {
  if (selectedSeats.length === 0) {
    alert("Oops no seat Selected");
    return;
  }

  alert("Yayy! Your Seats have been booked");

  selectedSeats.forEach((seat) => {
    seat.classList.remove("selected");
    seat.classList.add("occupied");
  });

  selectedSeats = [];
  numberOfSeat.textContent = 0;
  totalPrice.textContent = "$ 0";
  selectedSeatsHolder.innerHTML =
    '<span class="noSelected">No Seat Selected</span>';
});

// Cancel Button
cancelBtn.addEventListener("click", () => {
  selectedSeats.forEach((seat) => {
    seat.classList.remove("selected");
  });

  selectedSeats = [];
  numberOfSeat.textContent = 0;
  totalPrice.textContent = "$ 0";
  selectedSeatsHolder.innerHTML =
    '<span class="noSelected">No Seat Selected</span>';
});
// Use moviesList array for displaing the Name in the dropdown menu
//Add eventLister to each unoccupied seat
//Add eventLsiter to continue Button
//Add eventListerner to Cancel Button