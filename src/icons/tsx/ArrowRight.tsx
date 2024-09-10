const ArrowRight = ({ size = '24px', color = '#000000' }) => (
    <svg
        width={size}
        height={size}
        viewBox='0 0 25 25'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
    >
        <path
            d='M13.5 7.5L18.5 12.5L13.5 17.5'
            stroke={color}
            stroke-width='2.5'
        />
        <path d='M5 12.5H17' stroke={color} stroke-width='2.5' />
    </svg>
)

export default ArrowRight
