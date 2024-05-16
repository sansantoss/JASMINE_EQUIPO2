describe('${User.name} Class', () => {
	let model;
    let mockUserService;
	beforeEach(() => {
        mockUserService = {lastId: null, user:{}, 
		getUserById(id) {
			this.lastId = id;
            return this.user;
		}
	};
	const data = {firstName: 'Hector', middleName: 'Cepillo', lastName: 'Herrera', id: 1};
	model = new User(data, mockUserService);
	});
	describe('getMyFullUserData', () => {
		it('Gets user data by id', async () => {
			//arrange
			mockUserService.lastId = null;
			
			//act
			const result = await model.getMyFullUserData();

			//assert
			expect(mockUserService.lastId).toBe(1);
		});
	});
});