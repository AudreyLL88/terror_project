# T-erroR#
---
![Hero Screenshot](img/screenshot.png)

## Contents ##
---

* UX
    * [Project Goals](#project-goals)
    * [User Goals](#user-goals)
    * [User Stories](#user-stories)
    * [Site Owner Goals](#site-owner-goals)
    * [User Requirements and Expectations](#requirements)
    * [Design Choices](#design-choices)
        * [Fonts](#fonts)
        * [Icons](#icons)
        * [Colors](#colors)
* [Wireframing](#wireframing)
* [Features](#features)
    * [Features that have been developed](#developed)
    * [Features that will be implemented in the future](#implemented)
* [Technologies](#technologies)
* [Testing](#testing)
* [Issues](#issues)
* [Deployment](#deployment)
* [Credit](#credits)

## UX (User Experience) ##
---
<a name="project-goals"></a>
### Project Goals ###

The **goal** for this project is to create an **horror-oriented timed quizz** called **T-erroR** that question the user about their knowledge of horror movies and gives a survival score at the end.

<a name="user-goals"></a>
### User Goals ###

* **Testing his/her/their knowledge** on **Horror movies** within **15sec** per question.
* **Being entertained** by the game.
* **Playing** all the **cards**.
* **Score high** on all cards.
* Get a **final score for survival**.
* **Play** the game **again**.

<a name="user-stories"></a>
### User Stories ### 

* The **user** wants an **attractive game**.
* The **user** wants **clear instructions**
* The **user** wants to be **challenged** in his/her/their **knowledge** of **horror movies**.
* The **user** wants to have **diversity** in question difficulty.
* The **user** wants to get a maximum of points.
* The **user** wants to **survive** the game.

<a name="site-owner-goals"></a>
### Site Owner Goals ###

All **site owner** goals have to be read aloud as a **Baseline Test** from **Blade Runner**

*


### User Requirements and Expectations ###

<a name="requirements"></a>

### Requirements ###

* 


**Expectations**

*

<a name="design-choices"></a>

### Design Choices ###
---
* When developing this **game**, I kept in mind that the aesthetic should be inspired by Horror Movies. I tried to create a moody and slightly unnerving ambiance for the landing page and a cleaner, colder approach for the card page.
* I found a [**Youtube quizz tutorial**](https://www.youtube.com/watch?v=pQr4O1OITJo) that I first **coded along** in this [**repository**](https://github.com/AudreyLL88/quizz) and adapted to my needs.

<a name="fonts"></a>

### Fonts ###

* The **landing page** is using the  horror classic **Google Fonts** **Denk One** for the H1 and H3. That font is associated with a [**Neon effect**](https://codepen.io/AllThingsSmitty/pen/VzXrgY) and a [**slow Pulse effect**](https://tilomitra.github.io/infinite/) on the H1.
I chose the pulsing effect because of its association with a heartbeat, which is a sound often associated with horror and fear. I paired it with the **Google Fonts** **Montserrat** for readability.
* The **card page** is using **Denk One** again for the **H3 page title** paired with **Montserrat** on the **instructions** in the **header** as well as on the **cards**.
* I kept the **Montserrat** font for **better user experience** in the **quizz** and **avoid confusion**.

<a name="icons"></a>

### Icons and Images ###

* **All icons** used on the website are provided by [**FontAwesome**](https://fontawesome.com/) on the **card result** and **final result boxes**.
* The **image** used for the **landing page** is a **free image** from the image bank [**Pixabay**](https://pixabay.com/sv/) with a simple research with the keyword **spooky**.
* **All cards images** have been custom made by **Ivar Dahlberg** (aka my husband) for this **game**.

<a name="colors"></a>

### Colors ###

* The **color scheme** used for the website is a classic **slasher poster palette** composed of a combination of **dark and light reds** for the **title** as well the **buttons** on the **cards** and the **quizz** paired with an **off-black** and **pure white**.
* The **gradients** used for the **body** and the **Quizz background** can both be found on [**Ui Gradients**](https://uigradients.com/) under the names **Frozen** and **Anwar**.

![Color Scheme](img/palette.png) 
![Inspiration](img/poster.jpg)

<a name="wireframing"></a>

## Wireframing ##
---
For **wireframing** I used the tool [**Balsamiq**](https://balsamiq.com/).

View my wireframes [here](img/t-error.pdf).

* As you can see this is **a minimal wireframe** and I pushed a few changes for better readability and engagement:
* I added **a full-screen hero image** on the landing page.
* I added a **full-screen background** behind the quizz box rather than letting the cards visible in the background.

<a name="features"></a>
## Features ## 
---

<a name="developed"></a>
### Implemented Features ###

* **Responsiveness** on all screen sizes.
* **Pulsing neon title** for attractiveness and engagement.
* **Cards flipped on hover** as an introduction to the theme and choice management for the user. One card cannot be played multiple times.
* **Instruction box** displayed on click on the same page as the card game .
* **Multiple choice quizz box with timer** taking information from an array depending on which card is played .
* **Card Score** at the end of each card played.
* **Final Score** based on each card score when all cards are played.

<a name="implemented"></a>
### Future implemented features ###

* Image hint.
* Ratings on the game.


<a name="technologies"></a>
## Technologies used ##

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [Javascript]()
* [JQuery](https://jquery.com/)


**Tools & Libraries**


* [Bootstrap](https://getbootstrap.com/)

* [Font-Awesome](https://fontawesome.com/icons?d=gallery)
* [Google fonts](https://fonts.google.com/)
* [Gimp](https://www.gimp.org/)
* [Git](https://git-scm.com/)
* [Hover.css](https://ianlunn.github.io/Hover/)

<a name="testing"></a>

## Testing ##
---
![Testing](assets/images/screenshot_responsive.png)

* I tested the responsiveness of the website by using the [**Google Chrome DeveloperTool**](https://developers.google.com/web/tools/chrome-devtools) as well as the plug-in **Unicorn Revealer** to control my overflow and the website [**Am I Responsive**](http://ami.responsivedesign.is/). 
* I also tested my website on **different browsers and real devices** : **Iphone 6s, Iphone X, Ipad Pro 12", Macbook air and Samsung Galaxy S20.**
* I used a first **dirty version** of this project on **Gitpod** and **refactored** my code **step by step** to remove any **useless classes**
* I tested my CSS file and my HTML files using [**CSS Validator**](https://jigsaw.w3.org/css-validator/) and [**HTML Validator**](https://validator.w3.org/).
* All pages passed the HTML and CSS validator final test.

**Responsiveness**

* **Implementation** 

* I used the **Bootstrap** as well as **flexbox and custom CSS media queries** to ensure that the website didn't break on all screen sizes.
* To ensure that the **hover** class would work on IOS, I used the poetic attribute **ontouchmove** in the html tag of card.html.

**Cards**

![Contact](assets/images/screenshot_contactform.png)

* **Implementation** 

I used the **contact form** that was introduced to us during [**the mini project challenge**](https://github.com/AudreyLL88/mini-project-cv) because I liked how it sit **in the middle of the page and is very straightforward**. I wanted to add **an "add images" button** but realized that **I needed to know some JS**. I customized it a bit by **adding margins, a checkbox and a modal button**. As skills grows, **JavaScript** will be introduced to **ensure** that the form must be **validated before modal appears**. For now the **contact form** doesn't work as it is not using a **PHP**. 
All input elements work and **are responsive**.

**Google Calendar**

![Calendar](assets/images/screenshot_booking.png)

* **Implementation**

Embedding a **Google Calendar** is pretty straightforward and customable within the Google site and I initially did some **inline styling in the iframe** so the calendar would take **100% width/height of the column on all device**... and **HTML Validator didn't like that** so I moved it to **CSS**, which all validators liked. Good Job me.

**Registration Forms**

* **Implementation**

**Bootstrap** has extensive **documentation** about forms so I extracted the code from **the Bootstrap documentation** and build my own **fitting input areas** and **modal buttons**. I fitted the form on **lg and md screen next to the calendar** and **for sm screens I fitted it under the calendar** and added some **padding** between the sections in a **corresponding media query**. As skills grows, **JavaScript** will be introduced to **ensure** that the form must be **validated before modal appears**. For now the **registration form** doesn't work as it is not using a **PHP**,

**Image Gallery**

![Gallery](assets/images/screenshot_gallery.png)

* **Implementation**

**My mentor** suggested after seeing my **wireframe** during our preliminary meeting that I should use the **Fancybox library**. After researching it, I **resized my images with Gimp** to create the thumbnails and used this [**Bootstrap gallery template**](https://startbootstrap.com/snippets/thumbnail-gallery/) for the **responsivness** and added the **Fancybox "data-fancybox"** and **alt text**.**

**Modal buttons**

![Modal](assets/images/screenshot_modal.png)

* **Implementation**

* I used the **Bootstrap documentation** to implement a **modal on button click** in the **contact form** and the **registration form** and **customized it** with according text and button styling.

<a name="issues"></a>
## Issues ##
---

I still have **nightmares** about **bootstrap cards**. **The horror, oh the horror**. It doesn't show on my commits because I wanted to commit only when I was satisfied with it.

But that's not all, so here we go:

**During development**

* **Cards responsivness:**
* Initial card image top didn't fit on lg screen so I went for a bigger image.
* Then the card was taking too much width on lg and sm screen (strangely it was ok on md screen) no matter what grid system I would use. So I started again from zero.
* Extracted the code from the Bootstrap library and added the .card-img-top class to my image and it worked.
* I almost cried of happiness.
* Then I added a list in the card-body and everything broke down in lenght because it was too much text.
* So I decided to go for a small paragraph of text and it looked a 100% times better. To me the cards are still a bit long and this is something I will work more on in the future.

**Overflow**
* After deploying my website and submitting it for peer-review on Slack another student picked on my website having a bit of overflow on mobile.
* I downloaded Unicorn Revealer (Chrome extenstion), grabbed a web designer friend and discovered it was the bootstrap row class in the hero-container of my Title section in index.html.
* I removed it and it now works beautifully.

## Deployment ##
---
Electric LadyLand Silver was developed on **GitPod**, using **GitHub** to host the repository and deployed on **GitHub Pages**.
**GitHub** made the deployment extremely painless:

* Connected to Github
* Selected the repository **AudreyLL88/Electric_LadyLand_Silver**
* Clicked on **"settings"** in the navigation bar
* In the **GitHub Pages** I selected **Master Branch** and **/root** in the dropdown menu and clicked **Save**
* I waited 2 minutes.
* And voila! **The website is now live on  https://audreyll88.github.io/Electric_LadyLand_Silver/**

**Cloning ?** No problem:

* In my repository **AudreyLL88/terror_project**, click on the **"Code** green button, **copy in clipboard the HTTPS link**, open your **browser** and look through my files.
* The link : **https://github.com/AudreyLL88/terror_project.git**

<a name="credits"></a>
## Credits ##
---

**Text Credits:**

* All text content has been written by yours truly, Audrey Laurène Lloancy.

**Many thanks to:**

* My mentor **Ignatius Ukwuoma** for his patience and kindness
* **Byllsa** for her very inspiring ReadME
* **Code Institute Slack community** for the technical and emotional support
* **Ivar Dahlberg**, for all the beautiful designs he created and his assistance
* **Mesaicos Stockholm LandHockey team** for cutting me some slack for not being very alert (and I am the goalkeeper...)

**Site for educational purposes only!** (for now)
