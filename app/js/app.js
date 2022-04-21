// import '~/app/vendor/mmenu/dist/mmenu.js'
import $ from 'jquery'
import MicroModal from 'micromodal'
import mixitup from 'mixitup'
import { Fancybox } from "@fancyapps/ui"

window.jQuery = $
window.$ = $

document.addEventListener('DOMContentLoaded', () => {

	function tabMix() {
		let btn = document.querySelectorAll('portfolio__nav-button')

		btn.forEach((item) => {
			item.addEventListener('click', function () {
				if (this.classList.contains('active')) {
					this.classList.remove('active')
				} else {
					btn.forEach((link) => {
						link.classList.remove('active')
					})
					this.classList.add('active')
				}
			})
		})
	}
	tabMix()

	Fancybox.bind("[data-fancybox]", {});

	const containerEl = document.querySelector('.portfolio__lists')

	if (containerEl) {
		let mixer = mixitup(containerEl, {
			"animation": {
				"duration": 200,
				"nudge": false,
				"reverseOut": false,
				"effects": "fade scale(0.79)"
			}
		});
	}

	MicroModal.init({
		awaitCloseAnimation: true, 
	})

})