// colours from here https://mokole.com/palette.html

export const distinctColours = [
    '#556b2f',
    '#2f4f4f',
    '#dcdcdc',
    '#d2691e',
    '#4682b4',
    '#3cb371',
    '#808000',
    '#708090',
    '#006400',
    '#191970',
    '#7f0000',
    '#ffb6c1',
    '#ff69b4',
    '#7fffd4',
    '#ff1493',
    '#87ceeb',
    '#90ee90',
    '#dda0dd',
    '#fa8072',
    '#f0e68c',
    '#db7093',
    '#1e90ff',
    '#ff00ff',
    '#da70d6',
    '#ff6347',
    '#adff2f',
    '#8b008b',
    '#a020f0',
    '#0000ff',
    '#9370db',
    '#f4a460',
    '#00bfff',
    '#00ffff',
    '#dc143c',
    '#00ff7f',
    '#00ff00',
    '#deb887',
    '#0000cd',
    '#ffff00',
    '#ffd700',
    '#ff8c00',
    '#ff4500',
    '#9932cc',
    '#8fbc8f',
    '#daa520',
    '#32cd32',
    '#00008b',
    '#20b2aa',
    '#9acd32',
];

export function getRandomColour() {
    return "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); });
}