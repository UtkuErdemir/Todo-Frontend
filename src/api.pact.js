import { eachLike } from '@pact-foundation/pact/dsl/matchers';

expect.extend({
    toContainObject(received, argument) {
      const pass = this.equals(received, 
        expect.arrayContaining([
          expect.objectContaining(argument)
        ])
      )
  
      if (pass) {
        return {
          message: () => (`expected ${this.utils.printReceived(received)} not to contain object ${this.utils.printExpected(argument)}`),
          pass: true
        }
      } else {
        return {
          message: () => (`expected ${this.utils.printReceived(received)} to contain object ${this.utils.printExpected(argument)}`),
          pass: false
        }
      }
    }
})


describe("API Pact test", () => {
        const todoService = require('./utils/service');
        test("gets all todos", async() =>{
            await global.provider.addInteraction({
                uponReceiving: 'a request all todos',
                withRequest: {
                    method: 'GET',
                    path: '/todos',
                },
                willRespondWith: {
                    status: 200,
                    headers: { 'Content-Type': 'application/json' },
                    body: {success:true, data: eachLike({id:0,todo_name:"Sample Todo"},{min:1})}
                }
            });

            const apiGet = (await todoService.getTodos(true)).data;
            expect(apiGet.data).toContainObject({id:0,todo_name:"Sample Todo"});
        })

        
        test("posts a todo and get todos", async () => {
            const todo = { todo_name:'1' };
            const expectedResult = {
                "message": "Todo 1 named is saved.",
                "success": true
            };
            await global.provider.addInteraction({
                uponReceiving: 'a request to create a new todo',
                withRequest: {
                    method: 'POST',
                    path: '/todos',
                    headers: { 'Content-Type':'application/x-www-form-urlencoded' },
                    body: todo
                },
                willRespondWith: {
                    status: 201,
                    headers: { 'Content-Type': 'application/json' },
                    body: expectedResult
                }
            });

            const api = (await todoService.addTodo("1",true)).data;
            expect(api).toStrictEqual(expectedResult);
        });

        test("posts a empty todo", async () => {
            const todo = { todo_name:'' };
            const expectedResult = {
                "message": "Todo name cannot be empty.",
                "success": false
            };
    
            await global.provider.addInteraction({
                uponReceiving: 'a request to create a new todo with empty name',
                withRequest: {
                    method: 'POST',
                    path: '/todos',
                    headers: { 'Content-Type':'application/x-www-form-urlencoded' },
                    body: todo
                },
                willRespondWith: {
                    status: 400,
                    headers: { 'Content-Type': 'application/json' },
                    body: expectedResult
                }
            });

            const api = (await todoService.addTodo('',true)).data;

            expect(api).toStrictEqual(expectedResult);
        });
});