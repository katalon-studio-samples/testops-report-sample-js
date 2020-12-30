describe("Async test", () => {
    it("works with async/await", async function () {
        await new Promise((r) => setTimeout(r, 1000));
    });

    it("should be timeout", async function () {
        await new Promise((r) => setTimeout(r, 10000));
    });
});
