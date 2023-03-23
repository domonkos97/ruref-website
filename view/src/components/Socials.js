function Socials( {isVisible} ) {
    return (
        <div className={`socials flex flex-col items-end z-0 ${isVisible ? 'show': 'hidden'}`}>
            <p> Ide kattintva elérhető a gyülekezet </p>
            <p> <span className="underline cursor-pointer">Youtube</span> és <span className="underline cursor-pointer">Facebook</span> csatornája </p>
        </div>
    );
}

export default Socials;
