const XSmall = ({ size = '24px', color = '#000000' }) => (
    <svg
        width={size}
        height={size}
        viewBox='0 0 25 25'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
    >
        <rect
            x='17.42'
            y='5.5'
            width='3.12175'
            height='16.8574'
            rx='1.56087'
            transform='rotate(45 17.42 5.5)'
            fill={color}
        />
        <rect
            x='5.5'
            y='7.71'
            width='3.12175'
            height='16.8574'
            rx='1.56087'
            transform='rotate(-45 5.5 7.71)'
            fill={color}
        />
    </svg>
)

export default XSmall