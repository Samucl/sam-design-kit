export const darkenColor = (hexColor: string, amount: number): string => {
    let color = hexColor.replace('#', '');

    if (color.length === 3) {
        color = color.split('').map(char => char + char).join('');
    }

    const num = parseInt(color, 16);
    let r = (num >> 16) - amount;
    let g = ((num >> 8) & 0x00ff) - amount;
    let b = (num & 0x0000ff) - amount;

    r = Math.max(0, Math.min(255, r));
    g = Math.max(0, Math.min(255, g));
    b = Math.max(0, Math.min(255, b));

    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;
};
