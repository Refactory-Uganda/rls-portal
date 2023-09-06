const AdminNacHeader = ({ label }) => {
    const header = {
        backgroundColor: 'rgb(196, 195, 195)',
        borderBottomLeftRadius: '50px',
        borderBottomRightRadius: '50px',
        margin: '0 1rem',
    };

    const content = {
        margin: '1rem 6rem 0 6rem',
        backgroundColor: '#693769ff',
        textAlign: 'center',
        borderTopLeftRadius: '10px',
        borderTopRightRadius: '10px',
        color: 'white',
        padding: '.5rem',
    };

    return (
        <>
            <div style={header}>
                <h3 style={content}>{label}</h3>
            </div>
        </>
    );
};

export default AdminNacHeader;
