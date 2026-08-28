---
layout: post
title: About
permalink: /about/
comments: true
---

## As a conversation Starter

Here are some places I have lived.


<style>
    /* Style looks pretty compact, 
       - grid-container and grid-item are referenced the code 
    */
    .grid-container {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); /* Dynamic columns */
        gap: 10px;
    }
    .grid-item {
        text-align: center;
    }
    .grid-item img {
        width: 100%;
        height: 100px; /* Fixed height for uniformity */
        object-fit: contain; /* Ensure the image fits within the fixed height */
    }
    .grid-item p {
        margin: 5px 0; /* Add some margin for spacing */
    }

    .image-gallery {
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 12px;
        align-items: stretch;
    }

    .image-gallery img {
        width: 100%;
        height: 220px;
        object-fit: cover;
        border-radius: 8px;
        display: block;
    }

    @media (max-width: 768px) {
        .image-gallery {
            grid-template-columns: repeat(3, minmax(0, 1fr));
        }
    }

    @media (max-width: 480px) {
        .image-gallery {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
    }
</style>

<!-- This grid_container class is used by CSS styling and the id is used by JavaScript connection -->
<div class="grid-container" id="grid_container">
    <!-- content will be added here by JavaScript -->
</div>

<script>
    // 1. Make a connection to the HTML container defined in the HTML div
    var container = document.getElementById("grid_container"); // This container connects to the HTML div

    // 2. Define a JavaScript object for our http source and our data rows for the Living in the World grid
    var http_source = "https://upload.wikimedia.org/wikipedia/commons/";
    var living_in_the_world = [
        {"flag": "a/a4/Flag_of_the_United_States.svg", "greeting": "Hello!", "description": "America - home"},
        {"flag": "4/41/Flag_of_India.svg", "greeting": "aap kese ho", "description": "India - roots"},
        {"flag": "b/be/Flag_of_England.svg", "greeting": "can I have a bottle of WATER", "description": "London - second home "},
    ];

    // 3a. Consider how to update style count for size of container
    // The grid-template-columns has been defined as dynamic with auto-fill and minmax

    // 3b. Build grid items inside of our container for each row of data
    for (const location of living_in_the_world) {
        // Create a "div" with "class grid-item" for each row
        var gridItem = document.createElement("div");
        gridItem.className = "grid-item";  // This class name connects the gridItem to the CSS style elements
        // Add "img" HTML tag for the flag
        var img = document.createElement("img");
        img.src = http_source + location.flag; // concatenate the source and flag
        img.alt = location.flag + " Flag"; // add alt text for accessibility

        // Add "p" HTML tag for the description
        var description = document.createElement("p");
        description.textContent = location.description; // extract the description

        // Add "p" HTML tag for the greeting
        var greeting = document.createElement("p");
        greeting.textContent = location.greeting;  // extract the greeting

        // Append img and p HTML tags to the grid item DIV
        gridItem.appendChild(img);
        gridItem.appendChild(description);
        gridItem.appendChild(greeting);

        // Append the grid item DIV to the container DIV
        container.appendChild(gridItem);
    }
</script>

### Journey through Life

Here is what I did at those places

- 🏫 Lots of Elementary Schools in Creekside Elementary School in San Diego and ACS Cobham in London
- 🏫 Middle School in San Diego: Oak Valley Middle School 
- 🎓 High School in San Diego as well: Del Norte High School 
- ⛪ I am a junior in highschool and will graduate 2028 
- 💼 I am taking computer science, ap chemistry, ap us history, ap calc, and ap english language right now 
- 🎓 I want to major in Cell and Molecular Biology and minor in Computer Science 
- 💼 I hope to become a genetic engineer when I am older

### Family

Everything for me, as for many others, revolves around family and friends i love everyobe. 

- I have two brothers, one older and one younger so I am the middle child!
- I also have a dog, named cosmo. He is my best friend and he is 5 years old now. 
- Most of my family lives in either India or London. So I don't see them often but I have a very big family. 
- Since my mom has 5 other siblings, our family tree is very big. I have a ton of cousins, aunts and uncles. 

### Culture and Fun
- I have been an avid dancer and swimmer for the past 10 years of my life 
- I do indian classical dance, competitve swim, and have recently started running daily
- I also have done piano since I was 4 
- I am a very creative person and is constantly doing different crafts
- My biggest passions are building legos, drawing, and spending time with my dog 

</comment>
<div class="image-gallery">
  <img src="{{site.baseurl}}/images/about/missionary.jpg" alt="Image 1">
  <img src="{{site.baseurl}}/images/about/john_tamara.jpg" alt="Image 2">
  <img src="{{site.baseurl}}/images/about/tamara_fam.jpg" alt="Image 3">
  <img src="{{site.baseurl}}/images/about/surf.jpg" alt="Image 4">
  <img src="{{site.baseurl}}/images/about/john_lora.jpg" alt="Image 5">
  <img src="{{site.baseurl}}/images/about/lora_fam.jpg" alt="Image 6">
  <img src="{{site.baseurl}}/images/about/lora_fam2.jpg" alt="Image 7">
  <img src="{{site.baseurl}}/images/about/pj_party.jpg" alt="Image 8">
  <img src="{{site.baseurl}}/images/about/trent_family.png" alt="Image 9">
  <img src="{{site.baseurl}}/images/about/claire.jpg" alt="Image 10">
  <img src="{{site.baseurl}}/images/about/grandkids.jpg" alt="Image 11">
  <img src="{{site.baseurl}}/images/about/farm.jpg" alt="Image 12">
</div>
