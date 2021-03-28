window.onscroll = function () {
    myFunction(), funcAtas1(), funcAtas2(), funcAtas3(), funcAtas4(), funcPutarY(), funcPutarX1()
};

function funcAtas1() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        document.querySelector('.keunggulan-bagian-isi-atas-1').classList.add("keunggulan-bagian-isi-atas-spesial")
    }
}

function funcAtas2() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        document.querySelector('.keunggulan-bagian-isi-atas-2').classList.add("keunggulan-bagian-isi-atas-spesial")
    }
}

function funcAtas3() {
    if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
        document.querySelector('.keunggulan-bagian-isi-atas-3').classList.add("keunggulan-bagian-isi-atas-spesial")
    }
}

function funcAtas4() {
    if (document.body.scrollTop > 140 || document.documentElement.scrollTop > 140) {
        document.querySelector('.keunggulan-bagian-isi-atas-4').classList.add("keunggulan-bagian-isi-atas-spesial")
    }
}

function myFunction() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        document.querySelector('.bagian-header-atas-fixed').classList.add("bagian-header-atas-fixed-1")
    } else {
        document.querySelector('.bagian-header-atas-fixed').classList.remove("bagian-header-atas-fixed-1")
    }
}


function funcPutarY() {
    if (document.body.scrollTop > 520 || document.documentElement.scrollTop > 520) {
        document.querySelector('.card-bagian-isi-bawah-1').classList.add("card-bagian-isi-bawah-spesial")
        document.querySelector('.card-bagian-isi-bawah-2').classList.add("card-bagian-isi-bawah-spesial")
        document.querySelector('.card-bagian-isi-bawah-3').classList.add("card-bagian-isi-bawah-spesial")
    }
}

function funcPutarX1() {
    if (document.body.scrollTop > 1200 || document.documentElement.scrollTop > 1200) {
        document.querySelector('.parent-gambar-kampus-bagian-footer-atas-1').classList.add("parent-gambar-kampus-bagian-footer-atas-spesial")
        document.querySelector('.parent-gambar-kampus-bagian-footer-atas-2').classList.add("parent-gambar-kampus-bagian-footer-atas-spesial")
        document.querySelector('.parent-gambar-kampus-bagian-footer-atas-3').classList.add("parent-gambar-kampus-bagian-footer-atas-spesial")
    }
}

let clickLink1 = document.querySelector('.link-bagian-header-atas-1a')
let clickLink2 = document.querySelector('.link-bagian-header-atas-2a')

clickLink1.addEventListener("click", () => {
    clickLink1.classList.add("link-bagian-header-atas-spesial")
    clickLink1.classList.remove('link-bagian-header-atas-spesial-1')
    clickLink2.classList.remove('link-bagian-header-atas-spesial')
    clickLink2.classList.add('link-bagian-header-atas-spesial-1')
})

clickLink2.addEventListener("click", () => {
    clickLink1.classList.remove("link-bagian-header-atas-spesial")
    clickLink1.classList.add('link-bagian-header-atas-spesial-1')
    clickLink2.classList.add('link-bagian-header-atas-spesial')
    clickLink2.classList.remove('link-bagian-header-atas-spesial-1')
})