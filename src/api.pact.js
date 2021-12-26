import {TodoService} from './utils/TodoService'

describe("API Pact test", () => {
        const todoService = new TodoService(true);
        test("posts a todo", async () => {
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

            const api = (await todoService.addTodo("1")).data;

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

            const api = (await todoService.addTodo('')).data;

            expect(api).toStrictEqual(expectedResult);
        });
});