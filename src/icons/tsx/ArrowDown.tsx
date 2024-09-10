const ArrowDown = ({ size = '24px', color = '#000000' }) => (
    <svg
        width={size}
        height={size}
        viewBox='0 0 25 25'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
    >
        <path
            d='M17.5 13.5L12.5 18.5L7.5 13.5'
            stroke={color}
            stroke-width='2.5'
        />
        <path d='M12.5 5L12.5 17' stroke={color} stroke-width='2.5' />
    </svg>
)

export default ArrowDown
