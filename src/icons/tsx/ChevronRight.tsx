const ChevronRight = ({ size = '24px', color = '#000000' }) => (
    <svg
        width={size}
        height={size}
        viewBox='0 0 25 25'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
    >
        <path d='M10 5L15 12.5L10 20' stroke={color} stroke-width='2.5' />
    </svg>
)

export default ChevronRight
