describe("search", () => {
    it("should search the given array [2,4,6,8,10] for 6", () =>{
        let array = [2,4,6,8,10]
        let value = 6
        let result = 2
        expect(search(value, array)).toEqual(result)
    })
    it("should search the given array [22,45,67,88,99] for 99", () =>{
        let array = [22,45,67,88,99]
        let value = 99
        let result = 4
        expect(search(value, array)).toEqual(result)
    })
    it("should search the given array [1,2,3,4,5,6] for 2", () =>{
        let array = [1,2,3,4,5,6]
        let value = 2
        let result = 1
        expect(search(value, array)).toEqual(result)
    })
    it("should search the given array [21,45,55,103,155] for 103", () =>{
        let array = [21,45,55,103,155]
        let value = 103
        let result = 3
        expect(search(value, array)).toEqual(result)
    })
})