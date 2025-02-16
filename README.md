# Toll fee calculator 1.0

A calculator for vehicle toll fees.

- Make sure you read these instructions carefully
- The current code base is in Java and C#, but please make sure that you do an implementation in a language **you feel comfortable** in like Javascript, Python, Assembler or [ModiScript](https://en.wikipedia.org/wiki/ModiScript) (please don't choose ModiScript).

## Background

Our city has decided to implement toll fees in order to reduce traffic congestion during rush hours.
This is the current draft of requirements:

- Fees will differ between 8 SEK and 18 SEK, depending on the time of day
- Rush-hour traffic will render the highest fee
- The maximum fee for one day is 60 SEK
- A vehicle should only be charged once an hour
  - In the case of multiple fees in the same hour period, the highest one applies.
- Some vehicle types are fee-free
- Weekends and holidays are fee-free

## Your assignment

The previous developer quit recently, claiming that this solution is production-ready.
You are now the new developer for our city - congratulations!

Your job is to deliver the code and from now on you are the responsible go-to-person for this solution. This is a solution you will have to put your name on.

## Instructions

You can make any modifications or suggestions for what you see fit. Fork this repository and deliver your results via a pull-request or send us an e-mail. You could also create a gist, for privacy reasons, and send us the link.

### ❗️ Important notes

- Emphasis on _This is a solution you will have to put your name on_. Is your solution something that you would be confident running in production?
- **You don't have to write a fully fledged solution**. However, do write comments explaining your intention and what you would have done if you had the time.

## Help I dont know C# or Java

No worries! We accept submissions in other languages as well.

## Improvements that can be made in the react (typescript) solution

- UI - the folder is named react because the ambition was to make a react app to present this data, but ran out of time.
  I didnt want to ruin the commit history so I left the folder name unchanged.
- Error handling for functions
- Linting and formatting
- Documentation and wording for date handling. Sometimes its hard to express
  what happens with with dates close to break points, such as 14:59 and 15:00.
- more test cases

## What would I add if I had more time?

- A react application to present fees, and maybe the possibility of inputing times manually to calulate a toll fee
  depending on who the app is for. If I assume that the app is for the citys employees, I would choose a framework
  like remix and focus on building a good client side application. Here I would also add some more functionality
  to view statistics and handle toll passes, vehicles and dates in bulk.
- I would add a backend solution serving the frontend app. The backend would handle most of the business logic Ive
  written in the toll-calculator folder, and I would probably store the data in a document database like dynamoDB
  with good access keys to easily handle large amount of data for the statistics part of the front end app.
  If using dynamoDB I think puting these function in AWS Lambdas would be a fitting option.

## How do i run this?

- In your terminal of choice, cd into the react folder. To run tests for the implemented functions, run `npm install` to install the testing package, then
  `npm run test`. There is also a `npm run dev` command but this was mostly used during development and is not attached to a dev server.
