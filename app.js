const $btns = document.querySelectorAll("button");
const $imgs = document.querySelectorAll("img");

document.addEventListener("DOMContentLoaded", () => {
	for (let i = 0; i < $btns.length; i++) {
		const btn = $btns[i];
		const img = $imgs[i];

		btn.addEventListener("click", () => {
			img.setAttribute("src", "assets/cat.avif");
		});

		btn.addEventListener("contextmenu", (e) => {
			img.setAttribute("src", "assets/baby.webp");
			e.preventDefault();
		});
	}
});
document.addEventListener("keyup", (event) => {
	if (event.code === "KeyR") {
		for (let i = 0; i < $btns.length; i++) {
			const img = $imgs[i];

			img.setAttribute("src", "assets/quebec.jpg");
		}
	}
});
