$(document).ready(function () {
	let jsTest = document.querySelector(".js-test");
	let jsTestH3 = document.querySelector("#js-test-h3");
	let jsTestP = document.querySelector("#js-test-p");
	let jsOk = document.createElement('h3');
	jsOk.classList.add('js-ok');
	jsOkTextNode = document.createTextNode('Всё OK! Ваш браузер поддерживает JavaScript!');
	jsOk.appendChild(jsOkTextNode);

	if (jsTest.classList.contains("js-test")) {
		jsTestH3.classList.add("transperent");
		jsTestP.classList.add("transperent");
		setTimeout(function () {
			jsTestH3.remove();
			jsTest.prepend(jsOk);
			jsTestP.remove();
		}, 400);
		setTimeout(function () {
			jsOk.classList.add("transperent");
			jsTest.classList.add("transperent");
		}, 1200);
		setTimeout(function () {
			jsTest.remove();
		}, 1600);
	}

	$(window).scroll(function () {
		if ($(window).scrollTop() > 360 && $(window).scrollTop() < 770) {
			$("#nav-wrapper").fadeIn(900); 
		} else if ($(window).scrollTop() >= 770) {
			$("#nav-wrapper-pc").fadeIn(900); 
			$("#nav-wrapper").fadeIn(900); 
		} else {
			$("#nav-wrapper").fadeOut(150); 
			$("#nav-wrapper-pc").fadeOut(150); 
		}
	});

	$("#page-nav").onePageNav({
		currentClass: "active-nav",
		changeHash: false,
		scrollSpeed: 750,
		scrollThreshold: 0.5,
		filter: "",
		easing: "swing",
		begin: function () {},
		end: function () {},
		scrollChange: function ($currentListItem) {},
	});


	const toggleMenu = document.querySelector(".toggle-menu");
	const toggleMenuFixed = document.querySelector(".toggle-menu-fixed"); 
	const mobMenu = document.querySelector(".mobile-menu"); 
	const overlay = document.querySelector("#overlay"); 
	const phoneMob = document.querySelector(".phone-top-mob");
	const bodyEl = document.body.closest("html");

	function toggleMIt() {
		mobMenu.classList.toggle("active");
		overlay.classList.toggle("active");
		bodyEl.classList.toggle("noscroll");
	}
	function removeIt() {
		toggleMenu.classList.remove("active");
		bodyEl.classList.remove("noscroll");
	}

	toggleMenu.addEventListener("click", function () {
		this.classList.toggle("active");
		toggleMIt();
	});
	toggleMenuFixed.addEventListener("click", function () {
		this.classList.toggle("active");
		toggleMenu.classList.toggle("active"); +
		toggleMIt();
	});
	
	mobMenu.addEventListener("click", function () {
		this.classList.remove("active");
		removeIt();
		overlay.classList.remove("active");
	});
	
	phoneMob.addEventListener("click", (e) => {
		e.stopPropagation();
	});


	overlay.addEventListener("click", function () {
		this.classList.remove("active");
		removeIt();
		mobMenu.classList.remove("active");
	});
	
	if (document.querySelector(".gallery-link")) {
		const galleryLink = document.querySelector(".gallery-link"); 
		const photo = document.querySelectorAll(".hide-photo"); 
		const link1 = document.querySelector(".link-1"); 
		const link2 = document.querySelector(".link-2"); 

		galleryLink.addEventListener("click", function () {
			photo.forEach(function(item){
				item.classList.toggle("photo");
			});
			link1.classList.toggle("link-1-hide");
			link2.classList.toggle("link-2-show");
		});
	}

	if (document.querySelector(".article-gallery-link")) {
		const artGalleryLink = document.querySelector(".article-gallery-link"); 
		const artPhoto = document.querySelectorAll(".hide-article-photo"); 
		const showLink = document.querySelector(".show-link"); 
		const hideLink = document.querySelector(".hide-link"); 
		artGalleryLink.addEventListener("click", function () {
			artPhoto.forEach(function(item){
				item.classList.toggle("article__photo");
			});
			showLink.classList.toggle("show-link-hide");
			hideLink.classList.toggle("hide-link-show");
		});
	}

	$(window).scroll(function () {
		if ($(this).width() > 280) {
			if ($(this).scrollTop() > 300) {
				$("#back2Top").fadeIn();
			} else {
				$("#back2Top").fadeOut();
			}
		}
	});

	$("#back2Top").click(function (event) {
		event.preventDefault();
		$("html, body").animate({ scrollTop: 0 }, "slow");
		return false;
	});


	const Tel = document.querySelectorAll(".phone-img");

	Tel.forEach(function(item){
		item.addEventListener("click", function(){
			this.style = "display: none";
			this.insertAdjacentHTML("afterend", '<a href="tel:+61419516972"> +61 419 516 972</a>');
		});
	});

	if (document.querySelector(".map-overlay")) {
		const mapChange = document.querySelector(".map-overlay"); 
		const fakeMap = document.querySelector(".fake-map"); 
		const mapHolderMob = document.querySelector(".map-holder-mob"); 
		const mapHolderPc = document.querySelector(".map-holder-pc"); 

		mapChange.addEventListener("click", function () {
			fakeMap.classList.add("hide");
			if (mapHolderMob) {
				mapHolderMob.classList.add("show-mob");
			}
			if (mapHolderPc) {
				mapHolderPc.classList.add("show-pc");
			}
		});
	}

	if (document.querySelector(".map-overlay-tab")) {
		const mapChangeTab = document.querySelector(".map-overlay-tab"); 
		const fakeMapTab = document.querySelector(".fake-map-tab"); 
		const mapHolderTab = document.querySelector(".map-holder-tab"); 

		mapChangeTab.addEventListener("click", function () {
			fakeMapTab.classList.add("hide");
			mapHolderTab.classList.add("show-tab");
		});
	}

	if (document.querySelector(".yacht__content")) {
		let prxScene = document.querySelector(".yacht__content"); 
		let prxItem = document.querySelectorAll(".leda"); 
		let prxItemBg = document.querySelectorAll(".sea"); 
		let prxItemSky = document.querySelectorAll(".sky"); 

		prxScene.addEventListener("mousemove", function (e) {
			let x = e.clientX / window.innerWidth;
			let y = e.clientY / window.innerHeight;
			for (let item of prxItem) {
				item.style.transform = "translate(-" + x * 25 + "px, -" + y * 18 + "px)";
			}
			for (let item of prxItemBg) {
				item.style.transform = "translate(-" + x * 28 + "px, -" + y * 23 + "px)";
			}
			for (let item of prxItemSky) {
				item.style.transform = "translate(-" + x * 0 + "px, -" + y * 23 + "px)";
			}
		});
	}

	if (document.querySelector(".contact-form") || document.querySelector(".reviews-page__form")){

	const formItems = document.querySelectorAll(".form-input");

	for (let item of formItems) {
		const thisParent = item.closest(".form-item-row");
		const thisPlaceholder = thisParent.querySelector(".fake-placeholder");
		

		item.addEventListener("focus", function () {
			thisPlaceholder.classList.add("active-field");
		});

		item.addEventListener("blur", function () {
			if (item.value.length > 0) {
				thisPlaceholder.classList.add("active-field");
			} else {
				thisPlaceholder.classList.remove("active-field");
			}
		});
	}

	let textField = document.querySelector("#form-comment");
	let counterRow = document.querySelector(".contacts-form__char-counter");

	function counterRowToggle(){
		counterRow.classList.toggle("transp-count");
	}

	if (textField) {
		textField.addEventListener("focus", function () {
			counterRowToggle();
		});
		textField.addEventListener("blur", function () {
			counterRowToggle();
		});
	}

	let maxCount = 480;
	let counterSpan = document.querySelector("#form-char-counter");
	$(".contact-form textarea").keyup(function () {
		if (this.value.length > maxCount) {
			this.value = this.value.substr(0, maxCount);
			counterRow.style = "color:red; font-weight:700; font-size:16px";
		} else if (this.value.length < 450 && this.value.length > 400){
			counterRow.style = "color:orange; font-weight:700; font-size:14px";
		} else if (this.value.length < maxCount && this.value.length >= 450){
			counterRow.style = "color:red; font-weight:700; font-size:14px"; 
		} else if (this.value.length == maxCount) {
			counterRow.style = "color:red; font-weight:700; font-size:16px";
		} else if (this.value.length < maxCount) {
			if (counterRow.hasAttribute("style")) {
				counterRow.removeAttribute("style");
			}
		}
	});
	$("#form-char-counter").html(maxCount);
	$("#form-comment").keyup(function () {
		let revText = this.value.length;
		if (this.value.length > maxCount) {
			this.value = this.value.substr(0, maxCount);
		}
		let cnt = maxCount - revText;
		if (cnt <= 0) {
			$("#form-char-counter").html("0");
		} else {
			$("#form-char-counter").html(cnt);
		}
	});

	let formBlock = document.querySelector(".contact-form"); 
	let formAllFakePlaceholders = document.querySelectorAll(".contact-form .fake-placeholder"); 
	let callFormPolicy = document.querySelector(".form-checkbox"); 

	let botTestRow = document.querySelector("#form-bot-row"); 
	let fakeBotPlaceholder1 = document.querySelector("#form-bot-placeholder-1"); 
	let botQuestion1Row = document.querySelector("#question-1-row"); 
	let controlQuestion1 = document.querySelector("#form-bot-question-1"); 
	let questionInp1 = document.querySelector("#question-inp-1"); 
	let fakeBotPlaceholder2 = document.querySelector("#form-bot-placeholder-2"); 
	let botQuestion2Row = document.querySelector("#question-2-row"); 
	let controlQuestion2 = document.querySelector("#form-bot-question-2"); 
	let questionInp2 = document.querySelector("#question-inp-2"); 
	let questionToInp2 = `России?`;

	let submitBtn = document.querySelector("#submit-btn"); 
	let resetBtn = document.querySelector("#reset-btn"); 
	let x, y, res;

	function randomInt() {
		x = Math.round(Math.random() * 10); 
		y = Math.round(Math.random() * 10);
		res = x + y;
		return res;
	}

	function botTestHide() {
		botTestRow.classList.add("hidden");
		botQuestion1Row.classList.add("hidden");
		botQuestion2Row.classList.add("hidden");
	}

	function submitBtnDis(){
		submitBtn.disabled = true;
	}

	function submitBtnEnab(){
		submitBtn.disabled = false;
	}

	if (callFormPolicy) {
		callFormPolicy.addEventListener("change", function (e) {
			if (e.target.checked == true) {
				randomInt();
				questionInp1.innerText = `${x} + ${y}?`;
				botTestRow.classList.remove("hidden"); 
				botQuestion1Row.classList.remove("hidden"); 
				this.disabled = true;
				controlQuestion1.addEventListener("input", function (e) {
					let inputValue1 = parseInt(e.target.value); 
					if (inputValue1 === res) {
						submitBtnDis();
						botQuestion1Row.classList.add("hidden"); //toggle 1
						botQuestion2Row.classList.remove("hidden"); //toggle 2
						fakeBotPlaceholder1.classList.remove("active-field");
						controlQuestion1.blur();
						controlQuestion2.focus();
						callFormPolicy.disabled = true;
					} else {
						submitBtnDis();
						return;
					}
				});
			} else {
				botTestHide();
			}
		});
	}

	if (questionInp2) {
		questionInp2.innerText = questionToInp2;
	}

	if (controlQuestion2) {
		controlQuestion2.addEventListener("input", function (e) {
			let inputValue2 = e.target.value.toLowerCase();
			if (inputValue2 === "москва") {
				submitBtnEnab();
				botTestRow.classList.add("hidden"); // toggle
				formBlock.setAttribute("method", "POST"); 
				formBlock.setAttribute("action", "./php/mail.php"); 
				botQuestion2Row.classList.add("hidden"); //toggle2
				fakeBotPlaceholder2.classList.remove("active-field");
				controlQuestion2.blur();
			} else {
				submitBtnDis();
			}
		});
	}

	if (controlQuestion1) {
		controlQuestion1.addEventListener("input", cleanInpDigit);
	}

	function cleanInpDigit() {
		this.value = this.value.replace(/[^+0-9]/g, "");
	}

	if (controlQuestion2) {
		controlQuestion2.addEventListener("input", cleanControlQuestionChar);
	}

	function cleanControlQuestionChar() {
		this.value = this.value.replace(/[^А-Яа-я-]/g, "");
	}

	function hideValidationErrLabels(){
		let validationErrLabels = document.querySelectorAll('.contact-form label.error');
		validationErrLabels.forEach(function(item){
			item.style = "display:none";
		});
	}
	if (resetBtn) {
		resetBtn.addEventListener("click", function () {
			callFormPolicy.disabled = false;
			submitBtnEnab();
			formAllFakePlaceholders.forEach(function (item) {
				item.classList.remove("active-field");
			});
			botTestHide();
			counterRow.removeAttribute("style");
			counterSpan.innerText = maxCount;
			formBlock.removeAttribute("method", "POST"); 
			formBlock.removeAttribute("action", "./php/mail.php"); 
			this.blur();
			hideValidationErrLabels();
		});
	}

	if($(".contact-form")){
		$(".contact-form").validate({
			rules: {
				userName: {
					required: true,
					minlength: 2,
				},
				email: {
					required: true,
					email: true,
				},
				subject: {
					required: false,
				},
				message: {
					required: true,
				},
				checkbox: {
					required: true,
				},
				botQuestion1: {
					required: true,
					minlength: 1,
					maxlength: 2,
				},
				botQuestion2: {
					required: true,
					minlength: 1,
					maxlength: 6,
				},
			},
			messages: {
				userName: {
				required: "What is your name?!",
				minlength: "Input error!",
				},
				email: {
				required: "You must enter your email!",
				email: "Incorrect email address entered!",
				},
				subject: {
				required: "No subject specified!",
				},
				message: {
				required: "Where is the text of your message?!",
				},
				checkbox: {
				required:
				"To send a message, you must accept the privacy policy!",
				},
				botQuestion1: {
				required: "Required field!",
				minlength: "Input error!",
				maxlength: "Input error!",
				},
				botQuestion2: {
				required: "Required field!",
				minlength: "Input error!",
				maxlength: "Input error!",
				},
			},
			submitHandler: function (form) {
				ajaxFormSubmit();
			},
		});
	}


		function ajaxFormSubmit() {
			let string = $(".contact-form").serialize(); 


			$.ajax({
				type: "POST", 
				url: "php/mail.php", 
				data: string, 

				success: function (html) {
					$(".contact-form").slideUp(800);
					$("#answer").html(html);
				},
			});
			return false;
		}
	}
});
	if (document.querySelector(".video-bg")) {
		if (document.documentElement.clientWidth >= 1183){
			$(window).on("load", function () {
				$(".video-bg").vide("./video/cover", {
					bgColor: "#5F9EA0",
				});
			});
		}
	}
