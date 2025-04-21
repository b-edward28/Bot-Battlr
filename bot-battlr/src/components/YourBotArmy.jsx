import BotCard from "./BotCard";

function YourBotArmy({ bots, dischargeBot, releaseBot }) {
    return (
        <div className="row">
            {bots.map((bot) => (
                <div className="col-md-2 mb-4" key={bot.id}>
                    <BotCard 
                        bot={bot} 
                        dischargeBot={dischargeBot} 
                        handleClick={() =>releaseBot(bot.id)}
                        inArmy={true} 
                    />
                </div>
            ))}
        </div>
    );
}
export default YourBotArmy;