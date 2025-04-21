import BotCard from "./BotCard";

function BotCollection({ bots, dischargeBot, enlistBot }) {
    return (
        <div className="row">
            {bots.map((bot) => (
                <div className="col-md-3 mb-4" key={bot.id}>
                    <BotCard 
                        bot={bot} 
                        dischargeBot={dischargeBot} 
                        handleClick={() =>enlistBot(bot)}
                        inArmy={false} 
                    />
                </div>
            ))}
        </div>
    );
}
export default BotCollection;