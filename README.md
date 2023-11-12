# 05 Third-Party APIs: Work Day Scheduler

## Installation 

Clone the repository:

```sh
git clone git@github.com:EricRisher/work-day-scheduler.git
```

## Project Visual
![Alt text](<Screenshot Capture - 2023-11-12 - 00-29-05.png>)

## Acceptance Criteria ✅
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with time blocks for standard business hours of 9am to 5pm
WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future
WHEN I click into a time block
THEN I can enter an event
WHEN I click the save button for that time block
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist

## Usage

To modify your schedule for a specific hour, click on the corresponding time block's textarea. Input your desired plans, and upon completion, click the save icon. Your entries for that time block will then be stored in local storage for future reference.

## Deployed Application
You can view the live application
[Here](https://ericrisher.github.io/work-day-scheduler/)