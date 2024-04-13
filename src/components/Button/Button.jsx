
export const Button = ({ name }) => {

    let buttonStyle = '';

    // Esto esta muy XD, queria automatizar los botones pero no salio como pensé 😣
    switch (name) {
        case 'Get Started':
            buttonStyle = `rounded-full font-medium text-white py-3.5 px-8 font-poppins 
                tracking-wide bg-button`;
            break;
        case 'Our Team':
            buttonStyle = `text-xl rounded-full font-medium text-white py-4 px-8 font-poppins uppercase 
                font-medium tracking-wider border-[1px] bg-transparent`;
            break;
        case 'Suscribe':
            buttonStyle = `text-xl rounded-full font-medium text-white py-3 px-10 font-poppins uppercase 
            font-medium tracking-wider border-[1px] bg-transparent`;
            break;
        case 'Know More':
            buttonStyle = `text-xl rounded-full font-medium text-dark-green font-semibold py-4 px-8 
                font-poppins uppercase font-medium tracking-wide border-[1px] bg-white`;
            break;
        case 'Choose Plan':
            buttonStyle = `rounded-lg font-medium text-white py-3 px-5 uppercase font-poppins 
                    tracking-wide bg-button opacity-80 self-center`;
            break;
    }

    return (
        <button className={buttonStyle}
        >
            {name}
        </button>
    )
}