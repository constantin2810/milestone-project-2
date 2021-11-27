
# Milestone-Project-2

<h1 align="center"> Milestone Project 2</h1>

[View the live project here.](https://constantin2810.github.io/milestone-project-2/)



## **About**

-   ### This is the main website for my "Milestone Project 2".

  1. It is designed to be responsive and accessible on a range of devices, making it easy to navigate for potential students and partners.
  2. I created a simple memory game using HTML5, CSS3, and Javascript. Users will be able to reveal some images and memorize the location of the picture. 
  3. The purpose of this game is to reveal all the same images.

 -   #### Here is the list of the requirements for my code.

        - I have had a statistic game that will display a number of image clicks.
        - I used 8 different unique images with a total of 16 images. Each of a unique image will be duplicated. That's why 8 x 2 = 16 images. 
        - My statistic game will display a number of image clicks .
        - When creating the game, I considered that users can easily access it from a mobile, a tablet or laptop, therefore to view of the game will be automatically resized accordingly.

 -   #### Here is the list of the game logic.

        - In the game canvas, there will be two layers available. The first layer will contain images covered by the top layer.The top layer will have other images to cover the first ones to be displayed or revealed.
        - I will create an array of 16 images slots which will contain 8 unique images and a copy of another 8 duplicated images. Once created, will shuffle the 16 images, so every time the game is loaded, they are randomly placed.
        - Users will be able to reveal the image by clicking the image cover. Users can click two images at a time. If both images do not match, then they will be closed again otherwise, if they do match, they will stay open. I used CSS to flip the image open and close.
        - I created the statistic game which will display a number of image clicks and number of correct guesses.
        - When users have revealed all images, will by then display a message box to congrats users. After that, users will be able to restart the game again. By default, will hide this message.


- ### I have been inspired by this websites : 
     - https://www.freememorygame.com/?dn=Card%20Game;
     - https://www.memozor.com/memory-games/for-adults/deck-of-cards

<h2 align="center"><![Am I Responsive image of how the landing page looks across different browser sizes](../images/responsive img.png)></h2> 

## User Experience (UX)

-   ### User stories

    -   #### First Time Visitor Goals

        1. As a First Time Visitor, I want to easily understand the main purpose of the site and learn more about the organisation.
        2. As a First Time Visitor, I want to be able to easily navigate throughout the site to find content.
        3. As a First Time Visitor, I want to look for testimonials to understand what their users think of them and see if they are trusted. I also want to locate their social media links to see their followings on social media to determine how trusted and known they are.

    -   #### Returning Visitor Goals

        1. As a Returning Visitor, I want to find information about coding challenges.
        2. As a Returning Visitor, I want to find the best way to get in contact with the organisation with any questions I may have.
        3. As a Returning Visitor, I want to find community links.

    -   #### Frequent User Goals
        1. As a Frequent User, I want to check to see if there are any newly added challenges or hackathons.
        2. As a Frequent User, I want to check to see if there are any new blog posts.
        3. As a Frequent User, I want to sign up to the Newsletter so that I am emailed any major updates and/or changes to the website or organisation.

-   ### Design
    -   #### Colour Scheme
        -   The main colours used are blue-blueviolet and pink.
    -   #### Typography
        -   The 'Bona Nova', serif font is the main font used throughout the whole website.
    -   #### Imagery
        -   Imagery is important. The large, background image is designed to be striking and catch the user's attention.
        https://www.microsoft.com/ro-ro/bing/bing-wallpaper?pc=w084&rtc=1

## Features

-   Responsive on all device sizes

-   Interactive elements

## Technologies Used

This Website uses several technlogies & frameworks to deliver its theme, layout and functionality. These include Html5, CSS3 & Javascript.

### Languages Used

-   [HTML5](https://en.wikipedia.org/wiki/HTML5)

- The language used to give the site its main structure and all necessary features.

-   [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)

- The language used to give the application its visual effects including the font, color and layout etc.

-   [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

  - The language used to implement the site's interactive features, allow the users to be interactive and make actions during their visit.

### Frameworks, Libraries & Programs Used

1. [Hover.css:](https://ianlunn.github.io/Hover/)
    - Hover.css was used on the Social Media icons in the footer to add the float transition while being hovered over.
1. [Google Fonts:](https://fonts.google.com/)
    - Google fonts were used on all pages throughout the project.
1. [Font Awesome:](https://fontawesome.com/)
    - Font Awesome was used to add icons for aesthetic and UX purposes.
1. [jQuery:](https://jquery.com/)
    - jQuery came with Bootstrap to make the navbar responsive but was also used for the smooth scroll function in JavaScript.
1. [Git](https://git-scm.com/)
    - Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.
1. [GitHub:](https://github.com/)
    - GitHub is used to store the projects code after being pushed from Git.
1. [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
   - The language used to implement the site's interactive features, allow the users to be interactive and make actions during their visit.



## Testing

The W3C Markup Validator and W3C CSS Validator Services were used to validate every page of the project to ensure there were no syntax errors in the project.

-   [Nu Html Checker](https://validator.w3.org/nu/) - [Results](https://github.com/)

-   [W3C CSS Validator](https://jigsaw.w3.org/css-validator/#validate_by_input) - [Results](https://github.com/)

### Testing User Stories from User Experience (UX) Section

-   #### First Time Visitor Goals

    1. As a First Time Visitor, I want to easily understand the main purpose of the site and learn more about the organisation.

      Upon entering the site, users are automatically greeted with a clean and easily readable navigation bar to go to the page of their choice. Underneath there is a Image with Text "Charity running".
        
        

    2. As a First Time Visitor, I want to be able to easily be able to navigate throughout the site to find content.

        The site has been designed to be fluid and never to entrap the user. At the top of each page there is a clean navigation bar, each link describes what the page they will end up at clearly.
        On the Contact Us Page, after a form response is submitted, the page refreshes and the user is brought to the top of the page where the navigation bar is.


-   #### Returning Visitor Goals

    1. As a Returning Visitor, I want to find the new programming challenges or hackathons.

        1. These are clearly shown in the banner message.
        2. They will be directed to a page with another hero image and call to action.

    2. As a Returning Visitor, I want to find the best way to get in contact with the organisation with any questions I may have.

        1. The navigation bar clearly highlights the "Contact Us" Page.
        2. Here they can fill out the form on the page or are told that alternatively they can message the organisation on social media.
        3. The footer contains links to the organisations Facebook, Twitter and Instagram page as well as the organization's email.
        4. Whichever link they click, it will be open up in a new tab to ensure the user can easily get back to the website.
        5. The email button is set up to automatically open up your email app and autofill there email address in the "To" section.

    3. As a Returning Visitor, I want to find the Facebook Group link so that I can join and interact with others in the community.
         The Facebook Page can be found at "Join Now" page and will open a new tab for the user and more information can be found on the Facebook page.   

-   #### Frequent User Goals

    1. As a Frequent User, I want to check to see if there are any newly added challenges or hackathons.

        1. The user would already be comfortable with the website layout and can easily click the banner message.

    2. As a Frequent User, I want to check to see if there are any new blog posts.

        1. The user would already be comfortable with the website layout and can easily click the blog link

    3. As a Frequent User, I want to sign up to the Newsletter so that I am emailed any major updates and/or changes to the website or organisation.
        1. At the bottom of every page their is a footer which content is consistent throughout all pages.
        2. To the right hand side of the footer the user can see "Subscribe to our Newsletter" and are prompted to Enter their email address.
        3. There is a "Submit" button to the right hand side of the input field which is located close to the field and can easily be distinguished.

### Further Testing

-   The Website was tested on Google Chrome, Internet Explorer, Microsoft Edge and Safari browsers.
-   The website was viewed on a variety of devices such as Desktop, Laptop, iPhone7, iPhone 8 & iPhoneX.
-   A large amount of testing was done to ensure that all pages were linking correctly.
-   Friends and family members were asked to review the site and documentation to point out any bugs and/or user experience issues.


### GitHub Pages

The project was deployed to GitHub Pages using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
2. At the top of the Repository (not top of page), locate the "Settings" Button on the menu.
    - Alternatively Click [Here](https://raw.githubusercontent.com/) for a GIF demonstrating the process starting from Step 2.
3. Scroll down the Settings page until you locate the "GitHub Pages" Section.
4. Under "Source", click the dropdown called "None" and select "Master Branch".
5. The page will automatically refresh.
6. Scroll back down through the page to locate the now published site [link](https://github.com) in the "GitHub Pages" section.

### Forking the GitHub Repository

By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
2. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
3. You should now have a copy of the original repository in your GitHub account.

### Making a Local Clone

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
2. Under the repository name, click "Clone or download".
3. To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
4. Open Git Bash
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type `git clone`, and then paste the URL you copied in Step 3.

```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
```

7. Press Enter. Your local clone will be created.

```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
> Cloning into `CI-Clone`...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.
```

Click [Here](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository#cloning-a-repository-to-github-desktop) to retrieve pictures for some of the buttons and more detailed explanations of the above process.

## Credits

### Code




### Content

-   All content was written by the developer.


### Acknowledgements

-   My Mentor Antonio Rodriguez for encouragement,patience and continuous helpful feedback.Thanks to him for his advise, guidance and support.

-   Tutor support at Code Institute for their support.

-     THANK YOU all for your support.



