import React from 'react';

function BotCard({ bot, handleClick, inArmy, dischargeBot }) {
    const botClassColor = (botClass) => {
        switch (botClass) {
            case 'Medic':
                return 'bg-success';
            case 'Assault':
                return 'bg-danger';
            case 'Support':
                return 'bg-info';
            case 'Defender':
                return 'bg-warning';
            case 'Captain':
                return 'bg-primary';
            case 'Witch':
                return 'bg-dark';
            default:
                return 'bg-secondary';
        }
    }
    return (
        <div className="card h-100">
            <div classname="position-relative">
                <img 
                src={bot.avatar_url} 
                className="card-img-top" 
                alt={bot.name}
                onclick={handleClick} 
                style= {{cursor: 'pointer'}}
                />

                <button className= "btn btn-danger btn-sm position-absolute top-0 end-0 m-2"
                onClick={(event) => {
                    event.stopPropagation()
                    dischargeBot(bot.id)}}
                >
                        X
                </button>

            </div>

            <div className="d-flex justify-content-between align-items-center">
                <h5 className="mb-0">{bot.name}</h5>
                <span className={`badge ${botClassColor(bot.bot_class)}`}>
                    {bot.bot_class}
                </span>
            </div>

            <div className="card-body" style={{ cursor: "pointer" }} onClick={handleClick}>
                <p className="card-text">
                    <small>{bot.catchphrase}</small>
                </p>
                
                <div className="d-flex justify-content-center text-center gap-2">
                    <div>
                        <div className="fw-bold">Health</div>
                        <div>{bot.health}</div>
                    </div>
                    <div>
                        <div className="fw-bold">Damage</div>
                        <div>{bot.damage}</div>
                    </div>
                    <div>
                        <div className="fw-bold">Armor</div>
                        <div>{bot.armor}</div>
                    </div>
                </div>

                <div className="card text-center">{inArmy ? "Click to release" : "Click to enlist"}</div>
            </div>
        </div>
    );
}
export default BotCard;


