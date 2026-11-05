let nama = "john Doe";
let umur = 25;
let statusMenikah = false;

console.log("Nama: " + nama);
console.log("umur: " + umur);
console.log("Status Menikah: " + statusMenikah);

document.getElementById("output").innerHTML =
    `<p><strong>Nama:</strong> ${nama}</p>
    <p><strong>Umur:</strong> ${umur}</p>
    <p><strong>Status Menikah:</strong> ${statusMenikah}</p>`;