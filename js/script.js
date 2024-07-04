window.onload = function() {
    let userName = prompt("Masukkan nama Anda:", "Harfi");
    if (userName != null && userName != "") {
        document.getElementById('userName').textContent = userName;
    }
};

function submitForm() {
    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const message = document.getElementById('message').value;

    // Validasi input
    if (!name) {
        document.getElementById('nameError').textContent = 'Nama harus diisi.';
        return;
    } else {
        document.getElementById('nameError').textContent = '';
    }

    if (!dob) {
        document.getElementById('dobError').textContent = 'Tanggal Lahir harus diisi.';
        return;
    } else {
        document.getElementById('dobError').textContent = '';
    }

    if (!gender) {
        document.getElementById('genderError').textContent = 'Jenis Kelamin harus dipilih.';
        return;
    } else {
        document.getElementById('genderError').textContent = '';
    }

    if (!message) {
        document.getElementById('messageError').textContent = 'Pesan harus diisi.';
        return;
    } else {
        document.getElementById('messageError').textContent = '';
    }

    // Tampilkan data yang dimasukkan
    document.getElementById('displayName').textContent = name;
    document.getElementById('displayDob').textContent = dob;
    document.getElementById('displayGender').textContent = gender.value;
    document.getElementById('displayMessage').textContent = message;

    const currentTime = new Date().toLocaleString();
    document.getElementById('currentTime').textContent = currentTime;
}

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const navLists = document.querySelector('nav');

    burger.addEventListener('click', () => {
        navLists.classList.toggle('nav-active');
        burger.classList.toggle('toggle-burger');
    });
};

navSlide();