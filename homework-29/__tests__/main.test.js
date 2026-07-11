const { ageClassification, weekFn } = require('../main.js');

describe('ageClass', () => {

    test('age tets', () => {
        expect(ageClassification(-1)).toBe(null);
        expect(ageClassification(0)).toBe(null);
        expect(ageClassification(1)).toBe("Дитинство");
        expect(ageClassification(24)).toBe("Дитинство");
        expect(ageClassification(24.01)).toBe("Молодість");
        expect(ageClassification(44)).toBe("Молодість");
        expect(ageClassification(44.01)).toBe("Зрілість");
        expect(ageClassification(65)).toBe("Зрілість");
        expect(ageClassification(65.1)).toBe("Старість");
        expect(ageClassification(75)).toBe("Старість");
        expect(ageClassification(75.01)).toBe("Довголіття");
        expect(ageClassification(90)).toBe("Довголіття");
        expect(ageClassification(90.01)).toBe("Рекорд");
        expect(ageClassification(122)).toBe("Рекорд");
        expect(ageClassification(122.01)).toBe(null);
        expect(ageClassification(150)).toBe(null);
    })

});

describe('WeekFn', () => {

    test('return week days', () => {
        expect(weekFn(1)).toBe("Понеділок");
        expect(weekFn(2)).toBe("Вівторок");
        expect(weekFn(3)).toBe("Середа");
        expect(weekFn(4)).toBe('Четвер');
        expect(weekFn(5)).toBe('П\'ятниця');
        expect(weekFn(6)).toBe('Субота');
        expect(weekFn(7)).toBe('Неділя');
        expect(weekFn(9)).toBe(null);
        expect(weekFn(1.5)).toBe(null);
        expect(weekFn('2')).toBe(null);
    })

});

// return num < 0 ? null : изменен на return num <= 0 ? null :