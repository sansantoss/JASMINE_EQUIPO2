// Majority
/*
describe('Test Example', () => {
	it('returns true', () => {
	expect(false).toBe(true);
	
	});
	
	});
*/
function insertDashes(str){
	//write code here
}


describe('insertDashes()', () => {
	it('insert dashes in between', () => {
		//arrange
		const value = "aba caba";
		
		//act
		const result = insertDashes(value);
		//log

        console.log("Result: ",result);
        //assert
        expect(result).toBe("a-b-a c-a-b-a");
    });
});
	
	