const Leaderboard = () => {
    
    
    return (
        <div className="flex flex-col relative font-serif  m-16  bg-stone-50 items-center p-4  h-screen border border-sky-100 rounded-md">
        <h1 className="text-2xl font-extrabold mb-4 italic">Leaderboard</h1>
        <ul className="m-10 flex flex-row">
            <li className="flex m-2">User1</li>
            <li className="flex m-2">User2</li>
            <li className="flex m-2">User3</li>
            <li className="flex m-2">User4</li>
            <li className="flex m-2">User5</li>
        </ul>
        </div>
    );
    }

export default Leaderboard;