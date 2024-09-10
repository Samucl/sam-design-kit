const ArrowUp = ({ size = '24px', color = '#000000' }) => (
    <svg
        width={size}
        height={size}
        viewBox='0 0 25 25'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
    >
        <path
            d='M7.5 11.5L12.5 6.5L17.5 11.5'
            stroke={color}
            stroke-width='2.5'
        />
        <path d='M12.5 20V8' stroke={color} stroke-width='2.5' />
    </svg>
)

export default ArrowUp
