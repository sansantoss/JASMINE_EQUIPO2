describe('${User.name} Class', () => {
	it('exists', () => {
		expect(User).toBeDefined();
	});
	let model;
	beforeEach(() => {
        model = new User();
    });
	describe('Aditional Matcher Examples', () => {
		it('gets full names pieces', () => {
			const firstName = 'pepe';
			const middleName = 'grillo';
			const lastName = 'perez';
			//act
			model = new User(firstName, middleName, lastName);

			//assert
			expect(model.fullNamePieces).toEqual([firstName, middleName, lastName]);
    });
	});
});