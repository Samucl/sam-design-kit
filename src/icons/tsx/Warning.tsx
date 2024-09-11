const Warning = ({ size = '24px', color = '#000000' }) => (
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
            d='M11.634 3.38709C12.0189 2.72043 12.9811 2.72043 13.366 3.38709L23.3113 20.6129C23.6962 21.2796 23.2151 22.1129 22.4453 22.1129H2.55468C1.78487 22.1129 1.30375 21.2796 1.68865 20.6129L11.634 3.38709ZM13.7258 18.129C13.7258 18.806 13.177 19.3548 12.5 19.3548C11.823 19.3548 11.2742 18.806 11.2742 18.129C11.2742 17.452 11.823 16.9032 12.5 16.9032C13.177 16.9032 13.7258 17.452 13.7258 18.129ZM12.5 8.62903C11.9923 8.62903 11.5806 9.04064 11.5806 9.54839L11.5806 15.0645C11.5806 15.5723 11.9923 15.9839 12.5 15.9839C13.0077 15.9839 13.4194 15.5723 13.4194 15.0645L13.4194 9.54839C13.4194 9.04064 13.0077 8.62903 12.5 8.62903Z'
            fill={color}
        />
    </svg>
)

export default Warning
