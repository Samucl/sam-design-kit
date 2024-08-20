const ChevronUp = ({ size = '24px', color = '#000000' }) => (
    <svg
        width={size}
        height={size}
        viewBox='0 0 25 25'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
    >
        <path d='M3.5 15L12.5 10L21.5 15' stroke={color} stroke-width='2.5' />
    </svg>
)

export default ChevronUp
