const EyeSlash = ({ size = '24px', color = '#000000' }) => (
    <svg
        width={size}
        height={size}
        viewBox='0 0 25 25'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
    >
        <g clip-path='url(#clip0_2105_19)'>
            <mask
                id='mask0_2105_19'
                maskUnits='userSpaceOnUse'
                x='-1'
                y='6'
                width='30'
                height='13'
            >
                <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M3.07998 6.5H-0.5V18.5H15.9484L3.07998 6.5ZM21.2248 18.5H28.5V6.5H8.9451L21.4986 18.2064L21.2248 18.5Z'
                    fill='#D9D9D9'
                />
            </mask>
            <g mask='url(#mask0_2105_19)'>
                <path
                    d='M12.5 7.5C6.9 7.5 2.83333 10.8333 1.5 12.5C2.5 14.1667 6.1 17.5 12.5 17.5C18.9 17.5 22.1667 14.1667 23.5 12.5C22 11 18.1 7.5 12.5 7.5Z'
                    stroke={color}
                    stroke-width='1.7'
                />
                <circle cx='12.5' cy='12.5' r='5' fill={color} />
            </g>
            <rect
                x='4'
                y='6.32838'
                width='2.5'
                height='21.0669'
                rx='1'
                transform='rotate(-47 4 6.32838)'
                fill={color}
            />
        </g>
        <defs>
            <clipPath id='clip0_2105_19'>
                <rect
                    width='24'
                    height='24'
                    fill='white'
                    transform='translate(0.5 0.5)'
                />
            </clipPath>
        </defs>
    </svg>
)

export default EyeSlash