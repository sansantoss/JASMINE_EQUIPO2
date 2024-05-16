describe('${User.name} Class', () => {
	let model;
	beforeEach(() => {
        model = new User();
    });
	describe('say my name', () => {
		it('alerts the full name of the user', () => {
			//arrange
            model.firstName = 'HECTOR';
			model.lastName = 'CEPILLO';
			spyOn(window, 'alert');
			//act
			model.sayMyName();
            //assert
            expect(window.alert).toHaveBeenCalled();
            expect(window.alert).toHaveBeenCalled('HECTOR CEPILLO');
        });
	});
});
//new main