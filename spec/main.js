describe('${User.name} Class', () => {
    it('exists', () => {
        expect(User).toBeDefined();
    });

    let model;

    beforeEach(() => {
        model = new User();
    });

    describe('Additional Matcher Examples', () => {
        it('gets full name pieces', () => {
            const firstName = 'pepe';
            const middleName = 'grillo';
            const lastName = 'perez';
            // Act
            model = new User({ firstName, middleName, lastName });
            // Assert
            expect(model.fullNamePieces).toMatchObject([firstName, middleName, lastName]);
        });
    });
});
