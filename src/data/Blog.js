const Blog = [
	{
		title: "Good Times Bad Times",
		subtitle: "",
		text:
			`
			<p class = "entryText centerText" id = "emoji">
					<i class="em em-star2"></i>
					<i class="em em-books"></i>
					<i class="em em-orange_book"></i>
					<i class="em em-bow"></i>
					<i class="em em-computer"></i>
					<i class="em em-earth_americas"></i>
					<i class="em em-car"></i>
					<i class="em em-sparkles"></i>
				</p>
				<p class = "entryText">In March of 2016 I started learning to code, beginning a transition from a background in science into the world of technology.
				These days, there are a lot of people trying to learn to code, many of them self-taught, and a <i>lot</i> of resources available to help them do it.
				It can be hard to find a clear path. What I write here describes how I solved this problem.</p>
				<p class = "entryText">This writing is also a record of my journey across America. In October of 2016, I set out from Tennessee to drive westward to San Francisco
				with one goal in mind: to secure a new life and career as a software developer. The story written here is the record of that journey, as well.</p>
				<img id = "zeppelinImg" src = "images/led-zeppelin.jpg" alt = "A Led Zeppelin" />
				<p class = "entryText">Here, then, is my adventure across America, my path into programming, threaded together in a sometimes sarcastic, sometimes opinionated, somewhat verbose, autobiographical tale.
				If you want to learn more about me, <a target = "_blank" href = "http://www.sean-smith.me">please go here</a>.</p>
			`
	},
	{
		title: "Immigrant Song",
		subtitle: "Day 1: Knoxville, Tennessee (October 7, 2016)",
		text:
			`
				<p class = "entryText quoteText"><span class="s1"><em>We come from the land<br />of the ice and snow,<br /><br /></em></span><em>From the midnight sun<br />where the hot springs flow.<br /><br /></em><em>Hammer of the gods,<br />will drive our ships to new land.<br /><br /></em><em>To fight the hordes,<br />and sing and cry.<br /><br /></em><em>Valhalla I am coming.</em></p>
				<p class = "entryText">I woke up this morning in Knoxville, TN and decided it was time I drove west across the country and started a new life and career as a software developer. Twelve hours later I was on the road.</p>
				<p class = "entryText">This may sound like an extreme and impulsive decision, certainly a reckless one if anyone was to inspect the lifeless state of my bank account, but I see it as the natural, if severe, culmination of the last few years of my life. Let's hope it doesn't crash in flames like that Hindenburg.</p>
				<p class = "entryText">When I graduated in 2014 with degrees in biochemistry and anthropology I was rapidly realizing I had little interest in pursuing any career in these fields. I returned from pipetting DNA and analyzing proteins to Nashville, TN without any idea what I was going to do with my life. Fast forward six months and I had started a business with my friend selling t-shirts with Hebrew words and lion-gorilla hybrid animals on them. Yep, you read that right. Look it up, most people don't realize the tail isn't natural. <a target = "_blank" href = "http://www.firgon.com">Firgon Outfitters</a> lives on today, albeit in fits and starts, it lives on.</p>
				<p class = "entryText">Meanwhile, I was setting climbing routes at a climbing gym. Bolting glorious plastic replicas of handholds, some inspired by nature, some imagined, onto the walls of the gyms that bring more and more people into the sport of rock climbing ever year.</p>
				<p class = "entryText">The outsider looks in: <em>&ldquo;Oh, you get to set the routes? That&rsquo;s awesome! You mean you get </em><strong><em>paid</em></strong> <strong><em>to</em></strong> <strong><em>climb?!?!</em></strong><em>&rdquo;</em></p>
				<p class = "entryText">The routesetter tries to explain the misunderstanding. They are not a professional climber. Those people get paid to climb. No, the routesetter is the one who gets paid to wage war daily against gravity, moving huge weights with mere human strength, and, if they are lucky, the assistance of simple mechanical tools. But, more often, just with mere human strength.</p>
				<p class = "entryText">The outsider sees the routesetter swinging around 50 feet in the air, hauling huge wooden structures up from the ground, holds dangling from these—ropes, buckets, gear hanging everywhere. <em>&ldquo;That&rsquo;s the coolest job ever!&rdquo;</em></p>
				<p class = "entryText">The routesetter weighs his paycheck against his constant fear that a trivial error will result in a serious injury. He wonders if it really is the <em>&lsquo;coolest job ever&rsquo;.</em></p>
				<p class = "entryText">This was the incessant love-hate relationship between me and routesetting. I just couldn&rsquo;t seem to leave it, despite how much I wanted to. So it was somewhere in there, between the mutant gorillas and the swinging around on ropes, that I woke up the other day with my eyes set westward, knowing it was time for a change.</p>
				<p class = "entryText quoteText"><em>Always sweep with,<br />with threshing oar.<br /><br /></em><em>Our only goal<br />will be the western shore.</em></p>
				<p class = "entryText">Since March of this year, since the day of my birthday, in fact, I had been furiously trying to learn to code. I made up my mind on that day that I was going to take my life in a new direction and so I went to work, scouring the internet trying to devise a plan for the future as I contemplated entering a new industry I had practically no knowledge of or experience in.</p>
				<p class = "entryText">Quickly, I became overwhelmed with the amount of material and advice that existed. The sheer amount of information is staggering. Later I would learn of JavaScript Fatigue, which refers to the overwhelming rate at which new frameworks are released into the open source JavaScript community (I believe it&rsquo;s like one a day, now?), but for a novice like me it was more like straight information fatigue.</p>
				<img id = "fatigueImg" src = "images/js-fatigue.png" alt = "JavaScript Fatigue" />
				<p class = "captionText">How if feels learning JavaScript in 2016</p>
				<p class = "entryText">Tutorials, blogs, bootcamps, MOOCs, podcasts, forums, Reddit, StackOverflow &mdash; where do you begin? What language do you learn? I hear C is good, wait what? Oh, C++ is better? But all enterprise software is written in Java? Ok, Java then. Wait, Ruby? No, I haven&rsquo;t tried Ruby, should I try Ruby? No, not Ruby, Ruby <em>on Rails</em> is where it&rsquo;s at? But I heard a lot about Python too. Huh? what do you mean &ldquo;full stack JavaScript&rdquo; is the future? Oh, it&rsquo;s not, <em>functional </em>programming is the future? So I should just learn Haskell already? But what about Scala, it&rsquo;s functional, right? We could go on and on here&hellip;</p>
				<p class = "entryText">Fortunately, I quickly discovered <a target = "_blank" href = "https://www.freecodecamp.com/">Free Code Camp</a> and as I learned more about it decided this was by far the most accessible and effective means of entering the world of programming for someone like me. In person bootcamps were out of the question, returning to college was out of the question (I heard graduates can&rsquo;t even solve FizzBuzz anyway), and yes, I was quickly learning that full stack JavaScript may well be the future. At least a big part of the future, that is.</p>
				<img id = "fccImg" src = "images/fcc.png" alt = "Free Code Camp" />
				<p class = "captionText">It was like 4 months later that I realized their logo is a camel-cased function call. And the birds are flying curly braces.</p>
				<p class = "entryText">So I dove headfirst into the Free Code Camp curriculum and promptly drowned. For anyone unfamiliar with FCC, it is a free and open source community that provides a self-paced educational curriculum based on full stack JavaScript development. To provide some perspective, in recent years the JavaScript community has literally exploded and proliferated at an exponential rate. Now it is a massive open source ecosystem with readymade solutions for almost any problem you could think of and it continues to grow at blistering speed. Projects like React Native are porting JavaScript to mobile devices with great success, more and more languages are adding JavaScript as a compile-target, people are even running JavaScript on IoT devices. It&rsquo;s awesome. Everyone loves it. No longer is JavaScript ridiculed for its quirks and birth defects.</p>
				<p class = "entryText centerText" id = "emoji">
					<i class="em em-heart"></i>
					<i class="em em-blue_heart"></i>
					<i class="em em-purple_heart"></i>
					<i class="em em-green_heart"></i>
					<i class="em em-yellow_heart"></i>
				</p>
				<p class = "entryText">All of these reasons make JavaScript a <em>good enough</em> choice for the aspiring developer trying to decide where to begin. No more regret that I was missing the static type safety of Java or the expressivity of Python or the speed of C. I was going to master JavaScript and trust the people who said once you learned the core concepts of programming in one language it isn&rsquo;t that hard to learn others. I was going to trust that the creators of Free Code Camp knew what they were doing. Besides, Moore's Law right?</p>
				<p class = "entryText">Now, back to me thrashing about in the depths of the Free Code Camp ocean. For a beginner, the challenges in the first certification are no small feat. You struggle to understand what jQuery is and marvel wide-eyed at callback functions and novelties like objects. Sadly, these are just the beginnings of modern JavaScript&rsquo;s complexity. Once you begin to learn about &lsquo;this&rsquo;, prototypes, inheritance (or is it behavior delegation?), and the tidal wave that is ES6/7, well, let&rsquo;s just say thank you, Quincy Larson, for leading the Free Code Camp community which quickly threw me a lifeline before I was trampled underwater.</p>
				<p class = "entryText quoteText"><span class="s1"><em>We come from the land<br />of the ice and snow,<br /><br /></em></span><em>From the midnight sun<br />where the hot springs flow.<br /><br /></em><em>How soft your fields so green.<br />Can whisper tales of gore.<br /><br /></em><em>Of how we calmed the tides of war.<br />We are your over Lords.</em></p>
				<p class = "entryText">Free Code Camp&rsquo;s forum and Gitter channels offer consistently useful and rapid responses to almost any query, representing an international community of students of all skill levels. Some who just solved what you are struggling with, some who are just beginning like you once were, some far more experienced than you who can offer vital counsel. Combine this with the brilliant design of Free Code Camp, which has you writing all your projects on CodePen and GitHub so your code is public and easy to share, and it couldn&rsquo;t be easier to get feedback and assistance.</p>
				<p class = "entryText">As long as we&rsquo;re talking about open source code, this is exactly what you want later on when you begin to apply for jobs: live projects and public code your prospective employer can scrutinize. Don&rsquo;t tell them you know React. Just show them a React app you wrote. This is what makes Free Code Camp&rsquo;s portfolio-focused curriculum, in my view, such an excellent solution to the problem of learning to code, <em>especially</em> for people without ready access to a college, bootcamp, or developer community. As a distributed learning platform, it is excellent, but it also serves perfectly the purpose of preparing you for professional employment. Kudos, Quincy.</p>
				<p class = "entryText">After months of effort working through the FCC curriculum, supplemented with books, podcasts, tutorials, and several MOOCs, I decided I had prepared sufficiently for the next stage in my journey. It was right about this time that I woke up with my mind suddenly aimed like a laser at the west coast tech mecca, a crude plan formulated in my mind (I would just drive from Starbucks to Starbucks, coding along the way—hey, I've got to get my artistic photo of coffee on a table next to a MacBook for my portfolio jumbotron somewhere). I had learned enough, I would finish the remaining FCC projects on the road and sharpen up my algorithm skills when I got there. I was prepared to solve FizzBuzz, at any rate.</p>
				<p class = "entryText"><span class="s1"> For centuries Americans have been traveling west in search of success and opportunity. Now, it was my turn.<br /></span></p>
				<p class = "entryText quoteText"><em>Always sweep with threshing oar,<br />Our only goal<br />will be the western shore.<br /></em></p>
				<p class = "entryText quoteText"><em>So now you'd better stop,<br />and rebuild all your ruins.<br /><br /></em><em>For peace and trust can win the day,<br />despite of all your losing.</em></p>
			`
	},
	{
		title: "Bring It On Home",
		subtitle: "Day 4: Nashville, Tennessee (October 10, 2016)",
		text: 
			`
				<p class = "entryText"> Nashville, my hometown, was my first stop. I stayed here a few days refining my plan, starting this blog, writing some code, and trying to scrape up some cash to make my credit-funded journey a little less reckless. To avoid getting too nostalgic about the city I grew up in, I&rsquo;ll talk a little more about Free Code Camp and learning to code here.</p>
				<img id = "skylineImg" src = "images/nashville_skyline_1.JPG" alt = "Nashville Skyline" />
				<p class = "captionText">Downtown Music City</p>
				<p class = "entryText">Free Code Camp&rsquo;s curriculum begins with the basics of HTML and CSS, which describe the structure and style of web pages, respectively, and quickly introduces JavaScript, which is the programming logic that runs ubiquitously on web browsers and is responsible for most moving parts you encounter on the web. With these fundamentals in hand, campers proceed to solve progressively more difficult algorithm challenges and built several front-end web projects that solidify a basic understanding of programming and introduce them to the use of APIs.</p>
				<p class = "entryText">The API projects include a service that queries Wikipedia and another that retrieves the user&rsquo;s local weather information, and the advanced front end projects include a productivity timer, a replica of the 1978 Simon game, and a Tic-Tac-Toe game that can&rsquo;t be beaten by the player.</p>
				<p class = "entryText">To the beginner, these are pretty challenging projects. However, from here things only become harder as the student encounters the back end and the confusing world of front end frameworks. The back end refers to server-side code that controls everything from user authentication to database management for modern websites and these days can be written in JavaScript (by way of Node.js), as well as other languages. Node.js, a JavaScript runtime environment, and its package manager, npm, provide easy to use solutions and tools for the back end and provide increasing support for so-called Universal JavaScript.</p>
				<p class = "entryText">Meanwhile, back on the front end are JavaScript libraries and web frameworks. These are pieces of software designed to facilitate the development of modern web applications by providing tools and abstractions for commonly encountered tasks. You have various users in a database and you want them to see different things when they login, that&rsquo;s the kind of problem a web framework might try to solve in an elegant manner. These days, there are a lot of frameworks and libraries that try to ease JavaScript development. So many, in fact, that JavaScript developers often become fatigued trying to understand them all.</p>
				<p class = "entryText">To return to our novice, he is now overwhelmed and drowning once again in JavaScript world. Those first front end projects had about three different files, html, css, and js&mdash;now you need several files, like 50 dependencies, and this strange module bundler called webpack to even get started. And, don&rsquo;t worry, in case you weren't overwhelmed yet you've also got five projects using D3.js, an admittedly awesome visualization library that is nonetheless very cryptic to beginners.</p>
				<p class = "entryText">Well, no one said becoming a software developer was going to be easy, anyway. Luckily the Nashville Downtown Library is a great place to find focus.</p>
				<img id = "libraryImg" src = "images/library.JPG" alt = "Nashville Downtown Library" />
			`
	},
	{
		title: "Black Dog",
		subtitle: "Day 6: Memphis, Tennessee (October 11, 2016)",
		text: 
			`
				<p class = "entryText"> Ah, how the blues of Memphis&rsquo; Beale Street remind me of Led Zeppelin&rsquo;s legendary music. Known well for barbecue, blues, and rock music, my favorite aspect of Memphis is still the mainstay known as Chinese Sub Shop. Seriously, if you find yourself in Memphis, don&rsquo;t leave without trying the Super Submarine Sandwich Shop. Unforgettable.</p>
				<img id = "chineseSubImg" src = "images/chinese-sub.JPG" alt = "Chinese Sub Shop" />
				<p class = "captionText">The 12" Super Sub. Chips are free.</p>
				<p class = "entryText">On another note, if you haven&rsquo;t noticed yet the numerous allusions to Led Zeppelin throughout this story, then that may explain anything odd you read that didn't make sense. I read once that a copy of <a target = "_blank" href = "https://en.wikipedia.org/wiki/Led_Zeppelin_II">Led Zeppelin II</a> is all you need to get through life as a teenager. If that&rsquo;s true then I would say that their full studio recordings are sufficient to get through life itself.</p>
				<p class = "entryText">The epic British rock band named the 2003 release of their 1972 performances in California <em>How the West Was Won</em> to refer to their musical conquest of a continent. Jimmy Page refers to these performances as Led Zeppelin at its peak and I couldn't agree with him more.</p>
			`
	},
	{
		title: "Communication Breakdown",
		subtitle: "Day 7: Fort Smith, Arkansas (October 12, 2016)",
		text: 
			`
				<p class = "entryText">I don't have a phone plan right now because I cancelled it to save money... hence why I am stopping here in Arkanas. <i class="em em-iphone"></i> <i class="em em-collision"></i> <i class="em em-collision"></i> <i class="em em-collision"></i> Each leg in my journey takes me to another destination where I can find wifi, GPS my next location, start a route, and then continue on my way. So far so good.</p> 
			`
	},
	{
		title: "Tea For One",
		subtitle: "Day 8: Oklahoma City, Oklahoma (October 13, 2016)",
		text: 
			`
				<p class = "entryText">I've finally made it to Oklahoma City! There is a lot of work I'd like to do while I'm here so I'll need to get started. Ideally, I'd like to finish all of Free Code Camp's Dynamic Web App projects, the last projects for the Back End Certification, before leaving. However, this might be too ambitious. Good thing my favorite food is close by. <i class="em em-stew"></i></p>
				<img id = "phoImg" src = "images/pho-bulous.JPG" alt = "Pho Bulous" />
				<p class = "captionText">"Pho Bulous" </p>
			`
	},
	{
		title: "Going to California",
		subtitle: "Day 22: Albuquerque, New Mexico (October 24, 2016)",
		text: 
			`
				<p class = "entryText">I've just left Oklahoma and will camp in Albuquerque tonight. The interstates are long, flat, and straight, with little traffic. Plenty of time to soak up some more information from podcasts.</p>
				<p class = "entryText centerText" id = "emoji">
					<i class="em em-sunny"></i>
					<i class="em em-tractor"></i>
					<i class="em em-corn"></i>
					<i class="em em-cactus"></i>
				</p>
				<img id = "windmills" src = "images/windmills.JPG" alt = "Willmills in the Midwest" />
				<p class = "captionText">Somewhere in Texas</p>
			`
	},
	{
		title: "Over the Hills and Far Away",
		subtitle: "Day 20: Bullhead City, Arizona (October 25, 2016)",
		text: 
			`
				<p class = "entryText">Now that I'm sitting comfortably in my tent in western Arizona on the banks of the Colorado River, I think I'll elaborate more on learning JavaScript through Free Code Camp. Having just driven through Texas, New Mexico, and most of Arkansas I've had plenty of time to reflect on my experience.</p>
				<img id = "bullhead" src = "images/bullhead.JPG" alt = "Colorado River Campground" />
				<p class = "captionText">The wind blew my tent into the river right after this</p>
				<p class = "entryText">After learning the basics of HTML, CSS, JS, and jQuery in the first certification, the second certification in the Free Code Camp curriculum introduces campers to two important JavaScript libraries: React and D3. Note: the curriciulum is in process of being revised so it's structure may be different in the future.</p>
				<p class = "entryText">React is a JavaScript library which was open sourced by Facebook a few years ago. Although the community initially greeted it with skepticism, it has since taken the JS world by storm and has spawned an entire ecosystem around itself.</p>
				<p class = "entryText">Right now, there are a ton of libraries and frameworks which serve similar purposes (hence fatigue) in JavaScript, but React is the one Free Code Camp chooses to focus its efforts on teaching (Angular was the previous choice). For aspiring developers working through the curriculum, it would be very difficult to know enough to be able to choose between all the frameworks available. React? Angular? Ember? Backbone? Knockout? Vue? — And so on. So it is good that Free Code Camp encourages a particular choice, and I think React is a great choice.</p>
				<p class = "entryText">However, something like React is a major step up from jQuery and plain vanilla JS. It's tough to learn for a beginner who might still be wondering what a framework even is, and React really only manages the so-called View layer of an application. The React projects were the first significant challenge I encountered that really stopped me in my tracks. I knew I wasn't understanding things very clearly and was just hacking together solutions based on ill-informed Google searches.</p>
				<p class = "entryText centerText" id = "emoji">
					<i class="em em-x"></i>
					<i class="em em-cold_sweat"></i>
					<i class="em em-confounded"></i>
					<i class="em em-dizzy_face"></i>
					<i class="em em-x"></i>
				</p>
				<p class = "entryText">I'm explaining this here because I think this is one of the most important learning experiences I've had through Free Code Camp. Things are changing so quickly in the development world and in technology in general, I think it's pretty well accepted now that to be successful you have to be very good at learning new skills. As I was struggling with React I said to myself, <em>"Listen, you need to figure out a way to learn this, and pay close attention to how you do it, because you will probably need the ability to learn something new again, and again, and again in the future."</em></p>
				<img id = "colorado-river" src = "images/colorado-river.JPG" alt = "Colorado River Campground" />
				<p class = "captionText">The Colorado River in the morning</p>
				<p class = "entryText">What I decided is that I would build 25 projects with React (story <a target = '_blank' href = 'http://sean-smith.me/assets/portfolio/25-react-projects/index.html'>here</a>), and to do this I started with simple tutorials and replicated them until I felt comforatable enough with the basics to branch out with my own ideas. Eventually, I went back and rebuilt all 8 of the front end projects in React (story <a target = "_blank" href ='https://medium.com/@bonham000/why-i-built-free-code-camps-front-end-projects-twice-c3dadfd03b6a#.1i8o43cfx'>here</a> and <a target = "_blank" href = "http://sean-smith.me/assets/portfolio/front-end-projects/index.html">here</a>), and then, finally, I went ahead and built the 5 Free Code Camp React projects.</p>
				<p class = "entryText">The process was to start small with simple pieces and build up from there, iterating and repeating the basics over and over again, and it proved to be very effective. Importantly, because I was focused at every point on a small but attainable goal, it was harder to fall into a trap of feeling overwhelming by a myriad of things I didn't understand, which was the very unproductive way I felt previously.</p>
				<p class = "entryText">This process gave me a very strong foundation with React and it has not been too hard to continue adding more pieces of the React ecosystem on top, such as Redux and React-Router (although these do feel like very natural extensions of React). Now, I can see why React has such an enthusiastic fanclub around it, I love working with it! I really think it makes the logic and organization of a web application much easier to conceptualize which results in better and more maintainable code.</p>
			`
	},
	{
		title: "Down By The Seaside",
		subtitle: "Day 22: San Francisco, California (October 27, 2016)",
		text: 
			`
				<p class = "entryText">I've finally arrived in San Francisco! <i class="em em-smile"></i> <i class="em em-smile"></i> <i class="em em-smile"></i> </p>
				<img id = "pacificOcean" src = "images/pacific-ocean.JPG" alt = "Pacific Ocean" />
				<p class = "entryText"> It's been a little over 10 years since I was last here, and I'm very happy to be back. The idea of 'finishing the last projects on the road' didn't quite work out... so I've got a lot of work to do here now as I try to finish up these last projects and begin searching for a job. But I am extremely excited to be here and can't wait to get started!</p>
				<img id = "usaMap" src = "images/USA.png" alt = "USA Map" />
			`
	},
	{
		title: "The Rover",
		subtitle: "Day 32: Daly City, California (November 5, 2016)",
		text: 
			`
				<p class = "entryText">With much effort I've now finished the 5 dynamic web app projects at the end of Free Code Camp's third certification, which marks my completion of their core curriciulum. This was really hard but I'm very happy to have now finished them all! I built all 5 of the apps as single page React/Redux applications with Node on the back end, so I can say I've definitely learned a ton about the entire JavaScript stack along the way. Now that I have these in my portofolio I will move on to what's next: finding and applying for jobs.</p>
				<p class = "entryText">With that said, here's an obligatory cat picture. <i class="em em-octocat"></i></p>
				<img id = "kitten" src = "images/kitten.JPG" alt = "Obligatory Cat Picture" />
			`
	}		
]

export default Blog;