
export const Button = ({ name, onClick }) => {

    let buttonStyle = '';

    // Esto esta muy XD, queria automatizar los botones pero no salio como pensé 😣
    switch (name) {
        case 'Get Started':
            buttonStyle = `rounded-full font-medium text-white py-3.5 px-8 font-poppins 
                tracking-wide bg-button hover:bg-cyan-300 transition-all duration-300 ease`;
            break;
        case 'Our Team':
            buttonStyle = `text-xl rounded-full font-medium text-white py-4 px-8 font-poppins uppercase 
                font-medium tracking-wider border-[1px] bg-transparent hover:bg-blue-300 transition-all duration-300 ease`;
            break;
        case 'Suscribe':
            buttonStyle = `text-xl rounded-full font-medium text-white py-3 px-10 font-poppins uppercase 
            font-medium tracking-wider border-[1px] bg-transparent`;
            break;
        case 'Know More':
            buttonStyle = `text-xl rounded-full font-medium text-dark-green font-semibold py-4 px-8 
                font-poppins uppercase font-medium tracking-wide border-[1px] bg-white hover:bg-blue-100 transition-all duration-300 ease`;
            break;
        case 'Choose Plan':
            buttonStyle = `rounded-lg font-medium text-white py-3 px-5 uppercase font-poppins 
                    tracking-wide bg-button opacity-80 self-center`;
            break;
    }

    return (
        <button className={buttonStyle} onClick={onClick}
        >
            {name}
        </button>
    )
}