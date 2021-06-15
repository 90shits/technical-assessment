# frontend challenge

## Setup

To avoid losing time, you will use a simple vue cli bootstrap.

```bash
# SETUP API
cd vue-test
npm install
node_modules/http-server/bin/http-server ./
# API is now available on http://localhost:8080/api/XXXX.json

# SETUP VUE
cd vue-test
vue create frontend
cd frontend
yarn serve
# VUE is now running on http://localhost:8081/ 
```

## Guidelines

We want to see your skills to design business code to produce **efficient** and **maintainable** code over time.

DO
* Do use good design
* Follow vuejs best practices
* Do maintainable design
* Do use unit tests
* Do use dependency management
* Do use consistent code styles
* Do use others dependencies if you want/need


DON'T DO
* Do not use Docker, Vagrant... we must be able to run the app only with `yarn serve`
* Do not loose time with amazing CSS, be basic

## Domain

The app is supposed to display a list of surveys and the aggregated answers to
those. A survey is composed of a name and a code. For a given survey, aggregated
answers are available. There are 3 types of questions:

* QCM (multiple choice question)
* Numeric
* Date

For each type of question, the aggregated answers have a different format:

* QCM: the aggregated answers give the number of response for each available
  QCM answer.
* Numeric: the aggregated answers give the average of all answers
* Date: the aggregated answers give the list of dates of all answers

## Fake API

To simulate a REST like API, you use the `api` folder into the
`/api/` directory so that the following resources should be
available:

* `http://localhost:8080/api/list.json` replies with the list of available
  surveys
* `http://localhost:8080/api/{code}.json` replies with the aggregated data
  for the survey with the given code. For instance, `http://localhost:8080/api/XX2.json`
  gives the aggregated answers for the survey with the code `XX2`.

## The Test

### Stage 1

Show a list of the surveys coming from the list endpoint.

Result will be a simple list:

| Name  	|  Code	     |
|---        |---	     |
| Paris  	| XX1        |
| Chartres  | XX2        |
| Melun  	| XX3        |

### Stage 2

The user can now click on a survey item. It will show the aggregate data of this survey.

You can display the data the way you want, be creative (data visualization).

### Stage 3 

Add a search input on the survey list to filter surveys by names and/or code.
