const ArrowLeft = ({ size = '24px', color = '#000000' }) => (
    <svg
        width={size}
        height={size}
        viewBox='0 0 25 25'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
    >
        <path
            d='M11.5 17.5L6.5 12.5L11.5 7.5'
            stroke={color}
            stroke-width='2.5'
        />
        <path d='M20 12.5H8' stroke={color} stroke-width='2.5' />
    </svg>
)

export default ArrowLeft
