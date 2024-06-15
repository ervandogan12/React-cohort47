const DisplaySize = ({ height, width }) => (
    <header className="headerStyle">
        {width}px / {height}px
    </header>
);

const BigHeadMessage = ({ state }) => {
    if (!state) {
        return null;
    }

    return (
        <div className="bigHeadMessageContainer">
            <div className="bigHeadMessageContent">
                {"You are seeing "}
                <header Component="span" className="bigHeadMessageHeader">
                    {state.name}
                </header>
                {" because your screen size is "}
                <header Component="span" className="bigHeadMessageHeader">
                    {state.size}!
                </header>
                <br />
                <div className="bigHeadMessageIcon">{state.icon}</div>
            </div>
        </div>
    );
};

export { DisplaySize, BigHeadMessage };