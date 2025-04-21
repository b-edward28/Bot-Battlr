import React from 'react';
import {useState, useEffect} from 'react';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    const [bots, setBots] = useState([]);
    const [myArmy, setMyArmy] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8001/bot")
            .then((response) => response.json())
            .then((data) => setBots(data));
    }, []);

    const enlistBot = (bot) => {
      if (!myArmy.find((armyBot) => armyBot.id === bot.id)) {
        setMyArmy([...myArmy, bot]);
      }
    }

    const releaseBot = (botId) => {
      setMyArmy(myArmy.filter((bot) => bot.id !== botId));
    }

    const dischargeBot = async (botId) => {
      try {
        await fetch(`http://localhost:8001/bot/${botId}`, {
          method: "DELETE",
        })
      } catch (error) {
        console.error("Error discharging bot:", error);

      } finally {

        setMyArmy(myArmy.filter((bot) => bot.id !== botId));
        setBots(bots.filter((bot) => bot.id !== botId));
      }
    }

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Bot Battlr</h1>
      
      <div className="row mb-4">
        <div className="col">
          <div className="card">
            <div className="card-header bg-success text-white">
              <h2 className="mb-0" >Your Bot Army</h2>
            </div>
            
            <div className="card-body">
              <YourBotArmy bots={myArmy} releaseBot={releaseBot} dischargeBot={dischargeBot} />
            </div>

          </div>

        </div>

      </div>
      
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-header bg-primary text-white">
              <h3 className="mb-0">Available Bots</h3>
              </div>
              
              <div className="card-body">
                <BotCollection bots={bots} enlistBot={enlistBot} dischargeBot={dischargeBot} />
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
