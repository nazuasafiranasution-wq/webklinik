// --- BAGIAN 1: DOM & ARRAY (SOAL 5) ---
let dataProduk = [
    { id: 1, nama: "Masker KN95", harga: 50000 },
    { id: 2, nama: "Vitamin D3", harga: 75000 },
    { id: 3, nama: "Oxymeter", harga: 120000 },
    { id: 4, nama: "Hand Sanitizer", harga: 25000 }
];

const listContainer = document.getElementById("daftarItemContainer");

function updateProduk() {
    listContainer.innerHTML = "";
    dataProduk.forEach(item => {
        const itemDiv = document.createElement("div");
        itemDiv.className = "product-card";
        itemDiv.innerHTML = `
            <h3>${item.nama}</h3>
            <p style="color: #198754; font-weight: bold;">Rp ${item.harga.toLocaleString()}</p>
            <button class="btn-delete" onclick="hapusItem(${item.id})">Hapus</button>
        `;
        listContainer.appendChild(itemDiv);
    });
}

document.getElementById("btnTambahProduk").onclick = function() {
    const n = document.getElementById("inputNamaProduk");
    const h = document.getElementById("inputHargaProduk");

    if(n.value && h.value) {
        dataProduk.push({ id: Date.now(), nama: n.value, harga: parseInt(h.value) });
        n.value = ""; h.value = "";
        updateProduk();
    } else {
        alert("Mohon isi nama dan harga!");
    }
};

function hapusItem(id) {
    dataProduk = dataProduk.filter(p => p.id !== id);
    updateProduk();
}

updateProduk(); // Initial Load


// --- BAGIAN 2: VALIDASI FORM (SOAL 4) ---
document.getElementById("formRegistrasi").onsubmit = function(e) {
    e.preventDefault();
    
    // Reset Pesan
    document.querySelectorAll(".error-msg").forEach(s => s.innerText = "");
    
    let valid = true;
    const n = document.getElementById("nama").value;
    const em = document.getElementById("email").value;
    const tel = document.getElementById("telepon").value;
    const dok = document.getElementById("dokter").value;
    const jk = document.querySelector('input[name="jk"]:checked');

    if(!n) { document.getElementById("errorNama").innerText = "Nama wajib diisi!"; valid = false; }
    
    if(!em.includes("@")) { document.getElementById("errorEmail").innerText = "Email tidak valid!"; valid = false; }
    
    if(!tel || parseInt(tel) <= 0) { document.getElementById("errorTelepon").innerText = "Gunakan angka positif!"; valid = false; }
    
    if(!dok) { document.getElementById("errorDokter").innerText = "Pilih dokter!"; valid = false; }
    
    if(!jk) { document.getElementById("errorJk").innerText = "Pilih jenis kelamin!"; valid = false; }

    if(valid) {
        alert("✅ Pendaftaran Berhasil Dikirim!");
        this.reset();
    }
};