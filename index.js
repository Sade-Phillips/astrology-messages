const generateRandomNumber = (num)  => {
    return Math.floor(Math.random() * num);
}

const createHoroscope = () => {
    const signs = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aqarius', 'Pisces' ];
    const fortunes = ['You will experience significant career breakthroughs this month.', 'A long lost friend will suddenly walk back into your life', 
        'Your aura is looking extra sparkly today—don\'t let boring people dim your shine', 'You\'re not lost—just taking the scenic route. Trust your detours today',
        'Romance is in the air. So is pollen. Take antihistamines and stay open to love.', 'An accidental text will lead to a surprising opportunity. Type wisely.', 
        'An unexpected but welcome surprise will materialize this month.', 'Your radiance will attract surprising fans', 'Someone you won\'t expect will be your cheerleader', 
        'That question you thought about will be answered this month', 'A new door will open for you.' ];

    const wordsOfWisdom = ['Prepare accordingly.', 'Trust your instincts', 'Don\'t rush patience will pay off', 'Don\'t judge a book by its cover.', 
        'You have to take the rough with the smooth.', 'If it drains you, it\'s not worth your time—unless it\'s your phone battery.', 
        'Not every battle needs your sword. Sometimes silence is the sharpest weapon.', 'You don\'t need everyone\'s approval. You\'re not Wi-Fi.', 
        'Romanticize your life—even the part where you wash dishes to a power ballad.', 'You are not behind. You\'re just on your own timeline. Keep going.', 
        'The universe isn\'t ignoring you. It\'s building up dramatic suspense.', 'You can be soft and still set boundaries. Pillows have edges too.' ];

    const randomSign = signs[generateRandomNumber(signs.length)];
    const randomFortunes = fortunes[generateRandomNumber(fortunes.length)];
    const randomWordsOfWisdom = wordsOfWisdom[generateRandomNumber(wordsOfWisdom.length)];

    return {
        sign: randomSign,
        fortune: randomFortunes,
        wordsOfWisdom: randomWordsOfWisdom
    }
}

const horoscope = createHoroscope();

console.log(horoscope);
console.log(`You are a ${horoscope.sign}, I see that ${horoscope.fortune}; ${horoscope.wordsOfWisdom}`);