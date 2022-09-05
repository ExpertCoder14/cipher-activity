# [repo title redacted] #
I have created an improved version of an activity for a coding summer camp. This document outlines the changes made.

## Original item ##

The original item can be viewed [here](https://docs.google.com/document/d/1S9xEaQ6JbI5sEl0dp7ObZB5Bd6C4OfKf2_PAcrgARaM/edit?usp=sharing). It has links to the questions and answers that would be used.

While they certainly work, they bear too much resemblance to a typical school worksheet, and parts contain information in small font sizes that can be hard to read. Some ciphers seem to have been hastily copied through low-resolution images. All these contribute to a low level of immersion.

## Changes made ##

To boost the level of immersion, I have created new versions of the activity pages. These were created by hand using the SVG file format, allowing for control over the layout of the entire page, as well as custom drawings and tables.

With these changes, each sheet is referred to as a "level". Each level's sheet is colour-coded, with green being the easiest cipher to crack, and black being the hardest to crack. The pages are organized into two sections: *"Decode This"* presents the message that needs to be deciphered, and *"Cipher Helper"* presents the supplementary information that is used to decipher said message. A small hint is provided in the bottom margin on some worksheets, as well as a checkbox in the bottom right which can be ticked once the sheet is solved.

Each page uses SVG techniques to make the page look very clean, tidy, and consistent. For an example, see `Page3.svg`, where the Pigpen Cipher has been made very clean using the SVG `<path>` technologies.

In addition, the ciphers themselves have been reordered and slightly modified. The Pigpen Cipher, which used to be the 5th cipher to crack, is now the 3rd, with the Binary Cipher taking its place. The progression of the activity now proceeds (roughly) from the most visual cipher to the most computer-science related. Level 3 is visual, Level 4 introduces lookup tables, and level 5 uses conversion from binary to decimal, which reveals a key which is used to crack level 6's caesar cipher.

The Binary Cipher (#5) has also received improvements. The original lesson plans state that students will not be required to convert binary to decimal. Instead of this, I have developed a [supplementary application](https://snap.berkeley.edu/project?user=expertcoder14%202&project=Binary%20Demonstration) (the "Machine") that is used to give them an idea of how binary to decimal calculations work. When a team of students reaches level 5, they are given level 5 and level 6 at the same time, as well as a laptop with the Machine open on it. A calculator is also provided to them, either on the laptop or physically.

The Machine was made using Snap<span style="font-style: italic;">!</span>, which is an advanced version of Scratch. Snap<span style="font-style: italic;">!</span> is preferred for this project due to its ability to perform advanced operations with lists. Click on the above link to view more information about the Machine and how it works.

## Contents of this repository ##
This repository contains six pages in the `pages` folder. These are the `.svg` files that were used to create the graphics shown on the pages. Each page also has a script that generates parts of each page, contained within the `scripts` folder. The scripts are used to transform the plaintext messages into ciphertext, and they may also be responsible for producing some or all lookup tables on the page.

The `snap_project` folder contains the Machine used for the Binary Cipher (#5), which can be uploaded to [Snap<i>!</i>](https://snap.berkeley.edu/snap/snap.html) to be viewed and edited. It also contains all the assets and images used to create the project.

## How to use these files ##

You can open the `.svg` files in the `pages` folder using any browser such as Google Chrome. To print it, simply print the file from your browser!

If you want to change the messages of the ciphers, or make any other configurations, open the corrsponding page's `.js` file from the `scripts` folder. The top of each script contains variables that you can change to modify different properties of the page.
