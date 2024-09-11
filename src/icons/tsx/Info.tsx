const Info = ({ size = '24px', color = '#000000' }) => (
    <svg
        width={size}
        height={size}
        viewBox='0 0 25 25'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
    >
        <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M2 12.5C2 6.70101 6.70101 2 12.5 2C18.299 2 23 6.70101 23 12.5C23 18.299 18.299 23 12.5 23C6.70101 23 2 18.299 2 12.5ZM11.2647 8.48529C11.2647 7.80306 11.8178 7.25 12.5 7.25C13.1822 7.25 13.7353 7.80306 13.7353 8.48529C13.7353 9.16753 13.1822 9.72059 12.5 9.72059C11.8178 9.72059 11.2647 9.16753 11.2647 8.48529ZM12.5 18.0588C13.0117 18.0588 13.4265 17.644 13.4265 17.1324L13.4265 11.5735C13.4265 11.0619 13.0117 10.6471 12.5 10.6471C11.9883 10.6471 11.5735 11.0619 11.5735 11.5735L11.5735 17.1324C11.5735 17.644 11.9883 18.0588 12.5 18.0588Z'
            fill={color}
        />
    </svg>
)

export default Info
