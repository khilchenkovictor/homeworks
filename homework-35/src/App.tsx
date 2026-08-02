import React from 'react';
import '../scss/style.scss';
import imageUrl from './images/audit.jpg';

const App: React.FC = () => {
    // Приклад динамічного імпорту модуля lodash
    const loadLodash = () => {
        import('lodash').then(({ default: _ }) => {
            // Припустимо, ми хочемо отримати унікальні числа з масиву
            const numbers = [1, 5, 5, 5, 8, 10, 1, 1, 1, 5, 15, 42, 5];
            const uniqNumbers = _.uniq(numbers);

            console.log('Lodash uniq:', uniqNumbers);
            // Додатково використовуємо функцію random для демонстрації
            console.log('Lodash random:', _.random(0, 100, true));
        });
    };

    return (
        <div>
            <h1>title</h1>
            <p>text</p>
            <img src={imageUrl} alt="Audit" />
            <button onClick={loadLodash}>Load Lodash Dynamically</button>
        </div>
    );
};

export default App;
