beforeAll((done) => {
    jest.setTimeout(30000)
    global.provider.setup().then(() => done());
});

afterAll((done) => {
    global.provider.finalize().then(() => done());
});
