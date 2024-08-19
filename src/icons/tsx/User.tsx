const User = ({ size = '24px' }) => (
    <svg
        width={size}
        height={size}
        viewBox='0 0 25 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
    >
        <circle cx='12.5' cy='5.5' r='4.5' fill='black' />
        <path
            d='M18.0292 22H6.9708C6.44692 22 6.00937 21.5975 6.00181 21.0737C5.9463 17.2268 7.1438 11 12.5 11C17.8562 11 19.0537 17.2268 18.9982 21.0737C18.9906 21.5975 18.5531 22 18.0292 22Z'
            fill='black'
            stroke='black'
            stroke-width='2'
        />
    </svg>
)

export default User
