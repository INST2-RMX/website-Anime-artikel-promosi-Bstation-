console.log('Hello World!');

// Smooth scroll animation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function(e) {
		e.preventDefault();

		document.querySelector(this.getAttribute('href')).scrollIntoView({
			behavior: 'smooth'
		});
	});
});



// Mendapatkan elemen-elemen yang dibutuhkan
const videoLink = document.getElementById('video-link');
const videoBtn = document.getElementById('video-btn');
const videoContainer = document.getElementById('video-container');
const video = document.getElementById('video');

// Mengatur tindakan ketika tombol video diklik
videoBtn.addEventListener('click', function(event) {
	event.preventDefault(); // Mencegah tindakan default dari tautan
	videoLink.style.display = 'none'; // Sembunyikan tautan
	videoContainer.style.display = 'block'; // Tampilkan kontainer video
	const videoSrc = videoLink.getAttribute('href'); // Ambil sumber video dari atribut href tautan
	video.src = videoSrc; // Mengatur sumber video
	video.play(); // Memutar video secara otomatis
});