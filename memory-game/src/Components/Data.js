const Data = function() {
    const cards = 
        [
            {
                id: 1,
                src: './images/alice.svg'
            },
            {
                id: 2,
                src: './images/anticslab.svg'
            },
            {
                id: 3,
                src: './images/arbutusslab.svg'
            },
            {
                id: 4,
                src: './images/bigcaslon.svg'
            },
            {
                id: 5,
                src: './images/biorhyme.svg'
            },
            {
                id: 6,
                src: './images/cormorant.svg'
            },
            {
                id: 7,
                src: './images/ebgaramond.svg'
            },
            {
                id: 8,
                src: './images/firasans.svg'
            },
            {
                id: 9,
                src: './images/helveticaneue.svg'
            },
            {
                id: 10,
                src: './images/inter.svg'
            },
            {
                id: 11,
                src: './images/karla.svg'
            },
            {
                id: 12,
                src: './images/lora.svg'
            },
            {
                id: 13,
                src: './images/sourceserifpro.svg'
            },
            {
                id: 14,
                src: './images/spectral.svg'
            },
            {
                id: 15,
                src: './images/worksans.svg'
            }
        ];
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    shuffleArray(cards);
    return cards;
}

export default Data;