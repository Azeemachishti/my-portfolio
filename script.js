/* *********** */
/* variables */
/* *********** */
const yearEl = document.getElementById("year");
const projectsEl = document.getElementById("projects");
const filterEls = document.querySelectorAll("#filters li");

// filterEls[0].addEventListener('click', function() { 
// 	console.log('clicked')
// })
// filterEls[1].addEventListener('click', function() { 
// 	console.log('clicked')
// })
// filterEls[2].addEventListener('click', function() { 
// 	console.log('clicked')
// })
// filterEls[3].addEventListener('click', function() { 
// 	console.log('clicked')
// })
// filterEls[4].addEventListener('click', function() { 
// 	console.log('clicked')
// })
// filterEls[5].addEventListener('click', function() { 
// 	console.log('clicked')
// })

for (let i = 0; i < filterEls.length; i++) {
	filterEls[i].addEventListener('click', function (e) { 
		document.querySelector("#filters li.active").classList.remove('active');
		filterEls[i].classList.add('active');
		let tag = e.target.id;
		renderProjects(tag);
	})
}

yearEl.innerHTML = new Date().getFullYear();

/* *********** */
/* projects */
/* *********** */
const projects = [
	{
		name: "edyoda stories",
		img: "download.png",
		codeUrl: "https://github.com/Azeemachishti/my-assignment-2.git",
		liveUrl: "https://azeemachishti.github.io/my-assignment-2/edyoda-stories.html",
		tags: ['html', 'css']
	},
	{
		name: "Nuuk Web App",
		img: "nuuk.jpeg",
		codeUrl: "https://github.com/Azeemachishti/nuuk-web-app.git",
		liveUrl: "https://azeemachishti.github.io/nuuk-web-app/",
		tags: ['html', 'css']
	},
	{
		name: "Dynamic Html Grid",
		img: "grid.png",
		codeUrl: "https://github.com/Azeemachishti/html-grid.git",
		liveUrl: "https://azeemachishti.github.io/html-grid/",
		tags: ['css', 'js']
	},
	{
		name: "Favourite food Web App",
		img: "food.jpg",
		codeUrl: "https://github.com/Azeemachishti/edyoda-assignment-1.git",
		liveUrl: "https://azeemachishti.github.io/edyoda-assignment-1/assignment1.html#chole",
		tags: ['html' , 'css']
	},
	{
		name: "Quiz App",
		img: "quiz.jpg",
		codeUrl: "https://github.com/Azeemachishti/quiz-app.git",
		liveUrl: "https://azeemachishti.github.io/quiz-app/",
		tags: ['js']
	},
	{
		name: "Change BG",
		img: "bg.jpg",
		codeUrl: "https://github.com/Azeemachishti/js-practice-1.git",
		liveUrl: "https://azeemachishti.github.io/js-practice-1/js-practice-01-change-bg.html",
		tags: ['js']
	},
	{
		name: "Digital Clock",
		img: "img.jpg",
		codeUrl: "https://github.com/Azeemachishti/digital-clock.git",
		liveUrl: "https://azeemachishti.github.io/digital-clock/",
		tags: ['js']
	},
	{
		name: "To Do App",
		img: "n.jpg",
		codeUrl: "https://github.com/Azeemachishti/to-do-list.git",
		liveUrl: "https://azeemachishti.github.io/to-do-list/",
		tags: ['js']
	},
];

function renderProjects(tag) {
	let output = "";

	for (let i = 0; i < projects.length; i++) {
		if(tag == 'all' || projects[i].tags.includes(tag)) {
				output += `<div class="project">
				<div class="project-img">
				<img src="img/project/${projects[i].img}" alt="Calculator Project Image">
				</div>
				<div class="content flex">
					<p>${projects[i].name}</p>
					<p class="flex">
						<a href="${projects[i].codeUrl}" target="_blank"><img src="img/icon/github.svg" alt="GitHub"></a>
						<a href="${projects[i].liveUrl}" target="_blank"><img src="img/icon/arrow-up-right-from-square-solid.svg" alt="External link"></a>
					</p>
				</div>
			</div> `;
		}
	}
	
	projectsEl.innerHTML = output;
}

renderProjects('all');