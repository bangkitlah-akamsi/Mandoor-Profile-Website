const button = document.querySelector('#hamburgerButtonHome');
const content = document.querySelector('#profile-container');
const drawerhome = document.querySelector('#navigationDrawerHome');
const pageScroll = document.querySelectorAll('.page-scroll')

button.addEventListener('click', (event) => {
  event.stopPropagation();
  console.log('hallo');
  drawerhome.classList.toggle('active');
 });
 
 content.addEventListener('click', (event) => {
  event.stopPropagation();
  drawerhome.classList.remove('active');
 });

// Fungsi untuk menangani event click pada setiap link
function handleClick(event) {
  // Mencegah perilaku default dari link
  event.preventDefault();
  // Mendapatkan nilai href dari link yang diklik
  let href = event.target.getAttribute("href");
  // Mendapatkan elemen div yang sesuai dengan href
  let div = document.querySelector(`div${href}`);
  // Menggulir ke div yang dituju dengan opsi smooth
  div.scrollIntoView({ behavior: "smooth" });
  // Mendapatkan semua elemen div
  let divs = document.querySelectorAll("div");
  // Melakukan loop pada setiap div
  divs.forEach(function (d) {
    // Jika div sama dengan div yang dituju
    if (d === div) {
      // Menambahkan kelas active pada div
      d.classList.add("page-scroll");
    } else {
      // Menghapus kelas active pada div lain
      d.classList.remove("page-scroll");
    }
  });
}

// Mendapatkan semua elemen link
let links = document.querySelectorAll("a");
// Melakukan loop pada setiap link
links.forEach(function (link) {
  // Menambahkan event listener click pada setiap link
  link.addEventListener("click", handleClick);
});

let link = document.querySelector("a[href='#HomeLanding']");
// Menambahkan event listener click pada link
link.addEventListener("click", function (event) {
  // Mencegah perilaku default dari link
  event.preventDefault();
  // Menggulir ke paling ujung atas dengan opsi smooth
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

let linkLogo = document.querySelector("a[href='#HomeBody']");
// Menambahkan event listener click pada link
linkLogo.addEventListener("click", function (event) {
  // Mencegah perilaku default dari link
  event.preventDefault();
  // Menggulir ke paling ujung atas dengan opsi smooth
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

function redirect(url) {
  // Menggunakan metode window.location.replace untuk mengganti URL saat ini dengan URL yang diberikan
  window.open(url, '_blank');
}

const buttonOrange = document.querySelectorAll('a.orange-link');
buttonOrange.forEach(function (each) {
  each.onclick = function () {
    // Mengambil nilai atribut href dari elemen a
    let href = each.getAttribute("href");
    // Memanggil fungsi redirect dengan parameter href
    redirect(href);
    // Menghentikan perilaku default dari elemen a
    return false;
  }
});

window.addEventListener('hashchange', () => {
});

window.addEventListener('load', () => {
});
