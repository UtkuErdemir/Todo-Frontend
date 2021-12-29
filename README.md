## Todo App Frontend

# Technology

- It is using ReactJS.

# Testing Command and Library

- It is using Jest and React Testing Library for testing.
- npm run test is running Unit tests.
- Component are tests inside of the their folder.

# Contract Testing - Consumer

- @pact-foundation/pact library is using for that. npm run test:pact command is running pact steps.

# Development Run Command

- npm run start command runs to server.

# Test Server URL

- It is deployed to Heroku. 
- If you will test it. You have to wait a few seconds for first request.
- https://ue-todo-app-frontend.herokuapp.com/

# Contunious Integration

- CircleCI used for CI process.

# Contunious Deployment

- CircleCI integrated Heroku and its deploying to automaticly to Heroku.

# Container Tool

- Simple Dockerfile is created for this project. But its not used in CI and CD processes for now.

# Orchestration Tool

- Simple pod file is created for orchestration. But its not used in CI and CD processes for now.
