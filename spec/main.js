describe('${User.name} Class', () => {
	describe('default values', () => {
		it('first name defaults to empty', () => {
		//arange
		const data = { firstName: null };
		//act
		const model = new User(data);
		//assert
		expect(model.firstName).toBe('');
    });
	it('last name defaults to empty', () => {
		//arange
        const data = { lastName: null };
        //act
        const model = new User(data);
        //assert
        expect(model.lastName).toBe('');
    });
    it('middle name defaults to empty', () => {
		//arange
		const data = { middleName: null };
        //act
        const model = new User(data);
        //assert
        expect(model.middleName).toBe('');
    });
});
describe('full name', () => {
	beforeEach(() => {
		model = new User({firstName: 'San', lastName: 'Santos'});
	});
	it('middle initial when middleName is defined with first and last name', () => {
		//arrange
		model.middleName = 'Cruz';
		 //act
        const result = model.fullName;
        //assert
        expect(result).toBe('${model.firstName} ${model.middleName[0]}. ${model.lastName}');
	});
	it('when no middle name return just first and last', () => {
		//arrange
        model.middleName = '';
         //act
        const result = model.fullName;
        //assert
        expect(result).toBe('${model.firstName} ${model.lastName}');
	});
});
});
